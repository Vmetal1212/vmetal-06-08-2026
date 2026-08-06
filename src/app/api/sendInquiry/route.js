import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'
import multer from 'multer';
import path from 'path';
import { promisify } from 'util';
import { promises as fs, writeFile } from 'fs';
import { google } from "googleapis";

const getDisplayDimensions = (item) => {
    const rawDimensions = typeof item?.dimensions === "string" ? item.dimensions.trim() : "";

    if (!rawDimensions) return "N/A";

    const dimensionParts = rawDimensions
        .split(" x ")
        .map((part) => part.trim())
        .filter(Boolean);

    const labeledParts = dimensionParts.filter((part) => /\([^)]+\)/.test(part));

    if (labeledParts.length > 0) {
        return labeledParts.join(" x ");
    }

    return rawDimensions;
};

function isGibberish(text) {
    if (!text) return false;

    // Keep spaces so words don't merge into fake consonant chains
    const cleaned = text.toLowerCase().replace(/[^a-z\s]/g, "");
    const words = cleaned.split(/\s+/).filter(Boolean);

    if (words.length === 0) return true;

    // 1️⃣ Detect keyboard smash patterns
    const keyboardPatterns = ["asdf", "qwer", "zxcv", "lkjh", "mnbv", "poiuy"];
    if (keyboardPatterns.some(p => cleaned.includes(p))) return true;

    // 2️⃣ Check individual words for unrealistic consonant clusters
    for (const w of words) {
        if (w.length > 6 && /[^aeiou]{5,}/.test(w)) {
            // allow common English exceptions
            const allowed = ["strength", "rhythm", "through", "schwartz"];
            if (!allowed.some(a => w.includes(a))) return true;
        }
    }

    // 3️⃣ Repeated characters (more than 4)
    if (/(.)\1{4,}/.test(cleaned)) return true;

    // 4️⃣ Vowel ratio check (more relaxed)
    const lettersOnly = cleaned.replace(/\s/g, "");
    const vowels = lettersOnly.match(/[aeiou]/g)?.length || 0;
    const vowelRatio = vowels / lettersOnly.length;

    if (lettersOnly.length >= 6) {
        if (vowelRatio < 0.18) return true; // too few vowels → gibberish
        if (vowelRatio > 0.80) return true; // too many vowels → gibberish
    }

    return false; // It's normal text
}

async function validateGibberish(fields) {
    const errors = [];

    const fieldConfig = {
        first_name: { minLength: 2, maxLength: 50, required: true },
        last_name: { minLength: 2, maxLength: 50, required: true },
        company: { minLength: 2, maxLength: 100, required: false },
        message: { minLength: 10, maxLength: 1000, required: false },
        address: { minLength: 10, maxLength: 200, required: true },
        city: { minLength: 2, maxLength: 50, required: true },
        state: { minLength: 2, maxLength: 50, required: true }
    };

    for (const [fieldName, value] of Object.entries(fields)) {
        if (!value || typeof value !== "string") continue;

        const config = fieldConfig[fieldName];
        if (!config) continue;

        const trimmedValue = value.trim();

        if (config.required && trimmedValue.length < config.minLength) {
            errors.push(`${fieldName.replace('_', ' ')} is too short`);
            continue;
        }

        if (trimmedValue.length > config.maxLength) {
            errors.push(`${fieldName.replace('_', ' ')} is too long`);
            continue;
        }

        // Skip short fields
        if (trimmedValue.length < 3) continue;

        // ✅ NEW: Pure JS gibberish checker
        if (isGibberish(trimmedValue)) {
            errors.push(`${fieldName.replace("_", " ")} appears to contain invalid or random text`);
        }
    }

    return errors;
}


// ✅ Helpers


// Function to validate text fields for gibberish
const updateSpreadSheet = async (
    first_name, last_name, email, phone, gst, company, details, address, pin_code, city, state, message, date, time
) => {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

        const values = details.map((item, index) => [
            index === 0 ? first_name : "",      
            index === 0 ? last_name : "",       
            index === 0 ? email : "",           
            index === 0 ? phone : "",           
            index === 0 ? gst : "",             
            index === 0 ? company : "",         
            index === 0 ? address : "",         
            index === 0 ? pin_code : "",
            index === 0 ? city : "",
            index === 0 ? state : "",
            item.product || "N/A",              
            item.service || "N/A",              
            item.category || "N/A",             
            item.brands.length > 0 ? item.brands.join(", ") : "N/A", 
            item.weight ? item.weight : "N/A",         
            item.weight ? (item.rawWeightKg != null ? Number(item.rawWeightKg).toFixed(3) : (item.weight * 1000).toFixed(3)) : "N/A",
            item.sqft ? item.sqft : "N/A",
            item.pieces ? item.pieces : "N/A",                    
            index === 0 ? date : "",  // Date (only for first row)
            index === 0 ? time : ""   // Time (only for first row)  
        ]);

        // First, append the user details
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A2:Q2', // Start in row 2 to avoid overwriting headers
            valueInputOption: 'USER_ENTERED',
            requestBody: { values }
        });

        // Now, append the product details

        return { status: 'success' };

    } catch (error) {
        console.log('Error updating spreadsheet:', error);
        return { status: 'error', message: error.message };
    }
};

// product, service, category, brand, `${weight} MT`, `${weight * 1000} kg`,

export async function POST(req, res) {


    try {
        // Wait for the file upload to complete
        const data = await req.formData();
        const first_name = data.get('first_name')
        const last_name = data.get('last_name')
        const email = data.get('email');
        const phone = data.get('phone');
        const productDetails = data.get('productDetails');

        const message = data.get('message');
        const address = data.get('address')
        const pin_code = data.get('pin_code')
        const city = data.get('city')
        const state = data.get('state')
        const gst = data.get('gst')
        const company = data.get('company')

        const file = data.get('attachment')

         const fieldsToValidate = {
            first_name,
            last_name,
            company,
            message,
            address,
            city,
            state
        };

        const validationErrors = await validateGibberish(fieldsToValidate);


        if (validationErrors.length > 0) {
            return NextResponse.json({ 
                success: false, 
                message: "No Valid Data",
                errors: validationErrors 
            }, { status: 400 });
        }

        let filePath
        if (file && file !== "undefined") {
            const byteData = await file.arrayBuffer();
            const buffer = Buffer.from(byteData)
            filePath = path.join(process.cwd(), '/src/uploads', file.name);
            await fs.writeFile(filePath, buffer); // Use fs.promises.writeFile            
        }
        console.log(filePath);

        let tableRows = '';  // Initialize an empty string to hold the rows for the product table
        const details = JSON.parse(productDetails)
        const hasPolycarbonate = details.some(item => item.category === "Polycarbonate Sheets");

        // if (!productDetails) {
        //     return NextResponse.json({ success: false, message: "Each Field is required" }, { status: 404 })
        // }

        

        try {
            const response = await fetch(process.env.API_URL + "/api/inquiry-responses", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json", // Ensure correct casing
                },
                body: JSON.stringify({
                    data: {
                        first_name: first_name,       // Ensure these variables are defined
                        last_name: last_name,     // Fixed typo here
                        email: email,
                        phone: phone,
                        gst_number: gst,
                        company_name:  company,
                        products: details.map(item => item.product).join(', '),
                        category: details.map(item => item.category).join(', '),
                        service: details.map(item => item.service).join(', '),
                        brands: details.map(item => `${item.brands.join(', ')}`).join(', '),
                        weight: `${details.map(item => item.weight).join(', ')}, ${details.map(item => item.pieces).join(', ') }`,
                        address: address,
                        pincode: pin_code,
                        city: city,
                        state: state,
                        message: message,
                    }
                })
            });
            console.log(response);
            if (!response.ok) {
                console.error("Error:", response.status, response.statusText);
                const json = await response.json();
                console.error("Error details:", json);
            } else {
                const json = await response.json();
                console.log("Success:", json);
            }
        } catch (error) {
            console.log(error);
            console.error("Error details:", error);
        }

        // Create a transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 465,
            secure: true, // true for 465, false for other port
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            connectionTimeout: 10000, // 10 seconds timeout
        });


        // Loop through each product in the productDetails array and generate rows
        details.forEach((item, index) => {
            tableRows += `
                <tr style="font-weight: 400; font-size: 18px;">
                    <td style="padding: 10px; border: 1px solid #ccc; text-align: center;">${index + 1}</td>
                    <td style="padding: 10px; border: 1px solid #ccc; text-align: center;">${item.product || "N/A"}</td>
                    <td style="padding: 10px; border: 1px solid #ccc; text-align: center;">${item.category || "N/A"}</td>
                    <td style="padding: 10px; border: 1px solid #ccc; text-align: center;">${item.service || "N/A"}</td>
                    <td style="padding: 10px; border: 1px solid #ccc; text-align: center;">${item.brands.length > 0 && item.brands.join(", ") || "N/A"}</td>
                    <td style="padding: 10px; border: 1px solid #ccc; text-align: center;">${getDisplayDimensions(item)}</td>
                    <td style="padding: 10px; border: 1px solid #ccc; text-align: center;">${item.weight ? `${ item.weight } ` : "N/A"}</td>
                    <td style="padding: 10px; border: 1px solid #ccc; text-align: center;">
                        ${item.weight ? (item.rawWeightKg != null ? Number(item.rawWeightKg).toFixed(3) : (item.weight * 1000).toFixed(3)) : "N/A"}
                    </td>
                    ${hasPolycarbonate ? `<td style="padding: 10px; border: 1px solid #ccc; text-align: center;">${item.category === "Polycarbonate Sheets" ? (item.sqft || "N/A") : "N/A"}</td>` : ""}
                    <td style="padding: 10px; border: 1px solid #ccc; text-align: center;">${item.pieces ? `${ item.pieces } ` : "N/A"}</td>
                </tr>
            `;
        });

        let html = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
                    <title>V metals - Inquiry</title>
                </head>
                <body style="font-family: 'Mulish', sans-serif">
                    <div class="container">
                        <h1 style="background-color: #072854; color: #f8bc24; text-align: center; padding: 80px; border-bottom: 4px solid #f8bc24; border-bottom-left-radius: 50%; border-bottom-right-radius: 50%; font-size: 50px;">
                            Inquiry Form
                        </h1>
                        <table>
                            <tr style="font-weight: 900; font-size: 22px; padding: 20px;">
                                <td style="color: #072854; padding: 10px;">First Name :</td><td style="font-weight: 400;">${first_name}</td>
                            </tr>
                            <tr style="font-weight: 900; font-size: 22px; padding: 20px;">
                                <td style="color: #072854; padding: 10px;">Last Name :</td><td style="font-weight: 400;">${last_name}</td>
                            </tr>
                            <tr style="font-weight: 900; font-size: 22px; padding: 20px;">
                                <td style="color: #072854; padding: 10px;">Email Address :</td><td style="font-weight: 400;">${email}</td>
                            </tr>
                            <tr style="font-weight: 900; font-size: 22px; padding: 20px;">
                                <td style="color: #072854; padding: 10px;">Phone No :</td><td style="font-weight: 400;">${phone}</td>
                            </tr>
                            <tr style="font-weight: 900; font-size: 22px; padding: 20px;">
                                <td style="color: #072854; padding: 10px;">GST No. :</td><td style="font-weight: 400;">${gst}</td>
                            </tr>
                            <tr style="font-weight: 900; font-size: 22px; padding: 20px;">
                                <td style="color: #072854; padding: 10px;">Company Name:</td><td style="font-weight: 400;">${company}</td>
                            </tr>
                            <tr style="font-weight: 900; font-size: 22px; padding: 20px;">
                                <td style="color: #072854; padding: 10px;">Address :</td><td style="font-weight: 400;">${address}</td>
                            </tr>
                            <tr style="font-weight: 900; font-size: 22px; padding: 20px;">
                                <td style="color: #072854; padding: 10px;">Pin Code :</td><td style="font-weight: 400;">${pin_code}</td>
                            </tr>
                            <tr style="font-weight: 900; font-size: 22px; padding: 20px;">
                                <td style="color: #072854; padding: 10px;">City :</td><td style="font-weight: 400;">${city}</td>
                            </tr>
                            <tr style="font-weight: 900; font-size: 22px; padding: 20px;">
                                <td style="color: #072854; padding: 10px;">State :</td><td style="font-weight: 400;">${state}</td>
                            </tr>
                            <tr style="font-weight: 900; font-size: 22px; padding: 20px;">
                                <td style="color: #072854; padding: 10px;">Message :</td><td style="font-weight: 400;">${message}</td>
                            </tr>
                        </table>

                        <h2 style="color: #072854; font-size: 28px; text-align: center; margin-top: 40px;">Product Details</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr style="font-weight: 900; font-size: 22px; background-color: #072854; color: #f8bc24; text-align: center;">
                                    <th style="padding: 10px; border: 1px solid #ccc;">Sr. No.</th>
                                    <th style="padding: 10px; border: 1px solid #ccc;">Products</th>
                                    <th style="padding: 10px; border: 1px solid #ccc;">Category</th>
                                    <th style="padding: 10px; border: 1px solid #ccc;">Services</th>
                                    <th style="padding: 10px; border: 1px solid #ccc;">Brands</th>
                                    <th style="padding: 10px; border: 1px solid #ccc;">Size</th>
                                    <th style="padding: 10px; border: 1px solid #ccc;" className='text-center'>Weight (MT)</th>
                                    <th style="padding: 10px; border: 1px solid #ccc;">Weight (Kg)</th>
                                    ${hasPolycarbonate ? `<th style="padding: 10px; border: 1px solid #ccc;">Sqft</th>` : ""}
                                    <th style="padding: 10px; border: 1px solid #ccc;">Pieces</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                                ${tableRows} 
                                <tr style="font-weight: 900; font-size: 22px; background-color: #072854; color: #f8bc24; text-align: center;">
                                    <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    <td colspan="6">Total</td>
                                    <td style="padding: 10px; border: 1px solid #ccc;">
                                        ${details.length > 0
                                            ? details.reduce((sum, item) => sum + (parseFloat(item?.weight) || 0), 0)
                                            : ""}
                                    </td>
                                    <td style="padding: 10px; border: 1px solid #ccc;">
                                        ${
                                            details.length > 0
                                                ? details.reduce((sum, item) => {
                                                    return sum + (item?.rawWeightKg != null ? Number(item.rawWeightKg) : (isNaN(item?.weight) ? 0 : item.weight * 1000));
                                                }, 0).toFixed(3)
                                                : 0
                                        }
                                    </td>
                                    ${hasPolycarbonate
                                        ? `<td style="padding: 10px; border: 1px solid #ccc;">${details.length > 0
                                            ? details.reduce((sum, item) => sum + (parseFloat(item?.sqft) || 0), 0).toFixed(3)
                                            : ""}</td>`
                                        : ""}
                                    <td>
                                        ${
                                            details.length > 0
                                                ? details.reduce((sum, item) => sum + (Number(item.pieces) || 0), 0)
                                                : ""
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p>You can view this data on the spreadsheet by clicking this link: <a href="https://docs.google.com/spreadsheets/d/17C3TtiqSWqlB4hJIQjOC6pnMXl7SKHpl5raRDur3Rz0/edit?gid=0#gid=0">View Spreadsheet</a></p>
                    </div>
                </body>
                </html>
            `;

        let userHtml = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
                <title>Thank You for Your Inquiry - V Metals</title>
            </head>
            <body style="font-family: 'Mulish', sans-serif; margin: 0; padding: 0; box-sizing: border-box;">
                <div style="background-color: #f8bc24; padding: 20px; text-align: center; border-bottom: 5px solid #072854;">
                    <h1 style="color: #072854; margin: 0; font-size: 32px;">Thank You for Your Inquiry</h1>
                </div>
                <div style="padding: 20px;">
                    <p style="font-size: 18px; color: #333;">Dear ${first_name} ${last_name},</p>
                    <p style="font-size: 18px; color: #333;">
                        Thank you for reaching out to V Metals. We’ve received your inquiry, and our sales team will get back to you shortly. Here are the details you submitted:
                    </p>
                    <table style="width: 100%; max-width: 600px; margin: auto; border-collapse: collapse;">
                        <tr style="background-color: #f0f0f0;">
                            <td style="padding: 10px; color: #072854; font-weight: bold; width: 40%;">First Name:</td>
                            <td style="padding: 10px;">${first_name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; color: #072854; font-weight: bold;">Last Name:</td>
                            <td style="padding: 10px;">${last_name}</td>
                        </tr>
                        <tr style="background-color: #f0f0f0;">
                            <td style="padding: 10px; color: #072854; font-weight: bold;">Email Address:</td>
                            <td style="padding: 10px;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; color: #072854; font-weight: bold;">Phone No:</td>
                            <td style="padding: 10px;">${phone}</td>
                        </tr>
                        <tr style="background-color: #f0f0f0;">
                            <td style="padding: 10px; color: #072854; font-weight: bold;">GST No:</td>
                            <td style="padding: 10px;">${gst}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; color: #072854; font-weight: bold;">Company Name:</td>
                            <td style="padding: 10px;">${company}</td>
                        </tr>
                        <tr style="background-color: #f0f0f0;">
                            <td style="padding: 10px; color: #072854; font-weight: bold;">Address:</td>
                            <td style="padding: 10px;">${address}</td>
                        </tr>
                        <tr style="background-color: #f0f0f0;">
                            <td style="padding: 10px; color: #072854; font-weight: bold;">Pincode:</td>
                            <td style="padding: 10px;">${pin_code}</td>
                        </tr>
                        <tr style="background-color: #f0f0f0;">
                            <td style="padding: 10px; color: #072854; font-weight: bold;">City:</td>
                            <td style="padding: 10px;">${city}</td>
                        </tr>
                        <tr style="background-color: #f0f0f0;">
                            <td style="padding: 10px; color: #072854; font-weight: bold;">State:</td>
                            <td style="padding: 10px;">${state}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; color: #072854; font-weight: bold;">Message:</td>
                            <td style="padding: 10px;">${message}</td>
                        </tr>
                    </table>
        
                    <h2 style="color: #072854; font-size: 28px; text-align: center; margin-top: 40px;">Product Details</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="font-weight: 900; font-size: 22px; background-color: #072854; color: #f8bc24; text-align: center;">
                                <th style="padding: 10px; border: 1px solid #ccc;">Sr. No.</th>
                                <th style="padding: 10px; border: 1px solid #ccc;">Products</th>
                                <th style="padding: 10px; border: 1px solid #ccc;">Category</th>
                                <th style="padding: 10px; border: 1px solid #ccc;">Services</th>
                                <th style="padding: 10px; border: 1px solid #ccc;">Brands</th>
                                <th style="padding: 10px; border: 1px solid #ccc;">Size</th>
                                <th style="padding: 10px; border: 1px solid #ccc;" className='text-center'>Weight (MT)</th>
                                <th style="padding: 10px; border: 1px solid #ccc;" className='text-center'>Weight (Kg)</th>
                                ${hasPolycarbonate ? `<th style="padding: 10px; border: 1px solid #ccc;">Sqft</th>` : ""}
                                <th style="padding: 10px; border: 1px solid #ccc;">Pieces</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${tableRows}
                            <tr style="font-weight: 900; font-size: 22px; background-color: #072854; color: #f8bc24; text-align: center;">
                                <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    <td style="padding: 10px; border: 1px solid #ccc;"></td>
                                    <td colspan="6">Total</td>
                                    <td style="padding: 10px; border: 1px solid #ccc;">
                                        ${details.length > 0
                                            ? details.reduce((sum, item) => sum + (parseFloat(item?.weight) || 0), 0)
                                            : ""}
                                    </td>
                                    <td style="padding: 10px; border: 1px solid #ccc;">
                                        ${
                                            details.length > 0
                                                ? details.reduce((sum, item) => {
                                                    return sum + (item?.rawWeightKg != null ? Number(item.rawWeightKg) : (isNaN(item?.weight) ? 0 : item.weight * 1000));
                                                }, 0).toFixed(3)
                                                : 0
                                        }
                                    </td>
                                    ${hasPolycarbonate
                                        ? `<td style="padding: 10px; border: 1px solid #ccc;">${details.length > 0
                                            ? details.reduce((sum, item) => sum + (parseFloat(item?.sqft) || 0), 0).toFixed(3)
                                            : ""}</td>`
                                        : ""}
                                    <td>
                                        ${
                                            details.length > 0
                                                ? details.reduce((sum, item) => sum + (Number(item.pieces) || 0), 0)
                                                : ""
                                        }
                                    </td>
                            </tr>
                        </tbody>
                    </table>
        
                    <p style="font-size: 18px; color: #333; padding-top: 20px;">
                        We look forward to assisting you soon. If you have any questions, feel free to reply to this email.
                    </p>
                    <p style="font-size: 18px; color: #333;">
                        Regards, <br />
                        Sales Team <br />
                        V Metal Solutions INC
                    </p>
                </div>
                <div style="background-color: #072854; color: #f8bc24; text-align: center; padding: 10px;">
                    <p style="margin: 0; font-size: 14px;">&copy; ${new Date().getFullYear()} V Metals. All rights reserved.</p>
                </div>
            </body>
            </html>
        `;


        // Setup email data
        let mailOptions1 = {
            from: `"V Metal Solutions" <${process.env.EMAIL_USER}>`, // Sender address
            to: "info@vmetalsolutions.com", // List of receivers
            // to: "moin@webify.ai", // List of receivers
            subject: `New Inqiry from ${first_name} ${last_name}`, // Subject line
            html: html, // HTML body
            attachments: file && file !== "undefined" ? [{
                filename: file.name,
                path: filePath // Full path to the uploaded file
            }] : [],
        };

        // Send mail with defined transport object
        transporter.sendMail(mailOptions1, (error, info) => {
            if (error) {
                return NextResponse.json({ success: false, message: error }, { status: 401 })
            }
        });

        let mailOptions2 = {
            from: `"V Metal Solutions" <${process.env.EMAIL_USER}>`, // Sender address
            to: "sales@vmetalsolutions.com", // List of receivers
            // to: "moin@webify.ai", // List of receivers
            subject: `New Inqiry from ${first_name} ${last_name}`, // Subject line
            html: html, // HTML body
            attachments: file && file !== "undefined" ? [{
                filename: file.name,
                path: filePath // Full path to the uploaded file
            }] : [],
        };

       
        // Send mail with defined transport object
        transporter.sendMail(mailOptions2, (error, info) => {
            if (error) {
                return NextResponse.json({ success: false, message: error }, { status: 401 })
            }
        });

       

        let mailOptions3 = {
            from: `"V Metal Solutions" <${process.env.EMAIL_USER}>`, // Sender address
            to: email, // List of receivers
            subject: `Thank You for Your Inquiry - Confirmation from V Metals`, // Subject line
            html: userHtml, // HTML body
            attachments: file && file !== "undefined" ? [{
                filename: file.name,
                path: filePath // Full path to the uploaded file
            }] : [],
        };

        // Send mail with defined transport object
        transporter.sendMail(mailOptions3, (error, info) => {
            if (error) {
                return NextResponse.json({ success: false, message: error }, { status: 401 })
            }
        });

        const today = new Date();
        const date = today.toLocaleDateString('en-GB')
        const time = today.toLocaleTimeString('en-GB')

        const ApiReturn = await updateSpreadSheet(first_name, last_name, email, phone, gst, company, details, address, pin_code, city, state, message, date, time)
        console.log(ApiReturn);
        if (ApiReturn.errors) {
            return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 401 })
        }

        if(file && file !== "undefined"){
            await fs.unlink(filePath)
        }

        return NextResponse.json({ success: true, message: "Submitted Successfully" }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Some Error Occurred" }, { status: 401 })
    }

}



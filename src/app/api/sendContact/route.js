import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ---------------------------------------------------------
   GIBBERISH DETECTOR (SAFE)
--------------------------------------------------------- */
function isGibberish(text) {
    if (!text) return false;

    const cleaned = text.toLowerCase().replace(/[^a-z\s]/g, "");
    const words = cleaned.split(/\s+/).filter(Boolean);

    if (words.length === 0) return true;

    const keyboardPatterns = ["asdf", "qwer", "zxcv", "lkjh", "mnbv", "poiuy"];
    if (keyboardPatterns.some(p => cleaned.includes(p))) return true;

    for (const w of words) {
        if (w.length > 6 && /[^aeiou]{5,}/.test(w)) {
            const allowed = ["strength", "rhythm", "through"];
            if (!allowed.some(a => w.includes(a))) return true;
        }
    }

    if (/(.)\1{4,}/.test(cleaned)) return true;

    const letters = cleaned.replace(/\s/g, "");
    const vowels = letters.match(/[aeiou]/g)?.length || 0;
    const ratio = vowels / letters.length;

    if (letters.length >= 6) {
        if (ratio < 0.18) return true;
        if (ratio > 0.85) return true;
    }

    return false;
}

/* ---------------------------------------------------------
   VALIDATE FIELDS
--------------------------------------------------------- */
function validateFields({ name, subject, message }) {
    const errors = [];

    if (!name || name.trim().length < 2) {
        errors.push("Name is too short.");
    } else if (isGibberish(name)) {
        errors.push("Name appears to contain invalid or random text.");
    }

    if (subject && subject.trim().length > 0 && isGibberish(subject)) {
        errors.push("Subject appears to contain invalid or random text.");
    }

    // Messages can be long, so gibberish check is allowed but relaxed
    if (!message || message.trim().length < 5) {
        errors.push("Message is too short.");
    } else if (message.length < 250 && isGibberish(message)) {
        // Only gibberish-check short messages (spam-type)
        errors.push("Message appears to contain invalid or random text.");
    }

    return errors;
}

/* ---------------------------------------------------------
   MAIN POST HANDLER
--------------------------------------------------------- */
export async function POST(req, res) {
    const { name, email, phone, subject, message } = await req.json();

    // 1️⃣ Run validation
    const validationErrors = validateFields({ name, subject, message });

    if (validationErrors.length > 0) {
        return NextResponse.json(
            {
                success: false,
                message: "Invalid input detected.",
                errors: validationErrors
            },
            { status: 400 }
        );
    }

    try {
        console.log({ name, email, phone, subject, message });
        console.log("submitting");

        /* -------------------------------------------
           Store in Strapi / Database
        ------------------------------------------- */
        try {
            const response = await fetch(process.env.API_URL + "/api/contact-responses", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    data: {
                        name: name,
                        email: email,
                        phoneNumber: phone,
                        subject: subject,
                        message: message
                    }
                })
            });

            if (!response.ok) {
                const json = await response.json();
                console.error(json);
            }
        } catch (error) {
            console.log(error);
            return NextResponse.json({ success: false, message: error }, { status: 500 });
        }

        /* -------------------------------------------
           EMAIL SENDING
        ------------------------------------------- */
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            connectionTimeout: 10000
        });

        let html = `
            <html>
                <body style="font-family: Arial, sans-serif;">
                    <h1 style="background-color: #072854; color: #f8bc24; padding: 20px; text-align: center;">
                        Contact Form
                    </h1>
                    <table style="width:100%; font-size:18px; border-collapse: collapse;">
                        <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
                        <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
                        <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
                        <tr><td><strong>Subject:</strong></td><td>${subject}</td></tr>
                        <tr><td><strong>Message:</strong></td><td>${message}</td></tr>
                    </table>
                </body>
            </html>`;

        const recipients = [
            "info@vmetalsolutions.com",
            "sales@vmetalsolutions.com",
            // "moin@webify.ai"
        ];

        for (let to of recipients) {
            transporter.sendMail({ from: `"V Metal Solutions" <${process.env.EMAIL_USER}>`, to, subject, html });
        }

        return NextResponse.json({ success: true, message: "Submitted Successfully" }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Some Error Occurred" }, { status: 500 });
    }
}

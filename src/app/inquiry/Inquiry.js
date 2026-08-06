'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from '@/app/styles/inquiry.module.css'
import { HiChevronDown } from "react-icons/hi";
import Link from 'next/link';
import { HiOutlinePhone } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import axios from 'axios';
import { BiSolidDownload } from "react-icons/bi";
import { useForm } from 'react-hook-form';
import country from '@/utils/CountryCodes.json'
import { CgAsterisk } from "react-icons/cg";
import { useRouter } from 'next/navigation';
import query from 'india-pincode-search'
import ProductInquiry from '@/components/ProductInquiry';


const Inquiry = () => {

    const { register, handleSubmit, reset, formState: { errors }, watch, setValue } = useForm();

    const [drop, setDrop] = useState(Array(10).fill(false));
    const [first_prefix, setFirst_prefix] = useState("Mr");
    const [focus, setFocus] = useState(Array(16).fill(false));
    const [summary, setSummary] = useState(false);


    const [productDetails, setProductDetails] = useState([
        {
            product: null,
            category: null,
            service: null,
            brands: [],
            dimensions: null,
            weight: null,
            pieces: null,
            rawWeightKg: null,
        }
    ]);


    const [success, setSuccess] = useState({ success: null, text: '' });
    const [loading, setLoading] = useState(false);
    const [countryCode, setCountryCode] = useState({});

    const formData = watch()

    const dropdownRefs = useRef([]);



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRefs.current.every(ref => ref && !ref.contains(event.target))) {
                setDrop(Array(5).fill(false));
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setDrop]);

    

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        // Function to create ScrollTrigger for a given row selector with delay
        function createScrollTrigger(rowSelector, item, sensitivity, duration) {
            var translateSetter = gsap.quickSetter(rowSelector + item, "y", "px");
            var proxy = { y: 0 };

            ScrollTrigger.create({
                trigger: rowSelector,
                start: "top 10%",
                end: "bottom 50%+=100px",
                onUpdate: self => {
                    var translateY = self.getVelocity() / sensitivity; // Adjust the sensitivity
                    if (Math.abs(translateY) > Math.abs(proxy.y)) {
                        proxy.y = translateY;
                        gsap.to(proxy, {
                            y: 0,
                            duration: duration, // Adjust the duration
                            ease: "power3",
                            overwrite: true,
                            onUpdate: () => translateSetter(proxy.y)
                        });
                    }
                }
            });

            gsap.set(rowSelector + item, {
                transformOrigin: "center center",
                force3d: true
            });
        }

        // Apply to both rows with different parameters
        // createScrollTrigger(".scroll-section .images-1", -100, 1); // Row 1: sensitivity -10, duration 1s
        createScrollTrigger(`.${styles.inquiry}`, ` .${styles.content}`, -150, 1.5);
        createScrollTrigger(`.${styles.inquiry}`, ` .col-lg-8`, 150, 1.5);
    })

    const router = useRouter()

const onSubmit = async (data) => {
    setSuccess({ success: null, text: '' });

    try {
        setLoading(true);

        const ApiData = new FormData();
        ApiData.append('first_name', `${first_prefix} ${data.first_name}`);
        ApiData.append('last_name', data.last_name);
        ApiData.append('email', data.email);
        ApiData.append('phone', `${countryCode.dial_code ?? '91'}${data.phone}`);
        ApiData.append('gst', data.gst);
        ApiData.append('company', data.company_name);
        ApiData.append('productDetails', JSON.stringify(productDetails));
        ApiData.append('address', data.address);
        ApiData.append('pin_code', data.pin_code);
        ApiData.append('city', data.city);
        ApiData.append('state', data.state);
        ApiData.append('message', data.message);

        if (data.attachment) {
            ApiData.append('attachment', data.attachment[0]);
        }

        const response = await fetch("/api/sendInquiry/", {
            method: "POST",
            body: ApiData
        });

        const json = await response.json();

        if (json.success) {
            router.push('/thank-you');
            setSuccess({ success: true, text: json.message });
            reset();
            setProductDetails([
                {
                    product: null,
                    category: null,
                    service: null,
                    brands: [],
                    dimensions: null,
                    weight: null,
                    pieces: null,
                    rawWeightKg: null,
                }
            ]);
        } else {

            // ⭐⭐ DISPLAY API VALIDATION ERRORS ⭐⭐
            if (json.errors && Array.isArray(json.errors)) {
                setSuccess({
                    success: false,
                    text: json.errors.join("\n")
                });
            } else {
                setSuccess({
                    success: false,
                    text: json.message || "Something went wrong"
                });
            }
        }

    } catch (error) {
        console.log(error);
        setSuccess({
            success: false,
            text: "Something went wrong. Please try again."
        });
    } finally {
        setLoading(false);
        setTimeout(() => {
            setSuccess({ success: null, text: '' });
        }, 3000);
    }
};


    useEffect(() => {
        const fetchCountryCode = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                const userCountryCode = data.country_code;

                // Find matching country in the country array and set it as the default
                const matchedCountry = country.find(item => item.code === userCountryCode);
                if (matchedCountry) {
                    setCountryCode(matchedCountry);
                }
            } catch (error) {
                console.error("Error fetching user's country code:", error);
            }
        };

        fetchCountryCode();

    }, [country]);


    const handleFocus = (index, e) => {
        const value = e.target.value;
        const array = [...focus]; // Create a new array to avoid mutating state directly
        array[index] = value !== ''; // Set true if value exists, false otherwise
        setFocus(array);
    };

    const handleOpen = (index) => {
        const array = [...drop];
        array[index] = !array[index]; // Toggle dropdown open state
        setDrop(array);
    };

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();


    const handlePincode = (pin) => {
        if (pin.length === 6) {
            const address = query.search(pin);
            console.log(address);
            setValue('city', capitalize(address[0].city))
            setValue('state', capitalize(address[0].state))
        }
    }

    const addProduct = () => {
        const details = {
            product: null,
            category: null,
            service: null,
            brands: [],
            dimensions: null,
            weight: null,
            pieces: null,
            sqft: null,
            rawWeightKg: null,
        }
        setProductDetails(prev => [...prev, details])
    }






    return (
        <>
            <div className="container-fluid padd-x">
                <div className={styles.inquiry}>
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className={styles.content}>
                                <h1>Send us a Message</h1>
                                <Link href={"tel:+9510215623"} className={styles.link}>
                                    <HiOutlinePhone className={styles.icon} />
                                    <span>+91 95102 15623</span>
                                </Link>
                                <Link href={"tel:+919727015624"} className={styles.link}>
                                    <HiOutlinePhone className={styles.icon} />
                                    <span>+91 97270 15624</span>
                                </Link>
                                <Link className={styles.link} href={"https://mail.google.com/mail/?view=cm&fs=1&to=info@vmetalsolutions.com"}>
                                    <IoMailOutline className={styles.icon} />
                                    <span>info@vmetalsolutions.com</span>
                                </Link>
                                <Link className={styles.link} href={"https://mail.google.com/mail/?view=cm&fs=1&to=sales@vmetalsolutions.com"}>
                                    <IoMailOutline className={styles.icon} />
                                    <span>sales@vmetalsolutions.com</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12">
                            <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="input-field w-100">
                                            <div className="d-flex align-items-end w-100">
                                                <div className={`dropDown badge p-0 w-25 ${drop[5] ? "active" : null}`} ref={el => (dropdownRefs.current[5] = el)}>
                                                    <div className={`select`} onClick={() => { handleOpen(5) }} style={{ borderBottom: "1px solid #ddd", fontSize: "1.4em" }}>
                                                        <span style={{ color: "var(--text-color)" }}>{first_prefix}</span><HiChevronDown className='drop-icon' />
                                                    </div>
                                                    <ul style={{ fontSize: "1.4em" }}>
                                                        <li onClick={() => { setFirst_prefix("Mr."); handleOpen(5) }}>Mr.</li>
                                                        <li onClick={() => { setFirst_prefix("Ms."); handleOpen(5) }}>Ms.</li>
                                                        <li onClick={() => { setFirst_prefix("Mrs."); handleOpen(5) }}>Mrs.</li>
                                                    </ul>
                                                </div>
                                                <div className="input-field mb-0">
                                                    <input
                                                        type="text"
                                                        {...register('first_name', { required: true })}
                                                        onChange={(e) => { handleFocus(0, e); setValue("first_name", e.target.value, { shouldValidate: true }) }}
                                                        name='first_name'
                                                        id='first_name'
                                                    />
                                                    <label htmlFor="first_name" className={focus[0] ? 'on-focus' : null}>First Name</label>
                                                    {errors.first_name && <p>First name is required</p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                {...register('last_name', { required: true })}
                                                onChange={(e) => { handleFocus(1, e); setValue("last_name", e.target.value, { shouldValidate: true }) }}
                                                name='last_name'
                                                id='last_name'
                                            />
                                            <label htmlFor="last_name" className={focus[1] ? 'on-focus' : null}>Last Name</label>
                                            {errors.last_name && <p>Last name is required</p>}
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                {...register('email', {
                                                    required: 'Email is required',
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                        message: 'Invalid email address'
                                                    }
                                                })}
                                                onChange={(e) => { handleFocus(2, e); setValue("email", e.target.value, { shouldValidate: true }) }}
                                                name='email'
                                                id='email'
                                            />
                                            <label htmlFor="email" className={focus[2] ? 'on-focus' : null}>Email</label>
                                            {errors.email && <p>{errors.email.message}</p>}
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="input-field w-100">
                                            <div className="d-flex align-items-end w-100">
                                                <div className={`dropDown badge p-0 w-25 ${drop[4] ? "active" : null}`} ref={el => (dropdownRefs.current[4] = el)}>
                                                    <div className={`select`} onClick={() => { handleOpen(4) }} style={{ borderBottom: "1px solid #ddd", fontSize: "1.4em" }}>
                                                        <span style={{ color: "var(--text-color)" }}>{countryCode.dial_code}</span><HiChevronDown className='drop-icon' />
                                                    </div>
                                                    <ul style={{ fontSize: "1.4em" }}>
                                                        {country && country.map((item, index) => {
                                                            return <li key={index} onClick={() => { handleOpen(4); setCountryCode(item) }}>{item.dial_code} {item.name}</li>
                                                        })}
                                                    </ul>
                                                </div>
                                                <div className="input-field mb-0">
                                                    <input
                                                        type="text"
                                                        maxLength={10}
                                                        {...register('phone', {
                                                            required: 'Phone number is required',
                                                            pattern: {
                                                                value: /^[0-9]{10}$/,
                                                                message: 'Phone number must be exactly 10 digits'
                                                            }
                                                        })}
                                                        onChange={(e) => { handleFocus(3, e); setValue("phone", e.target.value, { shouldValidate: true }) }}
                                                        id='phone'
                                                    />
                                                    <label htmlFor="phone" className={focus[3] ? 'on-focus' : null}>Phone</label>
                                                </div>
                                            </div>
                                            {errors.phone && <p>{errors.phone.message}</p>}
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                maxLength={15} 
                                                {...register('gst', {
                                                    required: 'GST number is required',
                                                })}
                                                onChange={(e) => {
                                                    const capitalizedValue = e.target.value.toUpperCase();
                                                    handleFocus(4, e);
                                                    setValue("gst", capitalizedValue, { shouldValidate: true }); 
                                                }}
                                                id="gst"
                                            />
                                            <label htmlFor="gst" className={focus[4] ? 'on-focus' : null}>GST Number</label>

                                            {errors.gst && <p>{errors.gst.message}</p>}
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                {...register('company_name', {
                                                    required: 'Company Name is required'
                                                })}
                                                onChange={(e) => { handleFocus(5, e); setValue("company_name", e.target.value, { shouldValidate: true }) }}
                                                id='company_name'
                                            />
                                            <label htmlFor="gst" className={focus[5] ? 'on-focus' : null}>Company Name</label>
                                            {errors.company_name && <p>{errors.company_name.message}</p>}
                                        </div>
                                    </div>

                                    <h4 className='mb-3'>Product Details</h4>
                                    {productDetails && productDetails.map((item, index) => {
                                        return <ProductInquiry
                                            key={index}
                                            detailIndex={index}
                                            details={item}
                                            setDetails={setProductDetails}
                                        />
                                    })}
                                    <div className="col-sm-4 col-6 mb-3 d-flex align-items-center gap-3">
                                        <button type='button' onClick={addProduct} className='button2 me-2 rounded-0'>Add a Product</button>
                                    </div>

                                    <div className="col-12">
                                        <div className="input-field">
                                            <textarea name="address" id="address"
                                                {...register('address', { required: true })} rows={2}
                                                onChange={(e) => { handleFocus(10, e); setValue("address", e.target.value, { shouldValidate: true }) }}
                                            />
                                            <label htmlFor="address" className={focus[10] ? 'on-focus' : null}>Address</label>
                                            {errors.address && <p>{errors.address.message}</p>}
                                        </div>
                                    </div>

                                    <div className="col-sm-4 col-6">
                                        <div className="input-field">
                                            <input
                                                type="number"
                                                maxLength={6}
                                                {...register('pin_code', { required: true })}
                                                onChange={(e) => { handleFocus(12, e); handlePincode(e.target.value); setValue("pin_code", e.target.value, { shouldValidate: true }) }}
                                                name='pin_code'
                                                id='pin_code'
                                            />
                                            <label htmlFor="pin_code" className={focus[12] ? 'on-focus' : null}>Pincode</label>
                                            {errors.pin_code && <p>{errors.pin_code.message}</p>}
                                        </div>
                                    </div>

                                    <div className="col-sm-4 col-6">
                                        <div className="input-field">
                                            <input
                                                type="text"
                                                {...register('city', { required: true })}
                                                onChange={(e) => { handleFocus(13, e); setValue("city", e.target.value, { shouldValidate: true }) }}
                                                name='city'
                                                id='city'
                                            />
                                            <label htmlFor="city" className={focus[13] || formData.city ? 'on-focus' : null}>City</label>
                                            {errors.city && <p>{errors.city.message}</p>}
                                        </div>
                                    </div>

                                    <div className="col-sm-4 col-12 mb-sm-0 mb-3">
                                        <div className="input-field">
                                            <input
                                                type="state"
                                                {...register('state', { required: true })}
                                                onChange={(e) => { handleFocus(14, e); setValue("state", e.target.value, { shouldValidate: true }) }}
                                                name='state'
                                                id='state'
                                            />
                                            <label htmlFor="state" className={focus[14] || formData.state ? 'on-focus' : null}>State</label>
                                            {errors.state && <p>{errors.state.message}</p>}
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="input-field">
                                            <textarea name="message" id="message"
                                                {...register('message', { required: true })} rows={4}
                                                onChange={(e) => { handleFocus(11, e); setValue("message", e.target.value, { shouldValidate: true }) }}
                                            />
                                            <label htmlFor="message" className={focus[11] ? 'on-focus' : null}>Message</label>
                                            {errors.message && <p>Message is required</p>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-field2">
                                            <label htmlFor="Attachments">Attachments (max 10mb)</label>
                                            <div className="input">
                                                <input
                                                    type="file"
                                                    id="attachment"
                                                    className="Attachments"
                                                    {...register('attachment', {
                                                        validate: {
                                                            fileSize: (files) => {
                                                                if (files && files.length > 0) {
                                                                    const maxSize = 10 * 1024 * 1024; // 2MB
                                                                    return files[0]?.size <= maxSize || 'File size should be less than 2MB';
                                                                }
                                                                return true; // If no file is selected, it's valid
                                                            },
                                                        },
                                                    })}
                                                />
                                            </div>
                                            {errors.attachment && <p>{errors.attachment.message}</p>} {/* Display error message */}
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-6 mb-3 d-flex align-items-center gap-3">
                                        <button type='button' onClick={() => { setSummary(!summary) }} className='button2 me-2 rounded-0'>{summary ? "Close Summary" : "Show Summary"}</button>
                                    </div>
                                    {summary && <div className={styles.form_summary}>
                                        <p>
                                            You have entered the following details: First Name is <strong>{formData.first_name || 'N/A'}</strong>,
                                            Last Name is <strong>{formData.last_name || 'N/A'}</strong>, Email Address is <strong>{formData.email || 'N/A'}</strong>,
                                            Phone Number is <strong>{formData.phone || 'N/A'}</strong>,
                                            GST Number is <strong>{formData.gst || 'N/A'}</strong>,
                                            You&apos;re Company Name is <strong>{formData.company_name || 'N/A'}</strong>.
                                            Address is <strong className='me-1'>{formData.address || 'N/A'}, </strong>
                                            Pincode: <strong>{formData.pin_code || 'N/A'}</strong>, City: <strong>{formData.city || 'N/A'}</strong>, State: <strong>{formData.state || 'N/A'}</strong>,
                                            Additional message: <strong>{formData.message || 'N/A'}</strong>.
                                        </p>
                                        {productDetails.length > 0 && <h6 style={{ marginTop: '1em' }} className='fw-bold'>Product Details:</h6>}
                                        {productDetails.length > 0 &&
                                            <div className={styles.tableWrapper}>
                                                <table className={styles.tableContainer}>
                                                    <thead>
                                                        <tr>
                                                            <th>Sr. No.</th>
                                                            <th>Products</th>
                                                            <th>Category</th>
                                                            <th>Services</th>
                                                            <th>Brands</th>
                                                            <th>Size</th>
                                                            <th colSpan={productDetails.find(item => item.category === "Polycarbonate Sheets") ? 3 : 2} className='text-center'>Weight</th>
                                                            <th>Pieces</th>
                                                        </tr>
                                                        <tr className={styles.subHeaderRow}>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th></th>
                                                            <th className={styles.noBorder}></th>
                                                            <th className={styles.weightColumn}>MT</th>
                                                            <th className={styles.weightColumn}>Kg</th>
                                                            {productDetails.find(item => item.category === "Polycarbonate Sheets") && <th className={styles.weightColumn}>Sqft</th>}
                                                            <th className={styles.noBorder}></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {productDetails.map((item, index) => (
                                                            <tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td>{item.product || "N/A"}</td>
                                                                <td>{item.category || "N/A"}</td>
                                                                <td>{item.service || "N/A"}</td>
                                                                <td>{item.brands.length > 0 && item.brands.join(", ") || "N/A"}</td>
                                                                <td>{item.dimensions || "N/A"}</td>
                                                                <td>{item.weight ? item.category !== "Polycarbonate Sheets" ? `${item.weight}` : "N/A" : 'N/A'}</td>
                                                                <td>{item.weight ? item.category !== "Polycarbonate Sheets" ? `${item.rawWeightKg != null ? Number(item.rawWeightKg).toFixed(3) : (item.weight * 1000).toFixed(3)}` : "N/A" : 'N/A'}</td>
                                                                {productDetails.find(item => item.category === "Polycarbonate Sheets") && <td className={styles.weightColumn}>{item.sqft}</td>}
                                                                <td>{item.pieces ? `${item.pieces}` : "N/A"}</td>
                                                            </tr>
                                                        ))}
                                                        <tr>
                                                            <td colSpan={6}>Total</td>
                                                            <td>
                                                                {productDetails.length > 0
                                                                    ? productDetails.reduce((sum, item) => sum + (parseFloat(item?.weight) || 0), 0)
                                                                    : ""}
                                                            </td>
                                                            <td>
                                                                {
                                                                    productDetails.length > 0
                                                                        ? productDetails.reduce((sum, item) => {
                                                                            return sum + (item?.rawWeightKg != null ? Number(item.rawWeightKg) : (isNaN(item?.weight) ? 0 : item.weight * 1000));
                                                                        }, 0).toFixed(3)
                                                                        : 0
                                                                }
                                                            </td>
                                                            {productDetails.find(item => item.category === "Polycarbonate Sheets") &&
                                                                <td className={styles.weightColumn}>
                                                                    {productDetails.length > 0
                                                                        ? productDetails.reduce((sum, item) => sum + (parseFloat(item?.sqft) || 0), 0).toFixed(3)
                                                                        : ""}
                                                                </td>
                                                            }
                                                            <td>
                                                                {
                                                                    productDetails.length > 0
                                                                        ? productDetails.reduce((sum, item) => sum + (Number(item.pieces) || 0), 0)
                                                                        : ""
                                                                }
                                                            </td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        }
                                    </div>}
                                    {success.text !== '' ? <p className='mb-1 mt-0' style={success.success ? { color: "green" } : { color: "red" }}>{success.text}</p> : null}
                                    <div className="d-flex align-items-center">
                                        <a target='_blank' href={"/images/Vmetal_brocher.pdf"} className='button2 me-2 mb-0 rounded-0'><BiSolidDownload /> E Brochure</a>
                                        <button type='submit' className='button'>{loading ? 'Submitting' : 'Submit'}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inquiry

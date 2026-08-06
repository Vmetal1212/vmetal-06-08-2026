import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: "Thank you | V metal Solutions Inc",
    robots: {
        index: false,
        follow: false,
    },
    alternates: {
        canonical: '/thank-you/',
    }
}

const page = () => {
    return (
        <div class="container-fluid padd-x thank-container">
            <div class="thanks">
                <Image width={1000} height={1000} src={"/images/asset1.png"} className='img-fluid' alt='' />
                <h1>Thank You <br /> For Reaching Out</h1>
                <p>Thank you for reaching out! We value your interest and look forward to assisting you with personalized solutions tailored to your goals.</p>
                <a href="/contactus/" class="button"><span>Contact Us</span></a>
            </div>
        </div>
    )
}

export default page

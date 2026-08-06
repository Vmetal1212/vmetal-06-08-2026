import React from 'react'
import axios from 'axios'
import Products from './Products'
export const dynamic = 'force-dynamic'


export const metadata = {
    title: 'Explore Premium Steel Products at V Metal Solutions | Gujarat’s Leading Supplier',
    description: "Browse V Metal Solutions' extensive range of steel products, including PMP, CR, HR, GI, and PPGI. Trusted supplier in Gujarat and nearby states.",
    alternates: {
        canonical: '/products/',
    }
}

const page = async () => {


    return (
        <>
            <Products />
        </>
    )
}

export default page

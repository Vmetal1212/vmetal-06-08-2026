import React from 'react'
import Type from './Type'
import datas from '@/utils/mild_steel.json'
import pipes from '@/utils/mild_pipes.json'

export function generateMetadata({ params }) {
    const slug = params.type; // Get the slug from the URL params
    const product = params.name;
    // Start by searching for the data in the 'datas' array (mild_steel.json)
    let data = datas.find(item => item.slug === slug);

    // If no match is found, search in the 'pipes' array (mild_pipes.json)
    if (!data) {
        data = pipes.sub_products.find(item => item.slug === slug);
    }

    // If no match is found, search in the 'sub_products' of pipes (in case it's inside sub-products)
    if (!data) {
        data = pipes.sub_products?.find(item => item.slug === slug);
    }

    // If still no match, return the default metadata (could be the first entry or a fallback object)
    data = data || datas[0] || pipes[0]; // Default to the first entry if nothing is found

    // Return metadata for SEO optimization
    return {
        title: data.meta_title,
        description: data.meta_description,
        keywords: data.keywords || "", // Optional field if keywords exist in your JSON
        alternates: {
            canonical: `/products/${product}/${slug}/`,
        }
    };
}

const page = ({ params }) => {

    const slug = params.type
    let data;
    data = datas.find(item => item.slug === slug)
    if (!data) {
        data = pipes.sub_products.find(item => item.slug === slug)
    }

    return (
        <Type data={data} />
    )
}

export default page

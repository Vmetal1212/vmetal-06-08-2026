import React from 'react'
import Type from './Type'
import datas from '@/utils/mild_steel.json'
import pipes from '@/utils/mild_pipes.json'

export function generateStaticParams() {
    const params = [];
    datas.forEach(item => {
        if (item.slug) {
            params.push({ name: 'ms-structure', type: item.slug });
        }
    });
    if (pipes.sub_products) {
        pipes.sub_products.forEach(item => {
            if (item.slug) {
                params.push({ name: 'ms-pipes', type: item.slug });
            }
        });
    }
    return params;
}

export function generateMetadata({ params }) {
    const slug = params.type;
    const product = params.name;
    let data = datas.find(item => item.slug === slug);
    if (!data) {
        data = pipes.sub_products.find(item => item.slug === slug);
    }
    if (!data) {
        data = pipes.sub_products?.find(item => item.slug === slug);
    }
    data = data || datas[0] || pipes[0];
    return {
        title: data.meta_title,
        description: data.meta_description,
        keywords: data.keywords || "",
        alternates: {
            canonical: `/products/${product}/${slug}/`,
        }
    };
}

const page = ({ params }) => {
    const slug = params.type;
    let data = datas.find(item => item.slug === slug);
    if (!data) {
        data = pipes.sub_products.find(item => item.slug === slug);
    }
    return (
        <Type data={data} />
    );
};

export default page;

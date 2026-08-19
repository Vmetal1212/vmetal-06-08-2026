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

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams?.type;
    const product = resolvedParams?.name;
    let data = datas.find(item => item.slug === slug);
    if (!data && pipes.sub_products) {
        data = pipes.sub_products.find(item => item.slug === slug);
    }
    data = data || datas[0] || pipes[0];
    return {
        title: data?.meta_title || data?.title || "",
        description: data?.meta_description || "",
        keywords: data?.keywords || "",
        alternates: {
            canonical: `/products/${product}/${slug}/`,
        }
    };
}

const page = async ({ params }) => {
    const resolvedParams = await params;
    const slug = resolvedParams?.type;
    let data = datas.find(item => item.slug === slug);
    if (!data && pipes.sub_products) {
        data = pipes.sub_products.find(item => item.slug === slug);
    }
    if (!data) return <div>Product not found</div>;
    return (
        <Type data={data} />
    );
};

export default page;

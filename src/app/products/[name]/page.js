import axios from 'axios';
import ProductDetail from './ProductDetail';
import datas from '@/utils/data.json';
import meta from '@/utils/meta.json'

const slugToCategoryMap = {
    "hr-hrpo": "Hot-Rolled (HR) Steel",
    "gi": "Galvanized Iron (GI) / Galvanised Plates (GP)",
    "cr-crca": "Cold-Rolled (CR) Steel",
    "ppgi": "Pre-Painted Galvanised Iron (PPGI) / Pre-Painted Galvalume (PPGL)",
    "pmp": "PMP Plates",
    "ms-structure": "MS Structure",
    "ms-pipes": "MS Pipes",
};

export async function generateStaticParams() {
    const defaultSlugs = [
        "hr-hrpo",
        "gi",
        "cr-crca",
        "crca",
        "ppgi",
        "pmp",
        "ms-structure",
        "ms-pipes",
        "zc-purlin"
    ];
    let slugs = [...defaultSlugs];
    if (process.env.API_URL) {
        try {
            const response = await axios.get(`${process.env.API_URL}/api/products?populate=*`);
            const remoteSlugs = (response.data.data || []).map(item => item.attributes?.slug).filter(Boolean);
            if (remoteSlugs.length > 0) {
                slugs = Array.from(new Set([...slugs, ...remoteSlugs]));
            }
        } catch (e) {
            console.log('Skipping remote products fetch for static params:', e.message);
        }
    }
    return slugs.map(name => ({ name }));
}

export const getData = async (slug) => {
    const apiUrl = process.env.API_URL || 'https://www.vmetalsolutions.com';
    try {
        const response = await axios.get(`${apiUrl}/api/products?populate=*`);
        const datas = response.data?.data;
        const data = datas?.find(item => item.attributes?.slug == slug || item.attributes?.slug == (slug === 'cr-crca' ? 'crca' : slug));
        if (data) return data;
    } catch(e) {
        console.log('Fetch error:', e.message);
    }

    const metaItem = meta.find(m => m.slug === slug || (slug === 'cr-crca' && m.slug === 'crca'));
    const name = slugToCategoryMap[slug] || slug.toUpperCase();
    return {
        attributes: {
            name: name,
            title1: name,
            subtitle1: metaItem?.description || "High quality steel products manufactured as per client specifications.",
            title2: "Product Specifications",
            title3: metaItem?.title || name,
            slug: slug,
            meta_title: metaItem?.title || name,
            meta_description: metaItem?.description || "",
            newDescription: metaItem?.description || "Premium steel solutions for construction, manufacturing, and engineering.",
            image: { data: [{ attributes: { url: "/images/product1.png" } }] },
            coverImage: { data: { attributes: { url: "/images/ourProducts1.jpg" } } }
        }
    };
}

export async function generateMetadata({ params }) {
    const { name } = await params;
    const data = await getData(name)
    if (!data) return { title: 'Product Not Found' }
    return {
        title: data.attributes.meta_title,
        description: data.attributes.meta_description,
        keywords: data.attributes.keywords || "",
        alternates: {
            canonical: `/products/${name}/`,
        }
    };
}

const page = async ({ params }) => {
    const { name } = await params;
    const data = await getData(name)
    if (!data) return <div>Product not found</div>
    const selectedCategory = slugToCategoryMap[name] || "Hot-Rolled (HR) Steel";
    return (
        <>
            <ProductDetail products={data} applications={datas[selectedCategory] || []} />
        </>
    )
}

export default page

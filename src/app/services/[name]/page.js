import axios from 'axios';
import ServiceDetails from './ServiceDetails';
import datas from '@/utils/service.json'

export async function generateStaticParams() {
    const defaultSlugs = [
        "cut-to-length",
        "slitting",
        "corrugation-profiling",
        "zc-purlin"
    ];
    let slugs = [...defaultSlugs];
    if (process.env.API_URL) {
        try {
            const response = await axios.get(`${process.env.API_URL}/api/services?populate=*`);
            const remoteSlugs = (response.data.data || []).map(item => item.attributes?.slug).filter(Boolean);
            if (remoteSlugs.length > 0) {
                slugs = Array.from(new Set([...slugs, ...remoteSlugs]));
            }
        } catch (e) {
            console.log('Skipping remote services fetch for static params:', e.message);
        }
    }
    return slugs.map(name => ({ name }));
}

export const getData = async (slug) => {
    try {
        const response = await axios.get(`${process.env.API_URL}/api/services?populate=*`);
        const datas = response.data.data;
        const data = datas.find(item => item.attributes.slug == slug)
        return data
    } catch(e) {
        console.log('Fetch error:', e.message);
    }
}

export async function generateMetadata({ params }) {
    const { name } = await params;
    const data = await getData(name)
    if (!data) return { title: 'Service Not Found' }
    return {
        title: data.attributes.meta_title,
        description: data.attributes.meta_description,
        keywords: data.attributes.keywords || "",
        alternates: {
            canonical: `/services/${name}/`,
        }
    };
}

const page = async ({ params }) => {
    const { name } = await params;
    const data = await getData(name)
    if (!data) return <div>Service not found</div>
    const slugToCategoryMap = {
        "cut-to-length": "M. S. Cut-to-length Sheets",
        "slitting": "M. S. Slitted Coils",
        "corrugation-profiling": "Corrugation and Profiling",
        "zc-purlin": "C/Z Purlin: GI and HR",
    };
    const selectedCategory = datas.find(item => item.slug === slugToCategoryMap[name]);
    return (
        <>
            <ServiceDetails data={data} applications={selectedCategory || []} />
        </>
    )
}

export default page

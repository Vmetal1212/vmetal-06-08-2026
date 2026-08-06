import axios from 'axios';
import ServiceDetails from './ServiceDetails';
import datas from '@/utils/service.json'

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

import React from 'react'
import BlogDetail from './blog-detail'
import axios from 'axios';

export async function generateStaticParams() {
  const apiUrl = process.env.API_URL;
  let slugs = [{ title: 'default' }];
  if (apiUrl) {
    try {
      const response = await axios.get(`${apiUrl}/api/blogs?populate=*`);
      const blogs = response.data.data || [];
      const remoteSlugs = blogs.map(item => ({ title: item.attributes?.slug })).filter(p => p.title);
      if (remoteSlugs.length > 0) {
        slugs = remoteSlugs;
      }
    } catch (error) {
      console.log('Error fetching blog static params:', error.message);
    }
  }
  return slugs;
}

export const fetchBlog = async (slug) => {
  const apiUrl = process.env.API_URL;
  try {
    const response = await axios.get(`${apiUrl}/api/blogs?populate=*`);
    const datas = response.data.data;
    const data = datas.find(item => item.attributes.slug == slug)
    return data;
  } catch (error) {
    console.log('Error fetching blogs:', error.message);
  }
};

export const fetchAllBlog = async () => {
  const apiUrl = process.env.API_URL;
  try {
    const response = await axios.get(`${apiUrl}/api/blogs?populate=*`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.log('Error fetching blogs:', error.message);
  }
};

export async function generateMetadata({ params }) {
  const { title } = await params;
  const metadata = await fetchBlog(title);
  if (!metadata) return { title: 'Blog Not Found' }
  return {
    title: metadata.attributes.meta_title,
    description: metadata.attributes.meta_description,
    robots: {
      index: metadata.attributes.index,
      follow: metadata.attributes.follow,
    },
    alternates: {
      canonical: `/blogs/${title}/`,
    }
  };
}

const page = async ({ params }) => {
  const { title } = await params;
  const data = await fetchBlog(title)
  const allData = await fetchAllBlog()
  if (!data) return <div>Blog not found</div>
  return (
    <>
      <BlogDetail data={data.attributes} blogs={allData} />
    </>
  )
}

export default page

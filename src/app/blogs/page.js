import React from 'react';
import BlogsPage from './blogs';
import axios from 'axios';
export const dynamic = 'force-static'

export const fetchBlog = async () => {
  const apiUrl = process.env.API_URL;
  if (!apiUrl) return [];

  try {
    const response = await axios.get(`${apiUrl}/api/blogs?populate=*`);
    const data = response.data?.data;
    return data || [];
  } catch (error) {
    console.log('Error fetching blogs:', error.message);
    return [];
  }
};

export const metadata = {
  title: 'Blogs - V Metal Solutions',
  description: 'V Metal Solutions Blogs',
  alternates: {
    canonical: '/blogs/',
  }
};

const Page = async () => {
  const data = await fetchBlog();

  return (
    <>
      <BlogsPage data={data} />
    </>
  );
};

export default Page;

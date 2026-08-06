// /components/BlogsPage.js
'use client'
import React, { useEffect, useState } from "react";
import styles from "@/app/styles/blogs.module.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Markdown from "react-markdown";
import { getStrapiMedia } from "@/utils/getStrapiMedia";


const Blogs = () => {

    const [blogData, setBlogData] = useState([]);

    const truncateDescription = (text, max = 130) => {
        const plain = text.replace(/!\[.*?\]\(.*?\)|\[.*?\]\(.*?\)/g, '').replace(/<\/?[^>]+(>|$)/g, '');
        return plain.length > max ? plain.slice(0, max) + "..." : plain;
    };


    function formatDate(isoDateString) {
        const date = new Date(isoDateString);

        // Define options for formatting
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true, // Ensures 12-hour format with AM/PM
        };

        // Format date using Intl.DateTimeFormat
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }

    const getProductOrServiceName = (blog) => {
        const productName = blog.product?.data?.attributes?.name;
        const serviceName = blog.service?.data?.attributes?.name;

        if (productName && serviceName) {
            return `${productName} - ${serviceName}`;
        } else {
            return productName || serviceName || '';
        }
    };

    const fetchBlog = async () => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        try {
            const response = await axios.get(`${apiUrl}/api/blogs?populate=*`);
            const data = response.data.data.sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt));
            setBlogData(data.slice(0, 3))
        } catch (error) {
            console.log('Error fetching blogs:', error.message);
        }
    }

    useEffect(() => {
        fetchBlog();
    }, [])

    return (
        <div className={`container-fluid padd-x mt-5 ${styles.blogs}`}>
            <div className={styles.top_header}>
                <h2 className={`${styles.blogText}`}>The Blogs</h2>
                <Link href={`/blogs`} className="button">
                    View More
                </Link>
            </div>
            {/* Blog List Section */}
            <div className="row h-100">
                {blogData.map((blog, index) => {
                    const imageUrl = blog?.attributes?.image?.data?.[0]?.attributes?.url
                        ? getStrapiMedia(blog.attributes.image.data[0].attributes.url)
                        : "/fallback.png";

                    return (
                        <div className={`col-lg-4 col-md-6 mb-4 mt-4 h-100`} key={index}>
                            <div className={styles.blog_item}>
                                <div className={styles.blogImage_div}>
                                    <img
                                        src={imageUrl}
                                        alt={blog.attributes.title}
                                        className={styles.blogImage}
                                    />
                                </div>
                                <div className={styles.blog_content}>
                                    <div>
                                        <span>{getProductOrServiceName(blog.attributes)} - {formatDate(blog.attributes.publishedAt)}</span>
                                        <h3 className={styles.blogTitle}>{blog.attributes.title.slice(0, 75)}{blog.attributes.title.length > 75 ? "..." : null}</h3>
                                        <p className={styles.blogDescription}>
                                            <Markdown>
                                                {truncateDescription(blog.attributes.content)}
                                            </Markdown>
                                        </p>
                                    </div>
                                    <Link href={`/blogs/${blog.attributes.slug}`} className="button">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Blogs;

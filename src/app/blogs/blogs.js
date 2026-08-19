// /components/BlogsPage.js
'use client'
import React from "react";
import styles from "@/app/styles/blogs.module.css";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import { getStrapiMedia } from "@/utils/getStrapiMedia";


const BlogsPage = ({ data = [] }) => {
  const safeData = Array.isArray(data) ? data : [];
  if (safeData.length === 0) {
    return (
      <div className={`container-fluid padd-x mt-5 ${styles.blogs}`}>
        <h1 className={`${styles.blogText} mt-5`}>The Blogs</h1>
        <p className="mt-4">No blogs available at the moment.</p>
      </div>
    );
  }

  const sortedData = [...safeData].sort((a, b) => new Date(b.attributes?.publishedAt) - new Date(a.attributes?.publishedAt));
  const [recentBlog, ...otherBlogs] = sortedData;

  const truncateDescription = (text, maxLength = 130) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
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

  const recentBlogImageUrl = recentBlog?.attributes?.image?.data?.[0]?.attributes?.url
    ? getStrapiMedia(recentBlog.attributes.image.data[0].attributes.url)
    : "/fallback.png";

  return (
    <div className={`container-fluid padd-x mt-5 ${styles.blogs}`}>
      <h1 className={`${styles.blogText} mt-5`}>The Blogs</h1>

      {/* Recent Blog Section */}
      <div className="row mb-5 ">
        <div className="col-lg-7 mb-lg-0 mb-2">
          <Image width={1000} height={1000}
            src={recentBlogImageUrl}
            // src={'/images/channel4.webp'}
            alt={recentBlog.attributes.title}
            className={styles.recentBlogImage}
          />
        </div>
        <div className="col-lg-5">
          <div className={styles.recent_content}>
            <span>{getProductOrServiceName(recentBlog.attributes)} - {formatDate(recentBlog.attributes.publishedAt)}</span>
            <h2 className={styles.recentBlogTitle}>{recentBlog.attributes.title}</h2>
            <Markdown className={styles.recentBlogDescription}>
              {truncateDescription(recentBlog.attributes.content, 250)}
            </Markdown>
            <Link href={recentBlog.attributes.slug} className="button">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Blog List Section */}
      <div className="row  ">
        {otherBlogs.map((blog, index) => {
          const imageUrl = blog?.attributes?.image?.data?.[0]?.attributes?.url
            ? getStrapiMedia(blog.attributes.image.data[0].attributes.url)
            : "/fallback.png";

          return (
            <div className={`col-lg-4 col-md-6 mb-4 mt-4 `} key={index}>
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
                <Link href={blog.attributes.slug} className="button">
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div >
  );
};

export default BlogsPage;

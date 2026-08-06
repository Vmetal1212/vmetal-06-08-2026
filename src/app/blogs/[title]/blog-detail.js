"use client"
import React from "react";
import styles from "@/app/styles/blogDetail.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Markdown from "react-markdown";
import Image from "next/image";
import blogStyle from '@/app/styles/blogs.module.css'
import { getStrapiMedia } from "@/utils/getStrapiMedia";

const BlogDetail = ({ data, blogs }) => {

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
  const related = blogs.filter(
    item =>
      // Check if product or service name matches
      (item.attributes.product?.data?.attributes?.name === data.product?.data?.attributes?.name ||
        item.attributes.service?.data?.attributes?.name === data.service?.data?.attributes?.name) &&
      // Ensure the title is not the same
      item.attributes.title !== data.title
  );

  const getProductOrServiceName = (blog) => {
    const productName = blog.product?.data?.attributes?.name;
    const serviceName = blog.service?.data?.attributes?.name;

    if (productName && serviceName) {
      return `${productName} - ${serviceName}`;
    } else {
      return productName || serviceName || '';
    }
  };

  const lines = data.content.split("\n");

  // Determine the approximate one-third and two-thirds points of the content
  const firstThird = Math.ceil(lines.length / 3);
  const secondThird = Math.ceil((2 * lines.length) / 3);

  // Split the content into three parts
  const partOne = lines.slice(0, firstThird).join("\n");
  const partTwo = lines.slice(firstThird, secondThird).join("\n");
  const partThree = lines.slice(secondThird).join("\n");


  const truncateDescription = (text, maxLength = 130) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const mainImageUrl = data?.image?.data?.[0]?.attributes?.url
    ? getStrapiMedia(data.image.data[0].attributes.url)
    : "/fallback.png";

  const secondaryImageUrl = data?.image?.data?.[1]?.attributes?.url
    ? getStrapiMedia(data.image.data[1].attributes.url)
    : "/fallback.png";

  return (
    <>
      <div className={`row padd-x`}>

        <div className={`col-12 ${styles.detail}`}>
          <div>
            <h1 className={styles.blogTitle}>
              {data.title}
            </h1>
            <p className={styles.blogMeta}>
              {getProductOrServiceName(data)} - {formatDate(data.publishedAt)}
            </p>

            {/* Main Blog Image */}

            <div className={`${styles.blogMainImage}`}>
              {data.image.data[0] && <Image width={1000} height={1000}
                src={mainImageUrl}
                alt={data.title}
                className={`${styles.blogImage} img-fluid`}
              />}
            </div>

            {/* Remaining Blog Sections */}
            <div className={styles.blogContent}>
              <Markdown>{partOne}</Markdown>
              {data.image.data[1] && <Image
                width={1000}
                height={1000}
                src={secondaryImageUrl}
                alt={data.title}
                className={`${styles.blogImage} img-fluid mb-3`}
              />}
              <Markdown>{partTwo}</Markdown>
              <Link href={"/inquiry"} className="w-100 h-100 d-block">
                <Image width={1000} height={1000} src="/images/blog_cta.jpg" className="w-100 h-100 mb-3 mt-1" alt="Call to Action - Vmetal solutions" />
              </Link>
              <Markdown>{partThree}</Markdown>
            </div>
          </div>
        </div>
        {related.length > 0 &&
          <div className={styles.blogSidebarSection}>
            <h2>Related Blogs</h2>
            <div className="row">
              {related.map((blog, index) => {
                const imageUrl = blog?.attributes?.image?.data?.[0]?.attributes?.url
                  ? getStrapiMedia(blog.attributes.image.data[0].attributes.url)
                  : "/fallback.png";

                return (
                  <div className={`col-lg-4 col-md-6 mb-4 mt-4 `} key={index}>
                    <div className={blogStyle.blogImage_div}>
                      <img
                        src={imageUrl}
                        alt={blog.attributes.title}
                        className={blogStyle.blogImage}
                      />
                    </div>
                    <div className={blogStyle.blog_content}>
                      <div>
                        <span>{getProductOrServiceName(blog.attributes)} - {formatDate(blog.attributes.publishedAt)}</span>
                        <h3 className={blogStyle.blogTitle}>{blog.attributes.title.slice(0, 75)}{blog.attributes.title.length > 75 ? "..." : null}</h3>
                        <p className={blogStyle.blogDescription}>
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
                );
              })}

            </div>
          </div>
        }
      </div>

    </>
  );
};

export default BlogDetail;

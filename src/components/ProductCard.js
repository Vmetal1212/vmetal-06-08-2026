import React from 'react'
import styles from '@/app/styles/product.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io";
import { getStrapiMedia } from "@/utils/getStrapiMedia";

const ProductCard = ({ data, category }) => {

    console.log(data.attributes.name === "PPGI/PPGL");

    const imagePath = data?.attributes?.name === "PPGI/PPGL"
        ? data?.attributes?.coverImage?.data?.attributes?.url
        : data?.attributes?.image?.data?.[0]?.attributes?.url;

    const imageUrl = imagePath ? getStrapiMedia(imagePath) : "/fallback.png";
    

    
    return (
        <>
            <Link scroll={true} href={`/${category == "services" ? "services" : "products"}/${data.attributes.slug}`} className={styles.item}>
                <div className={styles.image}>
                    <h4>{data.attributes.name}</h4>
                    <Image width={1000} height={1000} src={imageUrl} className='img-fluid' alt='' />
                    <div className={styles.icon_cont}>
                        <IoIosArrowRoundForward className={styles.icon} />
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductCard


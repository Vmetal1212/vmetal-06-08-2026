'use client'
import React, { useEffect, useState, useRef } from 'react'
import styles from '@/app/styles/productSlider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import { getStrapiMedia } from "@/utils/getStrapiMedia";

const ProductSlide = () => {
    const [products, setProducts] = useState([])
    const swiperRef = useRef(null)
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    const getProducts = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products?populate=*`, {
                method: "GET",
            })
            const data = response.data.data
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <div className={styles.products}>
                <div className={`${styles.content} padd-x`}>
                    <div className={styles.inner_content}>
                        <h2>Our Products</h2>
                        <p>Durable, reliable, and versatile, our steel products meet your every need, ensuring superior quality and performance in every application.</p>
                    </div>
                    <div className={styles.btns}>
                        <button ref={navigationPrevRef}>
                            <svg className={styles.circleButton__circle}>
                                <rect x="0.75" y="0.75" rx="1.5" width="1.5" height="1.5"></rect>
                                <rect x="0.75" y="0.75" rx="1.5" width="1.5" height="1.5"></rect>
                            </svg>
                            <IoIosArrowRoundBack className={styles.btnIcon} />
                        </button>
                        <button ref={navigationNextRef}>
                            <svg className={styles.circleButton__circle}>
                                <rect x="0.75" y="0.75" rx="1.5" width="1.5" height="1.5"></rect>
                                <rect x="0.75" y="0.75" rx="1.5" width="1.5" height="1.5"></rect>
                            </svg>
                            <IoIosArrowRoundForward className={styles.btnIcon} />
                        </button>
                    </div>
                </div>

                <div className={styles.slider}>
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Autoplay, FreeMode]}
                        spaceBetween={0}
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        loop={true}
                        speed={1000}
                        freeMode={{
                            enabled: true,
                            momentum: true,
                            momentumRatio: 0.5,
                            momentumBounce: true,
                            momentumVelocityRatio: 0.5,
                        }}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        onSwiper={(swiper) => {
                            // Override the navigation buttons after swiper initialization
                            setTimeout(() => {
                                swiper.params.navigation.prevEl = navigationPrevRef.current
                                swiper.params.navigation.nextEl = navigationNextRef.current
                                swiper.navigation.init()
                                swiper.navigation.update()
                            })
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.2,
                                spaceBetween: 20,
                                centeredSlides: true,
                            },
                            499: {
                                slidesPerView: 1.5,
                                spaceBetween: 30,
                                centeredSlides: true,
                            },
                            768: {
                                slidesPerView: 2.5,
                                spaceBetween: 40,
                                centeredSlides: true,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 32,
                                centeredSlides: false,
                            },
                            1200: {
                                slidesPerView: 3.25,
                                spaceBetween: 36,
                                centeredSlides: false,
                            },
                            1440: {
                                slidesPerView: 3.6,
                                spaceBetween: 40,
                                centeredSlides: false,
                            }
                        }}
                        className={styles.swiper_container}
                    >
                        {products && products.map((item, index) => {
                            const imagePath = item?.attributes?.name !== "PPGI/PPGL"
                                ? item?.attributes?.image?.data?.[0]?.attributes?.url
                                : item?.attributes?.coverImage?.data?.attributes?.url;
                            const imageUrl = imagePath ? getStrapiMedia(imagePath) : "/fallback.png";

                            return (
                                <SwiperSlide key={index} className={styles.slide}>
                                    <Link href={`/products/${item.attributes.slug}`} scroll={true}>
                                        <h4>{item.attributes.name}</h4>
                                        <Image
                                            width={1000}
                                            height={1000}
                                            src={imageUrl}
                                            className='img-fluid'
                                            alt={item.attributes.name}
                                        />
                                    </Link>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ProductSlide

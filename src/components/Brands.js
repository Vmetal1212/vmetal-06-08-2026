'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from '../app/styles/brands.module.css';
import axios from 'axios';
import testimonial from '@/app/styles/testimonial.module.css'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '@/utils/brands.json'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const Brands = ({ subtitle, title }) => {

    let brands
    brands = data.find(item => item.product === title)
    if (!brands) {
        brands = data.find(item => item.product === "All")
    }


    return (
        <div className={styles.brands}>
            <div className="padd-x container-fluid my-3">
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <span className={`${testimonial.subhead}`}>{subtitle}</span>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-1">
                    <div className={styles.wrapper}>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={brands && brands.brands.length > 2 ? 2 : 1}
                            className="mySwiper2"
                            centeredSlides={false}
                            loop
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                599: {
                                    slidesPerView: brands && brands.brands.length > 2 ? 3 : 2,
                                    centeredSlides: false
                                }
                            }}
                            modules={[Autoplay]}

                        >
                            {brands && brands.brands.map((item, index) => {
                                return item.includes("images") ? (
                                    <SwiperSlide key={index}>
                                        <Image width={1000} height={1000} src={item} className="img-fluid" alt="" />
                                    </SwiperSlide>
                                ) : (
                                    <SwiperSlide key={index} style={{width: "100% !important"}}>
                                        <div className={styles.brand_item}>
                                            <h5>{item}</h5>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;

'use client'
import styles from '@/app/styles/detail.module.css'
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useState } from 'react';
import Markdown from "react-markdown";
import Brands from '@/components/Brands';


const Type = ({ data }) => {

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        // Function to create ScrollTrigger for a given row selector with delay
        function createScrollTrigger(rowSelector, item, sensitivity, duration) {
            var translateSetter = gsap.quickSetter(rowSelector + item, "y", "px");
            var proxy = { y: 0 };

            ScrollTrigger.create({
                trigger: rowSelector,
                start: "top 10%",
                end: "bottom 50%+=100px",
                onUpdate: self => {
                    var translateY = self.getVelocity() / sensitivity; // Adjust the sensitivity
                    if (Math.abs(translateY) > Math.abs(proxy.y)) {
                        proxy.y = translateY;
                        gsap.to(proxy, {
                            y: 0,
                            duration: duration, // Adjust the duration
                            ease: "power3",
                            overwrite: true,
                            onUpdate: () => translateSetter(proxy.y)
                        });
                    }
                }
            });

            gsap.set(rowSelector + item, {
                transformOrigin: "center center",
                force3d: true
            });
        }

        // Apply to both rows with different parameters
        createScrollTrigger(`.${styles.hero} .${styles.content}`, ` h1`, -200, 2.5);
        createScrollTrigger(`.${styles.hero} .${styles.content}`, ` p`, -240, 3);
        createScrollTrigger(`.${styles.hero} .${styles.content}`, ` .button`, -240, 3);
        createScrollTrigger(`.${styles.content_container}`, ` span`, -240, 3);
        createScrollTrigger(`.${styles.content_container}`, ` h4`, -240, 3);
        createScrollTrigger(`.${styles.content_container}`, ` img`, 200, 2.5);
        createScrollTrigger(`.${styles.content_container}`, ` p`, -200, 2.5);
    })

    return (
        <>
            <div className="container-fluid padd-x">
                <div className={styles.hero}>
                    <div className={styles.asset}>
                        <Image width={1000} height={1000} src="/images/asset2.avif" className='img-fluid' alt='' />
                    </div>
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-12 p-0 order-xl-0 order-1" style={{ height: "auto" }}>
                            <div className={styles.content}>
                                <h1>{data.title}</h1>
                                <Link href="/inquiry" className='button'>Inquire Now</Link>
                            </div>
                        </div>
                        {/* Pre-Painted Galvanised Iron/Galvalume */}
                        <div className="col-xl-7 col-12 p-0 position-relative z-1 order-xl-1 order-0">
                            <div className={styles.content_img}>
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={data.image}
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.content_container}>
                    <div className="row my-3 mt-5">
                        <div className="col-lg-4 col-12">
                            {data.image1 ? <Image width={1000} height={1000} src={data.image1} className='w-100 h-100' alt='' /> : null}
                        </div>
                        <div className="col-lg-8 col-12 mt-lg-0 mt-3">
                            <h4>Features</h4>
                            <ol className="mb-0">
                                {data.features &&
                                    data.features.map((item, index) => {
                                        return <li key={index}><p className="mb-0">{item}</p></li>
                                    })
                                }
                            </ol>
                            <h4>Applications</h4>
                            <ol>
                                {data.applications &&
                                    data.features.map((item, index) => {
                                        return <li key={index}><p>{item}</p></li>
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                </div>

                <Brands subtitle={"Brands Supplied"} title={data.title} />

            </div>
        </>
    )
}

export default Type

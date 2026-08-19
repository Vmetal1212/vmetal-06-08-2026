'use client'
import axios from 'axios';
import styles from '@/app/styles/detail.module.css'
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useState } from 'react';
import Markdown from "react-markdown";
import { getStrapiMedia } from "@/utils/getStrapiMedia";

const ServiceDetails = ({ data, applications }) => {



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
        createScrollTrigger(`.${styles.hero} .${styles.content}`, ` h1`, -200, 2);
        createScrollTrigger(`.${styles.hero} .${styles.content}`, ` p`, -200, 2);
        createScrollTrigger(`.${styles.hero} .${styles.content}`, ` .button`, -200, 2);
        createScrollTrigger(`.${styles.content_container}`, ` span`, -220, 3);
        createScrollTrigger(`.${styles.content_container}`, ` h4`, -220, 3);
        createScrollTrigger(`.${styles.content_container}`, ` img`, 200, 3);
        createScrollTrigger(`.${styles.content_container}`, ` .${styles.para}`, -200, 3);
        createScrollTrigger(`.${styles.content_container}`, ` .${styles.table}`, -200, 3);
    })


    return (
        <>
            <div className="container-fluid padd-x">
                <div className={styles.hero}>
                    <div className={styles.asset}>
                        <Image width={1000} height={1000} src="/images/asset2.avif" className='img-fluid' alt='' />
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12 p-0 order-lg-0 order-1" style={{ height: "auto" }}>
                            <div className={styles.content}>
                                <h1>{data.attributes && data.attributes.title1}</h1>
                                <p>{data.attributes && data.attributes.subtitle1}</p>
                                <Link href="/inquiry" className='button'>Inquire Now</Link>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 p-0 position-relative z-1 order-lg-1 order-0">
                            <div className={styles.content_img}>
                                {data.attributes ? <Image width={1000} height={1000} src={data?.attributes?.image?.data?.[0]?.attributes?.url ? getStrapiMedia(data.attributes.image.data[0].attributes.url) : "/fallback.png"} className='img-fluid' alt='' /> : null}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.content_container}>
                    <span>{data.attributes && data.attributes.title3}</span>
                    <h4>{data.attributes && data.attributes.title2}</h4>
                    <div className="row my-3 mt-5 h-100">
                        <div className="col-lg-4 col-12">
                            <div className="d-flex align-items-center justify-content-center flex-column h-100" style={{ gap: "20px" }}>
                                {data.attributes?.coverImage?.data ? (
                                    Array.isArray(data.attributes.coverImage.data) ? (
                                        data.attributes.coverImage.data.map((item, index) => {
                                            const imageUrl = item?.attributes?.url ? getStrapiMedia(item.attributes.url) : "/fallback.png";
                                            return <Image key={index} width={1000} height={1000} src={imageUrl} className='w-100 h-100' alt='' />
                                        })
                                    ) : (
                                        <Image width={1000} height={1000} src={data.attributes.coverImage.data.attributes?.url ? getStrapiMedia(data.attributes.coverImage.data.attributes.url) : "/fallback.png"} className='w-100 h-100' alt='' />
                                    )
                                ) : (
                                    <Image width={1000} height={1000} src="/images/services.jpg" className='w-100 h-100' alt='' />
                                )}
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 mt-lg-0 mt-3">
                            {data.attributes && data.attributes.newDescription &&
                                (() => {
                                    const text = data.attributes.newDescription;
                                    // Replace all instances of text before a colon with bold text
                                    const modifiedText = text.replace(/(\b[^:\n]+):/g, '**$1:**');
                                    return (
                                        <Markdown>{modifiedText}</Markdown>
                                    );
                                })()
                            }
                            <div className={styles.table} >
                                <table>
                                    <tbody>
                                        <th>Material Specification</th>
                                        <th></th>
                                        <tr>
                                            <td><p>Material</p></td>
                                            <td ><p>{data.attributes && data.attributes.material}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>Thickness</p></td>
                                            <td><p>{data.attributes && data.attributes.thickness}</p></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className={styles.table} >
                                <table>
                                    <tbody>
                                        <th>{data.attributes && data.attributes.title1 === "C/Z Purlin" ? "C/Z PURLIN" : "INPUT COIL"} SPECIFICATION</th>
                                        <th></th>
                                        <tr>
                                            <td><p> {data.attributes && data.attributes.title1 === "C/Z Purlin" ? "Depth/Web" : "Coil Outer Diameter"}</p></td>
                                            <td><p>{data.attributes && data.attributes.coilOuterDiameter}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p> {data.attributes && data.attributes.title1 === "C/Z Purlin" ? "Flange" : "Coil Inner Diameter"}</p></td>
                                            <td><p>{data.attributes && data.attributes.coilInnerDiameter}</p></td>
                                        </tr>
                                        <tr>
                                            <td><p>{data.attributes && data.attributes.title1 === "C/Z Purlin" ? "Leap" : "Max Coil Weight"}</p></td>
                                            <td><p>{data.attributes && data.attributes.maxCoilWeight}</p></td>
                                        </tr>
                                        {data.attributes && data.attributes.title1 === "C/Z Purlin" ? null : <tr>
                                            <td><p>{data.attributes && data.attributes.title3 == "Slitting Service" ? "Coil Car Capacity" : data.attributes && data.attributes.title3 == "Corrugation & Profiling" ? "Coil Width" : "Coil Width (Cut to length line)"} </p></td>
                                            <td><p>{data.attributes && data.attributes.coilWidth}</p></td>
                                        </tr>}
                                    </tbody>
                                </table>
                            </div>

                            {data.attributes && data.attributes.title3 === "Corrugation & Profiling" ? null : <div className={`${styles.table} mb-0`} >
                                <table>
                                    <tbody>
                                        {data.attributes && data.attributes.title1 === "C/Z Purlin" ? <th>TOLERANCE</th> : <th>OUTPUT {data.attributes && data.attributes.title3 == "Slitting Service" ? "SLITTED COIL" : "SHEET"} SPECIFICATION</th>}
                                        <th></th>
                                        <tr>
                                            <td>
                                                {data.attributes && data.attributes.title1 === "C/Z Purlin" ? <p>Punches</p> :
                                                    <p>{data.attributes && data.attributes.title3 == "Slitting Service" ? "Recoiler" : "Stacker"} Capacity</p>
                                                }
                                            </td>
                                            <td><p>{data.attributes && data.attributes.stackerCapacity}</p></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {data.attributes && data.attributes.title1 === "C/Z Purlin" ? <p>Length</p> :
                                                    <p>{data.attributes && data.attributes.title3 == "Slitting Service" ? "Slitted Coil Inner Diameter" : "Sheet Length Min"}</p>
                                                }
                                            </td>
                                            <td><p>{data.attributes && data.attributes.sheetLengthMin}</p></td>
                                        </tr>
                                        {data.attributes && data.attributes.title1 === "C/Z Purlin" ? null : <tr>
                                            <td><p>{data.attributes && data.attributes.title3 == "Slitting Service" ? "Slitted Coil Weight minimum/maximum" : "Sheet Length Max"}</p></td>
                                            <td><p>{data.attributes && data.attributes.sheetLengthMax}</p></td>
                                        </tr>}
                                        {data.attributes && data.attributes.title1 === "C/Z Purlin" ? null : <tr>
                                            <td><p>Accuracy</p></td>
                                            <td><p>{data.attributes && data.attributes.accuracy}</p></td>
                                        </tr>}
                                    </tbody>
                                </table>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>

            <h3 className={`${styles.title}`} style={{ textTransform: "uppercase" }}>Applications</h3>
            <div className={`${styles.applictions} mb-4`}>
                <h2 className={`${styles.text}`}>{data.attributes && data.attributes.title1}</h2>

                {applications.applications && applications.applications.map((item, index) => {
                    return <div key={index} className={`${styles.box} ${styles.detail_box}`} style={{ height: "100%" }}>
                        <div className={`${styles.boximage}`}>
                            <Image width={1000} height={1000} src={item.img || '/images/Construction.svg'} />
                            <div className={`${styles.showdiv}`}>
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                        <div className={styles.links}>
                            {item.details.map((item, index) => {
                                return <Link key={index} href={item.slug} className={styles.link}>{item.title}</Link>
                            })}
                        </div>
                    </div>
                })}
            </div>

        </>
    )
}

export default ServiceDetails

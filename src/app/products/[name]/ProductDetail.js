'use client'
import styles from '@/app/styles/detail.module.css'
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import Markdown from "react-markdown";
import Brands from '@/components/Brands';
import mild from '@/utils/mild_steel.json'
import pipes from '@/utils/mild_pipes.json'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules'; // Import the Autoplay module
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { getStrapiMedia } from "@/utils/getStrapiMedia";


const ProductDetail = ({ products, applications }) => {
    
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

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const heroImageUrl = products?.attributes?.image?.data?.[0]?.attributes?.url
        ? getStrapiMedia(products.attributes.image.data[0].attributes.url)
        : "/fallback.png";
    const coverImageUrl = products?.attributes?.coverImage?.data?.attributes?.url
        ? getStrapiMedia(products.attributes.coverImage.data.attributes.url)
        : "/fallback.png";

    // Assuming you have images corresponding to each title

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
                                <h1>{products.attributes && products.attributes.title1}</h1>
                                <p>{products.attributes && products.attributes.subtitle1}</p>
                                <Link href="/inquiry" className='button'>Inquire Now</Link>
                            </div>
                        </div>
                        {/* Pre-Painted Galvanised Iron/Galvalume */}
                        <div className="col-xl-7 col-12 p-0 position-relative z-1 order-xl-1 order-0">
                            <div className={styles.content_img}>
                                {products.attributes ? (
                                    <Image
                                        width={1000}
                                        height={1000}
                                        src={heroImageUrl}
                                        alt=''
                                        style={{ objectFit: products.attributes.title1 === 'Pre-Painted Galvanised Iron/Galvalume' ? 'contain' : 'cover' }}
                                    />
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>




                <div className={styles.content_container}>
                    <span>{products.attributes && products.attributes.title2}</span>
                    <h4>{products.attributes && products.attributes.title3}</h4>

                    {products.attributes &&
                        (products.attributes.title1 === "Mild Steel Structure" ||
                            products.attributes.title1 === "Mild Steel Pipes") ? null : (
                        <div className="row my-3 mt-5" style={{ height: "100%" }}>
                            <div className="col-lg-4 col-12">
                                {products.attributes ? (

                                    <Image
                                        style={{ height: "100%", width: "100%", objectFit: 'cover' }}
                                        //   className={styles.prod_image}
                                        width={1000}
                                        height={1000}
                                        src={coverImageUrl}
                                        // className="img-fluid"
                                        alt=""
                                    />
                                    // </div>

                                ) : null}
                            </div>
                            <div className="col-lg-8 col-12 mt-lg-0 mt-3">
                                {products.attributes &&
                                    products.attributes.newDescription &&
                                    (() => {
                                        const text =
                                            products.attributes.newDescription;
                                        const modifiedText = text.replace(
                                            /(\b[^:\n]+):/g,
                                            "**$1:**"
                                        );
                                        return <Markdown>{modifiedText}</Markdown>;
                                    })()}
                            </div>
                        </div>
                    )}

                    {products.attributes &&
                        products.attributes.title1 === "Mild Steel Structure" ? (
                        <div>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                                onBeforeInit={(swiper) => {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                }}
                                onSlideChange={(swiper) => {
                                    setIsBeginning(swiper.isBeginning);
                                    setIsEnd(swiper.isEnd);
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 1,
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                    },
                                }}
                                modules={[Navigation, Autoplay]}
                                style={{ marginTop: "2vw" }}
                            >
                                {mild.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Link
                                            href={item.slug}
                                            className={styles.mild}
                                        >
                                            <div className={styles.types}>
                                                <Image
                                                    src={item.image}
                                                    width={1000}
                                                    height={1000}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <h4>{item.title}</h4>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="d-flex align-items-center justify-content-center mt-3" style={{gap: ".7em"}}>
                                <button
                                    className={`arrow ${isBeginning ? 'disabled' : ''}`}
                                    ref={prevRef}
                                    disabled={isBeginning}
                                    style={{ opacity: isBeginning ? 0.5 : 1 }}
                                >
                                    <BsArrowLeftShort />
                                </button>
                                <button
                                    className={`arrow ${isEnd ? 'disabled' : ''}`}
                                    ref={nextRef}
                                    disabled={isEnd}
                                    style={{ opacity: isEnd ? 0.5 : 1 }}
                                >
                                    <BsArrowRightShort />
                                </button>
                            </div>
                        </div>
                    ) : null}

                    {products.attributes &&
                        products.attributes.title1 === "Mild Steel Pipes" ? (
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 1,
                                },
                                1024: {
                                    slidesPerView: 2,
                                },
                            }}
                            modules={[Autoplay]}
                            style={{ marginTop: "2vw" }}
                        >
                            {pipes.sub_products.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Link
                                        href={item.slug}
                                        className={styles.mild}
                                    >
                                        <div className={styles.types}>
                                            <Image
                                                src={item.image}
                                                width={1000}
                                                height={1000}
                                                className="img-fluid"
                                                alt={item.title}
                                            />
                                            <h4>{item.title}</h4>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : null}
                </div>

            </div>


            <h3 className={`${styles.title}`} style={{ textTransform: "uppercase" }}>Applications</h3>
            <div className={`${styles.applictions}`}>
                <h2 className={`${styles.text}`}>{products.attributes && products.attributes.title1}</h2>
                {applications && applications.map((item, index) => {
                    return <div key={index} className={`${styles.box}`}>
                        <div className={`${styles.boximage}`}>
                            <div className="d-flex align-items center justify-content-center h-100 w-100">
                                <Image className='img-fluid' width={1000} height={1000} src={item.img || '/images/construction1.svg'} />
                            </div>
                            <div className={`${styles.showdiv}`}>
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                        {item.details ? <div className={styles.links}>
                            {item.details.map((item, index) => {
                                return <Link key={index} href={item.slug} className={styles.link}>{item.title}</Link>
                            })}
                        </div> : null}
                    </div>
                })}
            </div>


            <Brands subtitle={"Brands Supplied"} title={products.attributes && products.attributes.title1} />

        </>
    )
}

export default ProductDetail

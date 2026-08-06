'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from '@/app/styles/productSlide.module.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Draggable from 'gsap/dist/Draggable'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import { getStrapiMedia } from "@/utils/getStrapiMedia";


const ProductSlide = () => {

    const [products, setProducts] = useState([]);

    const buttonLeftRef = useRef(null);
    const buttonRightRef = useRef(null);

    const initializeAnimations = () => {
        gsap.registerPlugin(Draggable, ScrollTrigger);
    
        let target = 0;
        let current = 0;
        const ease = 0.075;
        const isMobile = window.innerWidth < 499;
        const scrollStep = isMobile ? 350 : 800; // Adjust this value for button scroll amount
    
        const slider = document.querySelector(`.${styles.slider}`);
        const wrapper = slider.querySelector(`.${styles.slider_wrapper}`);
        const slides = wrapper.querySelectorAll(`.${styles.slide}`);
    
        let maxScroll = wrapper.scrollWidth / 2.6;
    
        function lerp(start, end, t) {
            return start * (1 - t) + end * t;
        }
    
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
        function updateScaleAndPosition() {
            const viewportWidth = window.innerWidth;
            slides.forEach((slide) => {
                const rect = slide.getBoundingClientRect();
                const centerPosition = (rect.left + rect.right) / 2;
                const distanceFromCenter = centerPosition - viewportWidth / 2;
    
                let scale, offsetX;
                const isSmallScreen = window.innerWidth <= 768;
    
                if (distanceFromCenter > 0) {
                    scale = isSmallScreen
                        ? Math.min(1.25, 1 + distanceFromCenter / viewportWidth) // Reduced max scale for small screens
                        : Math.min(1.7, 1 + distanceFromCenter / viewportWidth);
                    offsetX = (scale - 1) * (viewportWidth * 0.1); // Adjust scaling effect
                } else {
                    scale = isSmallScreen
                        ? Math.max(0.7, 1 - Math.abs(distanceFromCenter) / viewportWidth) // Increased min scale for small screens
                        : Math.max(0.5, 1 - Math.abs(distanceFromCenter) / viewportWidth);
                    offsetX = 0;
                }
    
                gsap.set(slide, { scale: scale, x: offsetX });
            });
        }
    
        function update() {
            current = lerp(current, target, ease);
    
            // Adjust the target to center the last slide
            if (current >= maxScroll) {
                target = maxScroll;
                current = maxScroll;
            } else if (current < 0) {
                target = 0;
                current = 0;
            }
    
            gsap.set(wrapper, {
                x: -current,
            });
    
            updateScaleAndPosition();
    
            requestAnimationFrame(update);
        }
    
        function handleScroll(e) {
            const sliderRect = slider.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sliderTop = sliderRect.top;
            const sliderBottom = sliderRect.bottom;
    
            if (sliderTop < windowHeight && sliderBottom > 0) {
                target += e.deltaY;
                target = Math.max(0, target);
                target = Math.min(maxScroll, target);
            }
        }
    
        function slideLeft() {
            target -= scrollStep;
            target = Math.max(0, target);
        }
    
        function slideRight() {
            target += scrollStep;
            target = Math.min(maxScroll, target);
        }
    
        window.addEventListener("resize", () => {
            maxScroll = wrapper.scrollWidth / 2.6;
        });
    
        window.addEventListener("wheel", handleScroll);
    
        // Function to initialize the draggable with different settings based on window width
        function initializeDraggable() {
            const isMobile = window.innerWidth < 499;
            Draggable.create(wrapper, {
                type: "x",
                bounds: { minX: -maxScroll, maxX: 0 },
                inertia: true,
                onDrag: function () {
                    target = -this.x;
                },
                onThrowUpdate: function () {
                    target = -this.x;
                },
                inertia: {
                    resistance: isMobile ? 1500 : 500, // Higher resistance for mobile devices to slow down drag
                    power: isMobile ? 1 : 0.8, // Lower power for mobile to reduce speed
                    endVelocity: isMobile ? 0.001 : 0.02, // Slower stop on mobile
                },
            });
        }
    
        // Initialize draggable on page load
        initializeDraggable();
    
        // ScrollTrigger for auto-sliding
        ScrollTrigger.create({
            trigger: slider,
            start: "top center", // Start when slider enters the viewport
            end: "bottom center", // End when the slider leaves the viewport
            onEnter: () => {
                // Slide to the end when entering from the top
                gsap.to(wrapper, {
                    x: -maxScroll,
                    duration: 13,
                    ease: "power2.inOut",
                    onUpdate: () => {
                        target = Math.abs(gsap.getProperty(wrapper, "x"));
                    },
                });
            },
            onEnterBack: () => {
                // Slide to the start when entering from the bottom
                gsap.to(wrapper, {
                    x: 0,
                    duration: 13,
                    ease: "power2.inOut",
                    onUpdate: () => {
                        target = Math.abs(gsap.getProperty(wrapper, "x"));
                    },
                });
            },
        });
    
        buttonLeftRef.current.addEventListener("click", slideLeft);
        buttonRightRef.current.addEventListener("click", slideRight);
    
        update();
    
        // Cleanup event listeners on unmount
        return () => {
            window.removeEventListener("resize", () => (maxScroll = wrapper.scrollWidth / 2.6));
            window.removeEventListener("wheel", handleScroll);
            buttonLeftRef.current.removeEventListener("click", slideLeft);
            buttonRightRef.current.removeEventListener("click", slideRight);
            ScrollTrigger.killAll();
            window.addEventListener("resize", () => {
                Draggable.get(wrapper)?.kill(); // Remove the existing draggable instance
                initializeDraggable(); // Re-initialize with the new settings
            });
        };
    };
    

    const getProducts = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products?populate=*`, {
                method: "GET",
            });
            const data = response.data.data;
            setProducts(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            initializeAnimations();
        }
    }, [products]);

    console.log(products);
    

    return (
        <>
            <div className={styles.products}>
                <div className={`${styles.content} padd-x`}>
                    <div className={styles.inner_content}>
                        <h2>Our Products</h2>
                        <p>Durable, reliable, and versatile, our steel products meet your every need, ensuring superior quality and performance in every application.</p>
                    </div>
                    <div className={styles.btns}>
                        <button ref={buttonLeftRef}>
                            <svg className={styles.circleButton__circle}>
                                <rect x="0.75" y="0.75" rx="1.5" width="1.5" height="1.5"></rect>
                                <rect x="0.75" y="0.75" rx="1.5" width="1.5" height="1.5"></rect>
                            </svg>
                            <IoIosArrowRoundBack className={styles.btnIcon} />
                        </button>
                        <button ref={buttonRightRef}>
                            <svg className={styles.circleButton__circle}>
                                <rect x="0.75" y="0.75" rx="1.5" width="1.5" height="1.5"></rect>
                                <rect x="0.75" y="0.75" rx="1.5" width="1.5" height="1.5"></rect>
                            </svg>
                            <IoIosArrowRoundForward className={styles.btnIcon} />
                        </button>
                    </div>
                </div>
                <div className={styles.slider}>
                    <div className={styles.slider_wrapper} 
                    style={{
                        '--slide-count': products && products.length, // Set the slide count variable
                      }}>
                        {products && products.map((item, index) => {
                            const imagePath = item?.attributes?.name !== "PPGI/PPGL"
                                ? item?.attributes?.image?.data?.[0]?.attributes?.url
                                : item?.attributes?.coverImage?.data?.attributes?.url;
                            const imageUrl = imagePath ? getStrapiMedia(imagePath) : "/fallback.png";

                            return <Link href={`/products/${item.attributes.slug}`} key={index} scroll={true} className={styles.slide}>
                                <h4>{item.attributes.name}</h4>
                                {item.attributes.name !== "PPGI/PPGL" ? 
                                    <Image width={1000} height={1000} src={imageUrl} className='img-fluid' alt="" /> : 
                                    <Image width={1000} height={1000} src={imageUrl} className='img-fluid' alt="" />
                                }
                                
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductSlide


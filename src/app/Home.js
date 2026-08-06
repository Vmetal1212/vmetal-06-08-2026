'use client'
import "./page.css";
import Herosection from "@/components/Herosection";
import ScrollSection from "@/components/ScrollSection";
// import ProductSlide from "@/components/ProductSlide";
import Testimonial from "@/components/Testimonial";
import Brands from "@/components/Brands";
import axios from "axios";
import Contact from "@/components/Contact";
import dynamic from "next/dynamic";
import Script from 'next/script';
import Head from "next/head";
import Blogs from "@/components/Blogs";
import ProductSlider from "@/components/ProductSlider";

const ProductSlide = dynamic(() => import('@/components/ProductSlide'), { ssr: false })


const Home = () => {

  return (
    <>
      <Herosection />
      <ScrollSection />
      {/* <ProductSlide /> */}
      <ProductSlider/>
      <Testimonial />
      <Brands subtitle={"Brands"} title={"All"} />
      <Blogs />
      <Contact />
    </>
  );
}

export default Home;
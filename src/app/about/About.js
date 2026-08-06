'use client'
import React, { useEffect } from 'react'
import styles from '../styles/about.module.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';


const About = () => {

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
    createScrollTrigger(`.${styles.about}`, ` .${styles.about_img}`, 100, 2); // Row 1: sensitivity -10, duration 1s
    createScrollTrigger(`.${styles.about}`, ` .${styles.about_content}`, -100, 2); // Row 1: sensitivity -10, duration 1s
    createScrollTrigger(`.${styles.about}`, ` .${styles.asset}`, 100, 2); // Row 1: sensitivity -10, duration 1s
    createScrollTrigger(`.${styles.why_container}`, ` img`, -200, 2); // Row 1: sensitivity -10, duration 1s
    createScrollTrigger(`.${styles.mission}`, ` .mission`, -150, 3); // Row 1: sensitivity -10, duration 1s
    createScrollTrigger(`.${styles.mission}`, ` .vission`, 150, 3); // Row 1: sensitivity -10, duration 1s
    createScrollTrigger(`.${styles.values}`, ` .value1`, 150, 3); // Row 1: sensitivity -10, duration 1s
    createScrollTrigger(`.${styles.values}`, ` .value2`, 170, 3); // Row 1: sensitivity -10, duration 1s
    createScrollTrigger(`.${styles.values}`, ` .value3`, 190, 3); // Row 1: sensitivity -10, duration 1s
    createScrollTrigger(`.${styles.values}`, ` .value4`, 210, 3); // Row 1: sensitivity -10, duration 1s
    createScrollTrigger(`.${styles.values}`, ` .value5`, 230, 3); // Row 1: sensitivity -10, duration 1s
  }, [])


  return (
    <>
      <div className={`${styles.about} padd-x`}>
        <div className="row">
          <div className="col-md-7 col-12 order-md-0 order-1">
            <div className={styles.left_content}>
              <div className={styles.about_content}>
                <h1>About Us</h1>
                <p>V Metal Solutions Inc. is committed to providing our customers with the highest quality steel products and services. We are a leading steel supplying company in Ahmedabad, Gujarat, and we are proud to serve customers throughout Gujarat, Rajasthan, and Madhya Pradesh.</p>
              </div>
              <div className={styles.about_content}>
                <p>V Metal Solutions Inc&apos;s coil processing service Centre is in Ahmedabad, Gujarat. We are fully geared to process and cater to your needs as per your specifications and requirements.</p>
              </div>
              <div className={styles.asset}>
                <Image width={1000} height={1000} src="/images/onTime.jpg" className='img img-fluid' alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-5 col-12 d-flex align-items-start justify-content-start order-md-1 order-0">
            <div className={styles.about_img}>
              <Image width={1000} height={1000} src="/images/aboutus.jpg" className='img img-fluid' alt="" />
            </div>
          </div>
        </div>

        <div className={`${styles.why_container}`}>
          <Image width={1000} height={1000} src={"/images/asset1.png"} className='img-fluid' alt='' />
          <div className={styles.container_box}>
            <div className={styles.content}>
              <span className={styles.whyUs}>Why us ?</span>
              <h2>V Metal Solutions Inc was established in 2020 and successfully caters to its customers with its products and services.</h2>
              <p>We contribute to Steel manufacturing and merchanting, which highly contribute to different functions by giving their customers mild steel sheets, coils, slitted coils, and corrugated sheets as per their requirements and specifications</p>
            </div>
          </div>
        </div>

      </div>

      <div className={`${styles.mission} padd-x`}>
        <div className="row h-100">
          <div className="col-lg-6 col-12">
            <div className={`${styles.mission_item} mission`}>
              <Image width={1000} height={1000} src="/images/asset2.avif" className='img-fluid' alt="" />
              <h4>Mission</h4>
              <p>We aim to be the global leader in providing innovative, high-quality, affordable metal solutions that empower industries to achieve excellence, efficiency, and sustainable growth. We are committed to exceeding customer expectations through unmatched service, integrity, and customised solutions that drive progress and innovation. Through continuous improvement, operational excellence, and a relentless focus on customer success, we strive to deliver reliable products that support industries&apos; evolving needs and contribute to a more prosperous and resilient future.</p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className={`${styles.mission_item} vission`}>
              <Image width={1000} height={1000} src="/images/asset2.avif" className='img-fluid' alt="" />
              <h4>Vision 2026</h4>
              <p>V Metal Solutions INC will successfully enter 3 new international markets and achieve 18% annual sales growth. We are committed to optimizing operational efficiency, strengthening partnerships with our stakeholders, and driving innovation. Our vision is to deliver sustainable, high-quality metal solutions that create long-term value and contribute to the global success of our customers and partners.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.values} padd-x`}>
        <div className={styles.heading}>
          <h2 style={{ color: "var(--bg-color)", zIndex: 9 }}>Values</h2>
        </div>
        <Image width={1000} height={1000} src={"/images/asset1.png"} className={`${styles.asset2} img-fluid`} alt='' />
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-12">
            <div className={`${styles.value_item} value1`} data-item="">
              <div className={styles.value_asset}>
                <Image src={"/images/excellence.png"} className='img-fluid' alt='' width={40} height={40} />
              </div>
              <div className={styles.value_content}>
                <h4>Excellence</h4>
                <p>Striving for superior performance in all aspects of the business.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className={`${styles.value_item} value2`} data-item="2">
              <div className={styles.value_asset}>
                <Image src={"/images/quality.png"} className='img-fluid' alt='' width={40} height={40} />
              </div>
              <div className={styles.value_content}>
                <h4>Quality</h4>
                <p>Committing to the highest standards to ensure reliable and durable products.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className={`${styles.value_item} value3`} data-item="3">
              <div className={styles.value_asset}>
                <Image src={"/images/handshake.png"} className='img-fluid' alt='' width={40} height={40} />
              </div>
              <div className={styles.value_content}>
                <h4>Customer Commitment </h4>
                <p>Focusing on exceeding customer expectations and building lasting partnerships.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className={`${styles.value_item} value4`} data-item="4">
              <div className={styles.value_asset}>
                <Image src={"/images/integration.png"} className='img-fluid' alt='' width={40} height={40} />
              </div>
              <div className={styles.value_content}>
                <h4>Integrity</h4>
                <p>Ensuring transparency, honesty, and trust in every business interaction.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className={`${styles.value_item} value5`} data-item="5">
              <div className={styles.value_asset}>
                <Image src={"/images/sustainable.png"} className='img-fluid' alt='' width={40} height={40} />
              </div>
              <div className={styles.value_content}>
                <h4>Sustainability</h4>
                <p>Advocating for environmentally responsible practices and long-term value creation.</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default About

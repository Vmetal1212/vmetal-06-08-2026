'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/app/styles/footer.module.css'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from 'gsap'
import { useRouter } from 'next/router'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLocationSharp, IoLogoWhatsapp, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import Image from 'next/image'
import axios from 'axios'
import { usePathname } from 'next/navigation'


const Footer = () => {

  // const router = useRouter();
  // const { pathname } = router
  const pathname = usePathname()

  useEffect(() => {
    function animation() {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 999px)", () => {
        gsap.set(`.${styles.footer_container}`, { yPercent: -120 })

        const uncover = gsap.timeline({ paused: true })

        uncover
          .to(`.${styles.footer_container}`, { yPercent: 0, ease: 'none' })
          ;

        ScrollTrigger.create({
          trigger: `.${styles.footer_container}`,
          start: 'top 80%',
          end: '+=100%',
          animation: uncover,
          scrub: true,
        })

      })
    }

    // animation()
  }, [])

  // .post(`${baseURL}/api/webusers`, {

  const [email, setEmail] = useState(false);
  const [success, setSuccess] = useState({ success: null, text: '' });

  const newsletter = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/webusers`, {
        data: {
          Name: email,
          Email: email,
          Phone: null,
          Country: "India"
        }
      }, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })

      const json = response.data;
      console.log(json);
      setSuccess({ success: true, text: "SuccessFully Submitted" })
    } catch (error) {
      console.log(error);
      setSuccess({ success: false, text: error.message })
    }
  }



  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className="row g-2">
            <div className="col-lg-5 col-12">
              <Image width={1000} height={1000} src="/images/V_metals_logo_png.png" className='img-fluid mb-3' alt="" />
              <form onSubmit={newsletter} className={styles.form_container}>
                <h5 className='mb-1'>Join our newsletter to stay up to date.</h5>
                <div className="d-flex align-items-sm-center align-items-end mb-3 mt-2 flex-sm-row flex-column">
                  <input type="email" className='email' id='email' name='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter your Email' />
                  <button type="submit" className="button2 ms-2 mt-sm-0 mt-2 w-50">Subscribe</button>
                </div>
                {success.text !== '' ? <p className='mb-1 mt-0' style={success.success ? { color: "green" } : { color: "red" }}>{success.text}</p> : null}
                <p>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
              </form>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <h5>Useful Links</h5>
              <ul>
                <li><Link scroll={true} className={pathname === "/" ? styles.active : null} href="/">Home</Link></li>
                <li><Link scroll={true} className={pathname === "/about/" ? styles.active : null} href="/about">About Us</Link></li>
                <li><Link scroll={true} className={pathname === "/services/" ? styles.active : null} href="/services">Services</Link></li>
                <li><Link scroll={true} className={pathname === "/blogs/" ? styles.active : null} href="/blogs">Blogs</Link></li>
                <li><Link scroll={true} className={pathname === "/inquiry/" ? styles.active : null} href="/inquiry">Inquire Now</Link></li>
                <li><Link scroll={true} className={pathname === "/contactus/" ? styles.active : null} href="/contactus">Contact Us</Link></li>
                <li><Link scroll={true} className={pathname === "/privacy/" ? styles.active : null} href="/privacy">Privacy Policy</Link></li>
                <li><a href="https://www.vmetalsolutions.com/admin/auth/login" target="_blank" rel="noopener noreferrer">Admin Login</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <h5>Products</h5>
              <ul>
                <li><Link scroll={true} className={pathname === "/products/hr-hrpo/" ? styles.active : null} href="/products/hr-hrpo/">HR/HRPO</Link></li>
                <li><Link scroll={true} className={pathname === "/products/cr-cra/" ? styles.active : null} href="/products/cr-crca/">CR/CRCA</Link></li>
                <li><Link scroll={true} className={pathname === "/products/gi/" ? styles.active : null} href="/products/gi/">GI</Link></li>
                <li><Link scroll={true} className={pathname === "/products/ppgi/" ? styles.active : null} href="/products/ppgi/">PPGI</Link></li>
                <li><Link scroll={true} className={pathname === "/products/pmp/" ? styles.active : null} href="/products/pmp/">PMP Plates</Link></li>
                <li><Link scroll={true} className={pathname === "/products/ms-structure/" ? styles.active : null} href="/products/ms-structure/">M.S. Structure</Link></li>
                <li><Link scroll={true} className={pathname === "/products/ms-pipes/" ? styles.active : null} href="/products/ms-pipes/">M.S. Pipes</Link></li>
                <li><Link scroll={true} className={pathname === "/accessories/" ? styles.active : null} href="/accessories">Accessories</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-12 pe-lg-3">
              <h5>Get in Touch</h5>
              <ul>
                <li><Link href="tel:+919510215623">+91 95102 15623</Link></li>
                <li><Link href="tel:+919727015624">+91 97270 15624</Link></li>
                <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@vmetalsolutions.com" target="_blank" rel="noopener noreferrer">info@vmetalsolutions.com</a></li>
                <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@vmetalsolutions.com" target="_blank" rel="noopener noreferrer">sales@vmetalsolutions.com</a></li>
                <li><Link href="https://maps.app.goo.gl/exQQKfuGKcZnjzPi8">523, First Floor, Road No. 14, Kathwada G.I.D.C., Kathwada, Ahmedabad- 382430</Link></li>
              </ul>
              <ul className={styles.socialMedia}>
                <li><Link href="//api.whatsapp.com/send?phone=9727015624"><IoLogoWhatsapp className={styles.socialIcon} /></Link></li>
                <li><Link href="https://www.instagram.com/vmetalsolutions/profilecard/?igsh=MTNwcmRqbDlvbWx2Mg=="><IoLogoInstagram className={styles.socialIcon} /></Link></li>
                <li><Link href="https://www.linkedin.com/company/v-metal-solutions-inc/"><IoLogoLinkedin className={styles.socialIcon} /></Link></li>
              </ul>
            </div>
          </div>
          <p className={styles.copywrite}>Copyright © 2024-{new Date().getFullYear()} | All Rights Reserved by V Metal Solutions Developed By <Link href="https://www.webify.ai/" target='_blank'>Webify.Ai</Link></p>
        </div>
      </footer>
    </>
  )
}

export default Footer


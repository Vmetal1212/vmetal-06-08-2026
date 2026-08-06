'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/app/styles/navbar.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from 'next/link';
import Menu from './Menu';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import Image from 'next/image';
import { FaQuestion } from "react-icons/fa";
import { TbUserQuestion } from "react-icons/tb";
import { HiChatAlt2 } from "react-icons/hi";
import { usePathname } from 'next/navigation';


const Navbar = () => {

  const [menu, setMenu] = useState(false);

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    const showAnim = gsap.from(`.${styles.header}`, {
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1);

    const scrollTrigger = ScrollTrigger.create({
      start: "top top-=1%",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });

    return () => {
      // Cleanup on component unmount
      scrollTrigger.kill();
    };
  }, []);

  const pathname = usePathname();

  return (
    <>
      <header className={`${styles.header}`}>
        <nav className={styles.navbar}>
          <Link href={"/"} className={styles.logo}>
            <div className={styles.black}>
              <Image width={1000} height={1207} src="/images/vmetal_optimized.webp" className='img-fluid' alt="" priority={true} />
            </div>
          </Link>
          <div className={styles.links}>
            <ul>
              <li><Link scroll={true} className={pathname === "/" ? styles.active : null} href={"/"} onClick={() => setMenu(false)}>Home</Link></li>
              <li><Link scroll={true} className={pathname === "/about/" ? styles.active : null} href={"/about"} onClick={() => setMenu(false)}>About Us</Link></li>
              <li><Link scroll={true} className={pathname === "/accessories/" ? styles.active : null} href={"/accessories"} onClick={() => setMenu(false)}>Accessories</Link></li>
              <li><Link scroll={true} className={pathname.includes("/products/") ? styles.active : null} href={"/products"} onClick={() => setMenu(false)}>Products</Link></li>
              <li><Link scroll={true} className={pathname === "/services/" ? styles.active : null} href={"/services"} onClick={() => setMenu(false)}>Services</Link></li>
              <li><Link scroll={true} className={pathname === "/blogs/" ? styles.active : null} href={"/blogs"} onClick={() => setMenu(false)}>Blogs</Link></li>
              <li><Link scroll={true} className={pathname === "/contactus/" ? styles.active : null} href={"/contactus"} onClick={() => setMenu(false)}>Contact Us</Link></li>
            </ul>
            <div className={styles.contact}>
              <Link href="/inquiry">
                <div className={styles.contactIcon}>
                  <HiChatAlt2 color='#fff' />
                </div>
                <span>Inquire Now</span>
              </Link>
            </div>
            <button className={styles.menuBtn} onClick={() => { setMenu(true) }}>
              <FaBarsStaggered color='var(--text-color)' />
              <span>Menu</span>
            </button>
          </div>
        </nav>
      </header>

      <Menu setMenu={setMenu} menu={menu} />
    </>
  )
}

export default Navbar

"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/styles/uses.module.css";
import Image from "next/image";
import axios from "axios";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Link from "next/link";

const Uses = () => {
  const [uses, setUses] = useState([]);
  const keyfeatures = [
    {
      title: "Uv Protection",
      img: '/images/uv_protection1.svg',
      description:
        "These roofing sheets come with advanced UV protection, safeguarding against harmful UV rays and extending the life of the sheet.",
    },
    {
      title: "High Impact Resistance",
      img: '/images/science1.svg',
      description:
        "Built to withstand extreme weather conditions, these sheets offer exceptional impact resistance, ensuring durability even under harsh environments.",
    },
    {
      title: "Light Transmission",
      img: '/images/resilient1.svg',
      description:
        " The polycarbonate material provides excellent light transmission, allowing natural light to brighten your space while blocking harmful UV rays.",
    },
    {
      title: "Thermal Insulation",
      img: '/images/thermal1.svg',
      description:
        "The sheets offer superior thermal insulation, maintaining a comfortable indoor environment by reducing heat gain.",
    },
    {
      title: "Lightweight and Easy Installation",
      img: '/images/Light_transmission1.svg',
      description:
        "With their lightweight nature, these sheets are easy to handle and install, reducing labor costs and time.",
    },
    {
      title: "Eco-Friendlyn",
      img: '/images/eco_friendly.png',
      description:
        "Made from recyclable materials, these sheets are an environmentally conscious choice for sustainable building practices.",
    },
  ];
  const keyfeatures1 = [
    {
      title: "Efficient Airflow",
      img: '/images/efficient_airflow1.svg',
      description:
        "The unique design maximizes airflow, facilitating the continuous removal of hot and stale air from buildings' interiors.",
    },
    {
      title: "Energy-Efficient Operation",
      img: '/images/energy-control.png',
      description:
        "Powered by natural wind energy, our turbo ventilators operate without electricity, reducing energy costs and environmental impact.",
    },
    {
      title: "Durable Construction",
      img: '/images/durable1.svg',
      description:
        " Made from high-quality stainless steel, these ventilators are corrosion-resistant and designed to withstand extreme weather conditions.",
    },
    {
      title: "Maintenance-Free",
      img: '/images/maintenance1.svg',
      description:
        "The simple and robust design ensures long-term performance with minimal maintenance, providing a cost-effective ventilation solution.",
    },
    {
      title: "Noise-Free Performance",
      img: '/images/noise1.svg',
      description:
        "The ventilators operate silently, ensuring a peaceful environment without the disturbance of mechanical noise.",
    },
  ];
  const keyfeatures2 = [
    {
      title: "Compatibility",
      img: '/images/compatibility1.svg',
      description:
        "Engineered to fit perfectly with our turbo roof ventilators, these base plates ensure a secure and efficient installation.",
    },
    {
      title: "Weather-Resistant",
      img: '/images/weather1.svg',
      description:
        "  Made from high-quality polycarbonate, these base plates resist weathering and UV damage and maintain their integrity over time.",
    },
    {
      title: "Lightweight and Strong",
      img: '/images/ligthweight.png',
      description:
        "Despite its lightweight nature, the polycarbonate material offers remarkable strength and durability and can support the ventilator under various conditions.",
    },
    {
      title: "Customizable Design",
      img: '/images/Customizable_Design.png',
      description:
        "Available in various sizes and profiles, these base plates can be tailored to fit different roofing types and structures.",
    },
  ];

  // greenhouses, carports, awnings, skylights, and industrial roofing.
  const applications1 = [
    {
      title: "Greehhouses",
      img: '/images/greenhouse1.svg',
    },
    {
      title: "Carports",
      img: '/images/carpet.png',
    },
    {
      title: "Awnings",
      img: '/images/awnings.svg',
    },
    {
      title: "Skylights",
      img: '/images/skylight.png',
    },
    {
      title: "Industrial Roofing",
      img: '/images/industrial_rooting1.svg',
    },
  ];

  // Our turbo roof ventilators are perfect for factories, warehouses, workshops, and residential homes. They promote a comfortable and well-ventilated environment.
  const applications2 = [
    {
      title: "Factories",
      img: '/images/factory1.svg',
    },
    {
      title: "Warehouses",
      img: '/images/warehouse.png',
    },
    {
      title: "Workshops",
      img: '/images/mechanic.png',
    },
    {
      title: "Residential Homes",
      img: '/images/house.png',
    },
  ];

  // These base plates are ideal for use with our turbo roof ventilators in residential and industrial settings. They provide a reliable and durable solution for effective ventilation.
  const applications3 = [
    {
      title: "Residential Homes",
      img: '/images/house.png',
    },
    {
      title: "Industrial",
      img: '/images/factory1.svg',
    },
  ];


  const getUses = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/uses?populate=*`,
      {
        method: "GET",
      }
    );
    const data = response.data.data;
    setUses(data);
  };

  useEffect(() => {
    getUses();
  }, []);

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
        onUpdate: (self) => {
          var translateY = self.getVelocity() / sensitivity; // Adjust the sensitivity
          if (Math.abs(translateY) > Math.abs(proxy.y)) {
            proxy.y = translateY;
            gsap.to(proxy, {
              y: 0,
              duration: duration, // Adjust the duration
              ease: "power3",
              overwrite: true,
              onUpdate: () => translateSetter(proxy.y),
            });
          }
        },
      });

      gsap.set(rowSelector + item, {
        transformOrigin: "center center",
        force3d: true,
      });
    }

    // Apply to both rows with different parameters
    createScrollTrigger(`.${styles.uses}`, ` h1`, -100, 1.5);
    createScrollTrigger(`.${styles.uses}`, " p", -100, 1.5);
    createScrollTrigger(`.${styles.uses}`, " h4", -100, 1.5);
    createScrollTrigger(`.${styles.uses}`, " .button", -100, 1.5);
    createScrollTrigger(`.${styles.uses}`, " img", -100, 1.5);
    createScrollTrigger(`.${styles.uses} ul`, " li", -100, 1.5);
  });

  return (
    <>
      <div className={`${styles.uses}`}>
        <section>
          <div className="padd-x">
            <div className={`${styles.heading}`}>
              <h1>Polycarbonate Roofing Sheets <br /> (Fortech UV 3000 Series)</h1>
            </div>
            <div className="row">
              <div className={`${styles.pera} col-lg-6 col-md-6 col-12`}>
                <p>
                  V Metal Solutions INC offers high-quality Polycarbonate
                  Roofing Sheets under the Fortech UV 3000 Series. These sheets
                  are designed for durability and versatility, making them ideal
                  for residential and commercial roofing applications.
                </p>
                <div className={styles.btn}>
                  <Link href="/inquiry" className='button'>Inquire Now</Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center">
                <div className={styles.image}>
                  <Image
                    width={1000}
                    height={1000}
                    src="/images/Polycarbonate_Roofing_Sheets.png"
                    className="img-fluid"
                    alt="error"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.slider} padd-x my-4`}>
            <div className={`${styles.heading}`}>
              <h2>Key Features</h2>
            </div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper3"
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {keyfeatures.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      data={item.description}
                      className={`${styles.item} ${styles.item1}`}
                    >
                      <div className={`${styles.item_image}`}>
                        <Image
                          width={1000}
                          height={1000}
                          className="img-fluid"
                          src={item.img}
                          alt="error"
                        />
                      </div>
                      <h4>{item.title}</h4>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className={`${styles.application}`}>
              <div className={`${styles.heading}`}>
                <h2>Applications</h2>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper3"
                  breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    // when window width is >= 1024px
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {applications1.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div
                          data={item.description}
                          className={`${styles.item}`}
                        >
                          <div className={`${styles.item_image}`}>
                            <Image
                              width={1000}
                              height={1000}
                              className="img-fluid"
                              src={item.img}
                              alt="error"
                            />
                          </div>
                          <h4>{item.title}</h4>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.sectionleft}`}>
          <div className="padd-x">
            <div className={`${styles.heading} ${styles.right}`}>
              <h2>Turbo Roof Ventilators</h2>
            </div>
            <div className="row">
              <div className={`${styles.image_container}col-lg-6 col-md-6 col-12 order-lg-0 order-md-0 order-sm-1`}>
                <div className={styles.image}>
                  <Image
                    width={1000}
                    height={1000}
                    src="/images/Turbo_Roof_Ventilators_2.jpg"
                    className="img-fluid"
                    alt="error"
                  />
                </div>
              </div>
              <div className={`${styles.pera}col-lg-6 col-md-6 col-12  order-lg-1 order-md-1 order-sm-0`}>
                <p>
                  Introducing our advanced <b>Turbo Roof Ventilators</b>, engineered to provide effective ventilation solutions for residential, commercial, and industrial applications. These ventilators are designed to expel hot air, moisture, and pollutants, ensuring a healthier indoor environment.
                </p>
                <div className={styles.btn}>
                  <Link href="/inquiry" className='button'>Inquire Now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.slider} padd-x my-4`}>
            <div className={`${styles.heading}`}>
              <h2>Key Features</h2>
            </div>
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper3"
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {keyfeatures1.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      data={item.description}
                      className={`${styles.item} ${styles.item1}`}
                    >
                      <div className={`${styles.item_image}`}>
                        <Image
                          width={1000}
                          height={1000}
                          className="img-fluid"
                          src={item.img}
                          alt="error"
                        />
                      </div>
                      <h4>{item.title}</h4>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className={`${styles.application}`}>
              <div className={`${styles.heading}`}>
                <h2>Applications</h2>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper3"
                  breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    // when window width is >= 1024px
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {applications2.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div
                          data={item.description}
                          className={`${styles.item}`}
                        >
                          <div className={`${styles.item_image}`}>
                            <Image
                              width={1000}
                              height={1000}
                              className="img-fluid"
                              src={item.img}
                              alt="error"
                            />
                          </div>
                          <h4>{item.title}</h4>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="padd-x">
            <div className={`${styles.heading}`}>
              <h2>Polycarbonate Base Plates for Ventilators</h2>
            </div>
            <div className="row g-sm-0 g-3">
              <div className={`${styles.pera}col-lg-6 col-md-6 col-12`}>
                <p className="pe-3">
                  Enhance your ventilation setup with our <b>Polycarbonate Base Plates</b>, explicitly designed for use with our turbo roof ventilators. These base plates provide a robust and weather-resistant foundation for ventilators, ensuring optimal performance and longevity.
                </p>
                <div className={styles.btn}>
                  <Link href="/inquiry" className='button'>Inquire Now</Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className={styles.image}>
                  <Image
                    width={1000}
                    height={1000}
                    src="/images/polycarbonate.png"
                    className="img-fluid"
                    alt="error"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.slider} padd-x my-4`}>
            <div className={`${styles.heading}`}>
              <h2>Key Features</h2>
            </div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper3"
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {keyfeatures2.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      data={item.description}
                      className={`${styles.item} ${styles.item1}`}
                    >
                      <div className={`${styles.item_image}`}>
                        <Image
                          width={1000}
                          height={1000}
                          className="img-fluid"
                          src={item.img}
                          alt="error"
                        />
                      </div>
                      <h4>{item.title}</h4>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className={`${styles.application}`}>
              <div className={`${styles.heading}`}>
                <h2>Applications</h2>
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  className="mySwiper3"
                  breakpoints={{
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    // when window width is >= 640px
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    // when window width is >= 1024px
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {applications3.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div
                          data={item.description}
                          className={`${styles.item}`}
                        >
                          <div className={`${styles.item_image}`}>
                            <Image
                              width={1000}
                              height={1000}
                              className="img-fluid"
                              src={item.img}
                              alt="error"
                            />
                          </div>
                          <h4>{item.title}</h4>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Uses;

"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./page.module.scss";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
const Slide = () => {
  return (
    <>
      <Swiper
        className={`${styles.swiper} mySwiper`}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
      >
        <SwiperSlide className={styles.swiperslide}>
          <Image
            className={styles.img}
            fill
            alt=""
            src="https://phanmemketoanerp.com/wp-content/uploads/2017/12/ai-01.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <Image
            className={styles.img}
            fill
            alt=""
            src="https://vti-solutions-assets.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/10/10073057/tri-tue-nhan-tao-ai-1024x576.webp"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <Image
            className={styles.img}
            fill
            alt=""
            src="https://cdn.tgdd.vn/hoi-dap/1216572/Thumbnail/tri-tue-nhan-tao-ai-la-gi-cac-ung-dung-va-tiem-nan-thumb.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <Image
            className={styles.img}
            fill
            alt=""
            src="https://phanmemketoanerp.com/wp-content/uploads/2017/12/ai-01.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slide;

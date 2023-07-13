"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./page.module.scss";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const SlideAuto = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={`mySwiper ${styles.swiper}`}
      >
        <SwiperSlide className={styles.swiperslide}>
          <div className="Group292  w-full  h-[460.35px] relative">
            <div className="Group290  w-full h-[460.35px] left-0 top-0 absolute">
              <Image
                alt=""
                fill
                className="Rectangle130  w-full h-[460.35px] left-0 top-0 absolute rounded-[42px]"
                src="https://phanmemketoanerp.com/wp-content/uploads/2017/12/ai-01.jpg"
              />
              <div className="Rectangle131  w-full h-[460.35px] left-0 top-0 absolute opacity-40 bg-zinc-900 rounded-[42px]" />
            </div>
            <div className="Frame292 w-[422.92px] h-[307.59px] left-[81.29px] top-[76px] absolute flex-col justify-start items-start gap-[45px] inline-flex">
              <div className="Component5 w-[295.87px] h-[29.59px] relative">
                <div className="Rectangle125 w-[178.76px] h-[19.72px] left-[2.47px] top-[4.93px] absolute opacity-50 bg-red-500 rounded-[69.42px] blur[56.67px]" />
                <div className="Rectangle126 w-[181.22px] h-[29.59px] left-0 top-0 absolute rounded-[69.42px] border border-red-500" />
                <div className="ProductUpdate w-[131px] h-3 left-[43.64px] top-[8.37px] absolute text-white text-sm font-normal leading-[14.17px] tracking-wide">
                  Product Update
                </div>
                <div className="Arrow w-[29.59px] h-[29.59px] left-[245.33px] top-0 absolute" />
                <div className="Ellipse45 w-[7.40px] h-[7.40px] left-[18.49px] top-[11.10px] absolute bg-red-500 rounded-full" />
              </div>
              <div className="DNetworking w-[332px] text-white text-[29px] font-bold leading-9">
                3D Networking
              </div>
              <div className="GlJsIsEngineeredToRenderEvenTheMostDetailedFeatureDenseMapsAt60FpsOnBothDesktopAndMobileDevices w-[422.92px] text-white text-[15px] font-normal leading-normal">
                GL JS is engineered to render even the most detailed,
                feature-dense maps at 60 FPS on both desktop and mobile devices.{" "}
              </div>
              <div className="Group291 w-[198px] h-[35px] relative">
                <div className="ExploreMore w-[132.78px] left-0 top-[6px] absolute text-red-500 text-xs font-semibold uppercase leading-snug tracking-wide">
                  Explore more →
                </div>
                <div className="Rectangle125 w-[198px] h-[35px] left-0 top-0 absolute rounded-[49px] border border-red-500 border-opacity-0" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div className="Group292  w-full h-[460.35px] relative">
            <div className="Group290  w-full h-[460.35px] left-0 top-0 absolute">
              <Image
                alt=""
                fill
                className="Rectangle130  w-full h-[460.35px] left-0 top-0 absolute rounded-[42px]"
                src="https://cdn.tgdd.vn/hoi-dap/1216572/Thumbnail/tri-tue-nhan-tao-ai-la-gi-cac-ung-dung-va-tiem-nan-thumb.jpg"
              />
              <div className="Rectangle131  w-full h-[460.35px] left-0 top-0 absolute opacity-40 bg-zinc-900 rounded-[42px]" />
            </div>
            <div className="Frame292 w-[422.92px] h-[307.59px] left-[81.29px] top-[76px] absolute flex-col justify-start items-start gap-[45px] inline-flex">
              <div className="Component5 w-[295.87px] h-[29.59px] relative">
                <div className="Rectangle125 w-[178.76px] h-[19.72px] left-[2.47px] top-[4.93px] absolute opacity-50 bg-red-500 rounded-[69.42px] blur[56.67px]" />
                <div className="Rectangle126 w-[181.22px] h-[29.59px] left-0 top-0 absolute rounded-[69.42px] border border-red-500" />
                <div className="ProductUpdate w-[131px] h-3 left-[43.64px] top-[8.37px] absolute text-white text-sm font-normal leading-[14.17px] tracking-wide">
                  Product Update
                </div>
                <div className="Arrow w-[29.59px] h-[29.59px] left-[245.33px] top-0 absolute" />
                <div className="Ellipse45 w-[7.40px] h-[7.40px] left-[18.49px] top-[11.10px] absolute bg-red-500 rounded-full" />
              </div>
              <div className="DNetworking w-[332px] text-white text-[29px] font-bold leading-9">
                3D Networking
              </div>
              <div className="GlJsIsEngineeredToRenderEvenTheMostDetailedFeatureDenseMapsAt60FpsOnBothDesktopAndMobileDevices w-[422.92px] text-white text-[15px] font-normal leading-normal">
                GL JS is engineered to render even the most detailed,
                feature-dense maps at 60 FPS on both desktop and mobile devices.{" "}
              </div>
              <div className="Group291 w-[198px] h-[35px] relative">
                <div className="ExploreMore w-[132.78px] left-0 top-[6px] absolute text-red-500 text-xs font-semibold uppercase leading-snug tracking-wide">
                  Explore more →
                </div>
                <div className="Rectangle125 w-[198px] h-[35px] left-0 top-0 absolute rounded-[49px] border border-red-500 border-opacity-0" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div className="Group292  w-full h-[460.35px] relative">
            <div className="Group290  w-full h-[460.35px] left-0 top-0 absolute">
              <Image
                alt=""
                fill
                className="Rectangle130  w-full h-[460.35px] left-0 top-0 absolute rounded-[42px]"
                src="https://vti-solutions-assets.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/10/10073057/tri-tue-nhan-tao-ai-1024x576.webp"
              />
              <div className="Rectangle131  w-full h-[460.35px] left-0 top-0 absolute opacity-40 bg-zinc-900 rounded-[42px]" />
            </div>
            <div className="Frame292 w-[422.92px] h-[307.59px] left-[81.29px] top-[76px] absolute flex-col justify-start items-start gap-[45px] inline-flex">
              <div className="Component5 w-[295.87px] h-[29.59px] relative">
                <div className="Rectangle125 w-[178.76px] h-[19.72px] left-[2.47px] top-[4.93px] absolute opacity-50 bg-red-500 rounded-[69.42px] blur[56.67px]" />
                <div className="Rectangle126 w-[181.22px] h-[29.59px] left-0 top-0 absolute rounded-[69.42px] border border-red-500" />
                <div className="ProductUpdate w-[131px] h-3 left-[43.64px] top-[8.37px] absolute text-white text-sm font-normal leading-[14.17px] tracking-wide">
                  Product Update
                </div>
                <div className="Arrow w-[29.59px] h-[29.59px] left-[245.33px] top-0 absolute" />
                <div className="Ellipse45 w-[7.40px] h-[7.40px] left-[18.49px] top-[11.10px] absolute bg-red-500 rounded-full" />
              </div>
              <div className="DNetworking w-[332px] text-white text-[29px] font-bold leading-9">
                3D Networking
              </div>
              <div className="GlJsIsEngineeredToRenderEvenTheMostDetailedFeatureDenseMapsAt60FpsOnBothDesktopAndMobileDevices w-[422.92px] text-white text-[15px] font-normal leading-normal">
                GL JS is engineered to render even the most detailed,
                feature-dense maps at 60 FPS on both desktop and mobile devices.{" "}
              </div>
              <div className="Group291 w-[198px] h-[35px] relative">
                <div className="ExploreMore w-[132.78px] left-0 top-[6px] absolute text-red-500 text-xs font-semibold uppercase leading-snug tracking-wide">
                  Explore more →
                </div>
                <div className="Rectangle125 w-[198px] h-[35px] left-0 top-0 absolute rounded-[49px] border border-red-500 border-opacity-0" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SlideAuto;

import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
const PortfolioMain = () => {
  return (
    <div className=" mb-4  mt-11 w-full  h-[739px] md:h-[899px] relative">
      <div className="Rectangle137 w-full h-[700px] md:h-[855px] left-[5px] top-[44px] absolute bg-slate-800 bg-opacity-30 backdrop-blur-2xl" />
      <div className="Component5 hidden md:block md:w-[163px] h-6 md:left-[929px] md:top-[197px] absolute">
        <div className="Rectangle125 w-[182.02px] h-4 left-[-9.51px] top-[4px] absolute opacity-50 bg-red-500 rounded-[49px] blur-2xl" />
        <div className="Rectangle126 w-[163px] h-6 left-0 top-0 absolute rounded-[49px] border border-red-500" />
        <div className="SayGoodbyeToLabeling md:left-[21px] md:top-[7px] absolute text-white md:text-[10px] font-normal leading-[10px] tracking-tight">
          say goodbye to labeling
        </div>
        <div className="Arrow w-[16.30px] h-6 left-[135.15px] top-0 absolute" />
      </div>

      <div className=" md:left-[20px] md:top-[480px] absolute left-[45px] md:text-right text-white text-[25px] md:text-[60px] font-bold leading-[46px] top-[64px] md:leading-[92px]">
        The new standard <br />
        of Intelligence.
      </div>
      <Image
        width={719}
        height={400}
        alt=""
        className={`${styles.img} top-[180px] left-1 md:left-[55px] md:top-0 absolute`}
        src="https://phanmemketoanerp.com/wp-content/uploads/2017/12/ai-01.jpg"
      />
      <div className=" p-3 top-[410px] md:left-[558px] md:top-[466px] absolute md:text-right text-neutral-300 text-[10px] md:text-xl font-medium leading-[30px]">
        The days of labeling data by hand over weeks, months, or even years are
        gone. LiDAR is an end-to-end AI pipeline that automates the analysis of
        a variety of large, unstructured datasets, from security camera footage
        to geospatial imagery. You can ingest, search, and categorize your data
        - build and train models - run inference - and integrate or access LiDAR
        through cloud-hosted APIs. Integrate LiDAR into your current workflows
        today to exponentially accelerate your speed-to-insight.
      </div>
      <div className="SeeMoreExamples left-[646px] top-[806px] absolute text-center text-red-500 text-xs font-semibold uppercase leading-snug tracking-wide">
        See More Examples →
      </div>
    </div>
  );
};

export default PortfolioMain;

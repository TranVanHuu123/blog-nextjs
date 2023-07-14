import Button from "@/components/button/Button";
import Categories from "@/components/category/page";
import Inlestsky from "@/components/inlestsky/page";
import SlideAuto from "@/components/slideAuto/SlideAuto";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div>
      <div className="flex items-center gap-[100px]">
        <div className="flex flex-col gap-7 mb-3 md:gap-[50px] flex-1">
          <h1 className="font-bold text-transparent bg-li text-4xl md:text-7xl leading-[1.5] bg-gradient-to-b from-blue-900 to-blue-200 bg-clip-text text-gradient">
            DataRobot Blog
          </h1>
          <p className=" text-[11px]  md:text-2xl font-light">
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </p>
          <div className="hidden md:block">
            <Button url="/portfolio" text="See Our Works" />
          </div>
        </div>
        {/* <div className={`flex-1 ${styles.item}`}>
          <Image
            src={Hero}
            alt="hero"
            className={`object-cover ${styles.img}`}
            width="100%"
            height={500}
          />
        </div> */}
      </div>
      <div>
        <SlideAuto></SlideAuto>
      </div>
      <div>
        <Categories></Categories>
      </div>
      <div className="mt-28">
        <Inlestsky></Inlestsky>
      </div>
    </div>
  );
}

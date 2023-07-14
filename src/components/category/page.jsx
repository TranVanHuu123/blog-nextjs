"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import useSWR from "swr";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/posts", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
const Categories = () => {
  // const data = await getData();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR("/api/posts", fetcher);

  return (
    <div className={` ${styles.mainContainer} `}>
      {data?.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={`flex  mt-[100px] gap-[50px] flex-1 ${styles.container}`}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={500}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={`${styles.content} mt-3 mb-2`}>{item.content}</p>
            <span className="text-red-400">Learn more about design →</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;

"use client";
import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";

// async function getData() {
//   const res = await fetch("http://127.0.0.1:3000/api/posts", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
export default function Blog() {
  // const data = await getData();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR("/api/posts", fetcher);

  return (
    <div className={styles.mainContainer}>
      {data?.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item._id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={400}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

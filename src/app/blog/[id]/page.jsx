"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { notFound } from "next/navigation";
import useSWR from "swr";

// async function getData(id) {
//   const res = await fetch(`http://127.0.0.1:3000/api/posts/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     return notFound();
//   }

//   return res.json();
// }

// export async function generateMetadata({ params }) {
//   const post = await getData(params.id);
//   return {
//     title: post.title,
//     description: post.desc,
//   };
// }
export default function BlogPost({ _id }) {
  // const BlogPost = async ({ params }) => {
  // const data = await getData(params.id);
  // const { _id } = params;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts/${_id}`,
    fetcher
  );
  console.log(data);
  return (
    <div></div>
    // <div className={styles.container}>
    //   <div className={styles.top}>
    //     <div className={styles.info}>
    //       <h1 className={styles.title}>{data.title}</h1>
    //       <p className={styles.desc}>{data.desc}</p>
    //       <div className={styles.author}>
    //         <Image
    //           src={data.img}
    //           alt=""
    //           width={40}
    //           height={40}
    //           className={styles.avatar}
    //         />
    //         <span className={styles.username}>{data.username}</span>
    //       </div>
    //     </div>
    //     <div className={styles.imageContainer}>
    //       <Image
    //         src={data.img}
    //         alt=""
    //         width={800}
    //         height={300}
    //         className={styles.image}
    //       />
    //     </div>
    //   </div>
    //   <div className={styles.content}>
    //     <p className={styles.text}>{data.content}</p>
    //   </div>
    // </div>
  );
}

// export default BlogPost;

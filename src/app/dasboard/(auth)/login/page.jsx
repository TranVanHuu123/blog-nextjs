"use client";

import Link from "next/link";
import React from "react";
import styles from "./page.module.scss";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "authenticated") {
    router?.push("/dasboard");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>{success ? success : "Welcome Back"}</h1>
      <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2> */}

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
        {/* {error && error} */}
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
        // className={styles.button + " " + styles.google}
      >
        Login with Google
      </button>
      {/* <span className={styles.or}>- OR -</span> */}
      <Link className={styles.link} href="/dasboard/register">
        Create new account
      </Link>
      {/* <button
    onClick={() => {
      signIn("github");
    }}
    className={styles.button + " " + styles.github}
  >
    Login with Github
  </button> */}
    </div>
  );
};

export default Login;

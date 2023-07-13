"use client";
import React, { useState } from "react";
import Link from "next/link";
import DarkmodeToggle from "../darkmodeToggle/DarkmodeToggle";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dasboard",
  },
];
const Navbar = () => {
  const [opentMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <div className="md:block hidden">
        <AppMenu></AppMenu>
      </div>
      <div className=" block md:hidden">
        <div className="flex justify-between mb-8 mt-[34px]">
          <Link className="text-2xl font-bold" href="/">
            <Image
              src="/Frame 558.png"
              width={50}
              height={50}
              alt="avatr"
            ></Image>
          </Link>
          <MenuOutlined
            onClick={() => {
              setOpenMenu(true);
            }}
            style={{ color: "white", fontSize: 30 }}
          ></MenuOutlined>
        </div>
        <Drawer
          open={opentMenu}
          onClose={() => {
            setOpenMenu(false);
          }}
          bodyStyle={{ backgroundColor: "#021530" }}
        >
          <MobileMenu></MobileMenu>
        </Drawer>
      </div>
    </div>
  );
};

function AppMenu({ isInline = false }) {
  const session = useSession();
  return (
    <div className="flex items-center justify-between h-[100px]">
      <Link className="text-2xl font-bold" href="/">
        <Image src="/Frame 558.png" width={50} height={50} alt="avatr"></Image>
      </Link>
      <div className="flex items-center gap-x-6">
        <DarkmodeToggle></DarkmodeToggle>
        {links.map((link) => (
          <Link className="" key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button
            className="p-1 border-none bg-[#85a1d4] text-white cursor-pointer rounded-lg"
            onClick={signOut}
          >
            LogOut
          </button>
        )}
      </div>
    </div>
  );
}
function MobileMenu() {
  return (
    <Menu
      style={{ background: "#021530", color: "white", fontSize: 14 }}
      mode="inline"
      items={[
        {
          label: <Link href="/">Home</Link>,
          key: "/",
        },
        {
          label: <Link href="/portfolio">Portfolio</Link>,
          key: "/portfolio",
        },
        {
          label: <Link href="/blog">Blog</Link>,
          key: "/blog",
        },
        {
          label: <Link href="/about">About</Link>,
          key: "/about",
        },
        {
          label: <Link href="/contact">Contact</Link>,
          key: "/contact",
        },
        {
          label: <Link href="/dasboard">Dashboard</Link>,
          key: "/dasboard",
        },
      ]}
    ></Menu>
  );
}
export default Navbar;

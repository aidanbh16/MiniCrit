"use client";

import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "../ui/darkmode";
import { useState } from "react";

export default function Nav() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [shouldRenderNav, setShouldRenderNav] = useState(false);

  const toggleMobileNav = () => {
    if (!mobileNavOpen) {
        setShouldRenderNav(true);
        setMobileNavOpen(true);
      } else {
        setMobileNavOpen(false);
        setTimeout(() => setShouldRenderNav(false), 500);
      }
  };

  return (
    <>
      <header className="flex items-center h-15 w-full min-w-98 fixed z-51 bg-[rgba(234,235,237,1)] dark:bg-[rgba(46,23,96,1)] max-md:h-10">
        <div className="w-1/3 h-full flex justify-center max-md:w-1/2 max-md:min-w-1/2 max-md:justify-start">
          <div className="h-23 flex items-center bg-neutral-800 dark:bg-[rgba(23,23,56,1)] max-md:hidden">
            <Link href="/"><Image src="/logo/logo2.png" alt="Logo" height={15} width={200} /></Link>
          </div>
          <Link href="/"><Image src="/logo/logo1.png" alt="Logo" className="min-md:hidden dark:invert" height={10} width={150} /></Link>
        </div>
        <div className="w-1/3 h-full max-md:hidden"></div>
        <nav className="w-1/3 h-full max-md:w-1/2 max-md:min-w-1/2">
          <div className="h-full w-full flex justify-center items-center max-md:hidden">
            <Link href="/" className="hover:bg-neutral-300 dark:hover:bg-neutral-950 flex justify-center items-center w-full h-full dark:hover:*:text-[rgba(125,131,255,1)]">
                <div className="text-black dark:text-white">Home</div>
            </Link>
            <Link href="/auth/login" className="hover:bg-neutral-300 dark:hover:bg-neutral-950 flex justify-center items-center w-full h-full dark:hover:*:text-[rgba(125,131,255,1)]">
                <div className="text-black dark:text-white">Login</div>
            </Link>
            <Link href="/profile" className="hover:bg-neutral-300 dark:hover:bg-neutral-950 flex justify-center items-center w-full h-full dark:hover:*:text-[rgba(125,131,255,1)]">
                <div className="text-black dark:text-white">Profile</div>
            </Link>
            <Link href="/about" className="hover:bg-neutral-300 dark:hover:bg-neutral-950 flex justify-center items-center w-full h-full dark:hover:*:text-[rgba(125,131,255,1)]">
                <div className="text-black dark:text-white">About</div>
            </Link>
            <Link href="/updates" className="hover:bg-neutral-300 dark:hover:bg-neutral-950 flex justify-center items-center w-full h-full dark:hover:*:text-[rgba(125,131,255,1)]">
                <div className="text-black dark:text-white">Updates</div>
            </Link>
            <div className="flex justify-center items-center w-full h-full">
                <DarkModeToggle/>
            </div>
          </div>
          <div className="h-full w-full flex justify-end items-center pr-2 min-md:hidden">
            <button className="hover:cursor-pointer hover:opacity-80" onClick={toggleMobileNav}><Image src="/nav/menu1.png" className="dark:invert" alt="Menu" height={8} width={35} /></button>
          </div>
        </nav>
      </header>
      {shouldRenderNav && (
        <nav id="mobile" className={` ${mobileNavOpen ? "navSlideDown" : "navSlideUp"} h-screen w-screen fixed z-50 bg-[rgba(234,235,237,1)] dark:bg-[rgba(18,20,18,1)] backdrop-blur-sm bg-opacity-60`}>
            <div className="h-full w-full flex flex-col justify-center items-center gap-y-10">
                <Link href="/" className="text-black hover:text-[rgba(0,105,137,1)] dark:text-[rgba(50,150,255,1)] text-2xl dark:hover:text-white" onClick={toggleMobileNav}>Home</Link>
                <Link href="/auth/login" className="text-black hover:text-[rgba(0,105,137,1)] dark:text-[rgba(50,150,255,1)] text-2xl dark:hover:text-white" onClick={toggleMobileNav}>Login</Link>
                <Link href="/profile" className="text-black hover:text-[rgba(0,105,137,1)] dark:text-[rgba(50,150,255,1)] text-2xl dark:hover:text-white" onClick={toggleMobileNav}>Profile</Link>
                <Link href="/about" className="text-black hover:text-[rgba(0,105,137,1)] dark:text-[rgba(50,150,255,1)] text-2xl dark:hover:text-white" onClick={toggleMobileNav}>About</Link>
                <Link href="/updates" className="text-black hover:text-[rgba(0,105,137,1)] dark:text-[rgba(50,150,255,1)] text-2xl dark:hover:text-white" onClick={toggleMobileNav}>Updates</Link>
                <DarkModeToggle/>
            </div>
        </nav>
      )}
    </>
  );
}
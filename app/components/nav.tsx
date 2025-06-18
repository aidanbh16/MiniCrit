"use client";

import Link from "next/link";
import DarkModeToggle from "./darkmode";
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
      <header className="flex items-center h-15 w-full min-w-98 fixed z-51 bg-[rgba(234,235,237,1)] dark:bg-[rgba(18,20,18,1)] max-md:h-10">
        <div className="w-1/3 h-full flex justify-center max-md:w-1/2 max-md:min-w-1/2 max-md:justify-start">
          <div className="h-23 flex items-center bg-neutral-800 dark:bg-[rgba(50,150,255,1)] max-md:hidden">
            <Link href="/"><img src="logo/logo2.png" alt="Logo" className="h-15" /></Link>
          </div>
          <Link href="/"><img src="logo/logo1.png" alt="Logo" className="h-10 min-md:hidden dark:invert" /></Link>
        </div>
        <div className="w-1/3 h-full max-md:hidden"></div>
        <nav className="w-1/3 h-full max-md:w-1/2 max-md:min-w-1/2">
          <div className="h-full w-full flex justify-center items-center max-md:hidden">
            <div className="hover:bg-neutral-300 dark:hover:bg-neutral-950 flex justify-center items-center w-full h-full">
                <Link href="/" className="text-black dark:text-[rgba(50,150,255,1)] dark:hover:text-white">Home</Link>
            </div>
            <div className="hover:bg-neutral-300 dark:hover:bg-neutral-950 flex justify-center items-center w-full h-full">
                <Link href="/login" className="text-black dark:text-[rgba(50,150,255,1)] dark:hover:text-white">Login</Link>
            </div>
            <div className="hover:bg-neutral-300 dark:hover:bg-neutral-950 flex justify-center items-center w-full h-full">
                <Link href="/profile" className="text-black dark:text-[rgba(50,150,255,1)] dark:hover:text-white">Profile</Link>
            </div>
            <div className="hover:bg-neutral-300 dark:hover:bg-neutral-950 flex justify-center items-center w-full h-full">
                <Link href="/about" className="text-black dark:text-[rgba(50,150,255,1)] dark:hover:text-white">About</Link>
            </div>
            <div className="hover:bg-neutral-300 dark:hover:bg-neutral-950 flex justify-center items-center w-full h-full">
                <Link href="/updates" className="text-black dark:text-[rgba(50,150,255,1)] dark:hover:text-white">Updates</Link>
            </div>
            <div className="flex justify-center items-center w-full h-full">
                <DarkModeToggle/>
            </div>
          </div>
          <div className="h-full w-full flex justify-end items-center pr-2 min-md:hidden">
            <button className="hover:cursor-pointer hover:opacity-80" onClick={toggleMobileNav}><img src="nav/menu1.png" className="h-8 dark:invert" alt="Menu" /></button>
          </div>
        </nav>
      </header>
      {shouldRenderNav && (
        <nav id="mobile" className={` ${mobileNavOpen ? "navSlideDown" : "navSlideUp"} h-screen w-screen fixed z-50 bg-[rgba(234,235,237,1)] dark:bg-[rgba(18,20,18,1)] backdrop-blur-sm bg-opacity-90`}>
            <div className="h-full w-full flex flex-col justify-center items-center gap-y-10">
                <Link href="/" className="text-black hover:text-[rgba(0,105,137,1)] dark:text-[rgba(50,150,255,1)] text-2xl dark:hover:text-white" onClick={toggleMobileNav}>Home</Link>
                <Link href="/login" className="text-black hover:text-[rgba(0,105,137,1)] dark:text-[rgba(50,150,255,1)] text-2xl dark:hover:text-white" onClick={toggleMobileNav}>Login</Link>
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
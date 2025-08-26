"use client";

//Next components
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

//UI Components
import DarkModeToggle from "../ui/darkmode";

//SVG Components
import HomeIcon from "@/public/nav/home.svg"
import ProfileIcon from "@/public/nav/user.svg"
import AboutIcon from "@/public/nav/info.svg"
import UpdatesIcon from "@/public/nav/refresh.svg"

export default function Nav() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [shouldRenderNav, setShouldRenderNav] = useState(false);
  const [accountState, setAccountState] = useState(false);

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
      <header className="flex items-center h-17.5 min-md:w-3/4 min-md:min-w-200 max-md:w-screen max-md:min-w-95 fixed z-51 min-md:top-5 min-md:left-1/8 min-md:rounded-[100px] shadow-lg bg-white dark:bg-[rgba(46,23,96,1)] max-md:h-10">
        <div className="w-1/3 h-full flex justify-center max-md:w-1/2 max-md:min-w-1/2 max-md:justify-start">
          <div className="h-25 flex items-center bg-neutral-800 dark:bg-[rgba(17,17,50,1)] max-md:hidden">
            <Link href="/"><Image src="/logo/logo2.png" alt="Logo" height={15} width={200} /></Link>
          </div>
          <Link href="/"><Image src="/logo/logo1.png" alt="Logo" className="min-md:hidden dark:invert" height={10} width={150} /></Link>
        </div>
        <search className="w-1/3 h-full flex justify-center items-center bg-white max-md:hidden">
          <input type="text" placeholder="search" className="w-3/4 h-1/2 border-1 border-black rounded-4xl text-black p-3"></input>
        </search>
        <nav className="w-1/3 h-full max-md:w-1/2 max-md:min-w-1/2 flex justify-end items-center">
          <div className="h-full w-full flex max-md:hidden text-lg max-w-120">
            <Link href="/" className="hover:bg-neutral-200 dark:hover:bg-[rgba(51,28,101,1)] flex justify-center items-center w-full h-full">
              <div className="w-full h-2/3 flex flex-col justify-center items-center">
                <HomeIcon  className="w-full h-1/2"/>
                <div className="w-full h-1/2 text-black dark:text-white flex flex-col justify-center items-center">Home</div>
              </div>
            </Link>
            {accountState ? 
              <Link href="/profile" className="hover:bg-neutral-200 dark:hover:bg-[rgba(51,28,101,1)] flex justify-center items-center w-full h-full">
                <div className="w-full h-2/3 flex flex-col justify-center items-center">
                  <ProfileIcon  className="w-full h-1/2"/>
                  <div className="w-full h-1/2 text-black dark:text-white flex flex-col justify-center items-center">Profile</div>
                </div>
              </Link>
              :
              <Link href="/auth/login" className="hover:bg-neutral-200 dark:hover:bg-[rgba(51,28,101,1)] flex justify-center items-center w-full h-full">
                <div className="w-full h-2/3 flex flex-col justify-center items-center">
                  <ProfileIcon  className="w-full h-1/2"/>
                  <div className="w-full h-1/2 text-black dark:text-white flex flex-col justify-center items-center">Login</div>
                </div>
              </Link>
            }
            <Link href="/about" className="hover:bg-neutral-200 dark:hover:bg-[rgba(51,28,101,1)] flex justify-center items-center w-full h-full">
              <div className="w-full h-2/3 flex flex-col justify-center items-center">
                <AboutIcon  className="w-full h-1/2"/>
                <div className="w-full h-1/2 text-black dark:text-white flex flex-col justify-center items-center">About</div>
              </div>
            </Link>
            <Link href="/updates" className="hover:bg-neutral-200 dark:hover:bg-[rgba(51,28,101,1)] flex justify-center items-center w-full h-full">
              <div className="w-full h-2/3 flex flex-col justify-center items-center">
                <UpdatesIcon  className="w-full h-1/2"/>
                <div className="w-full h-1/2 text-black dark:text-white flex flex-col justify-center items-center">Updates</div>
              </div>
            </Link>
            <div className="flex justify-center items-center w-full h-full">
              <DarkModeToggle />
            </div>
          </div>
          <div className="h-full w-full flex justify-end items-center pr-2 min-md:hidden">
            <button className="hover:cursor-pointer hover:opacity-80" onClick={toggleMobileNav}><Image src="/nav/menu1.png" className="dark:invert" alt="Menu" height={8} width={35} /></button>
          </div>
        </nav>
      </header>
      {shouldRenderNav && (
        <nav id="mobile" className={` ${mobileNavOpen ? "navSlideDown" : "navSlideUp"} h-screen w-screen fixed z-50 bg-[rgba(234,235,237,1)] dark:bg-[rgba(23,23,56,1)] min-md:hidden`}>
            <div className="h-full w-full flex flex-col justify-center items-center gap-y-10">
                <search>
                  <input type="text" placeholder="search" className="w-full h-full border-1 border-black rounded-4xl text-black p-3 bg-white"></input>
                </search>
                <Link href="/" className="text-black hover:text-[rgba(0,127,255,1)] dark:text-white text-2xl dark:hover:text-white" onClick={toggleMobileNav}>Home</Link>
                <Link href="/auth/login" className="text-black hover:text-[rgba(0,127,255,1)] dark:text-white text-2xl dark:hover:text-white" onClick={toggleMobileNav}>Login</Link>
                <Link href="/profile" className="text-black hover:text-[rgba(0,127,255,1)] dark:text-white text-2xl dark:hover:text-white" onClick={toggleMobileNav}>Profile</Link>
                <Link href="/about" className="text-black hover:text-[rgba(0,127,255,1)] dark:text-white text-2xl dark:hover:text-white" onClick={toggleMobileNav}>About</Link>
                <Link href="/updates" className="text-black hover:text-[rgba(0,127,255,1)] dark:text-white text-2xl dark:hover:text-white" onClick={toggleMobileNav}>Updates</Link>
                <DarkModeToggle/>
            </div>
        </nav>
      )}
    </>
  );
}
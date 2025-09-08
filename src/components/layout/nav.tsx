"use client";

//Next components
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

//UI Components
import DarkModeToggle from "../ui/darkmode";

//SVG Components
import HomeIcon from "@/vectors/navIcons/home.svg"
import ProfileIcon from "@/vectors/navIcons/user.svg"
import AboutIcon from "@/vectors/navIcons/info.svg"
import UpdatesIcon from "@/vectors/navIcons/refresh.svg"
import MenuIcon from "@/vectors/navIcons/menu.svg"

//Animation Components
import animations from "~/styles/nav-animations.module.css"

export default function Nav({user}: {user: string}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [shouldRenderNav, setShouldRenderNav] = useState(false);
  const [accountState, setAccountState] = useState(Boolean(user));

  let profile;

  const userLink = `/profile/${user}`
  if (user){
    if (user.length > 12){ 
      profile = "Profile"
    }else{
      profile = user
    }
  }

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
      <header className="flex items-center h-12.5 min-md:w-2/3 min-md:min-w-200 max-md:w-screen max-md:min-w-95 fixed z-103 min-md:top-5 min-md:left-1/6 min-md:rounded-2xl shadow-lg bg-white">
        <div className="w-1/3 h-full flex justify-center max-md:w-1/2 max-md:min-w-1/2 max-md:justify-start">
          <div className="h-25 flex items-center bg-neutral-800 max-md:hidden">
            <Link href="/"><Image src="/logo/logo2.png" alt="Logo" height={15} width={200} /></Link>
          </div>
          <Link href="/"><Image src="/logo/logo1.png" alt="Logo" className="min-md:hidden dark:invert" height={10} width={150} /></Link>
        </div>
        <search className="w-1/3 h-full flex justify-center items-center bg-white max-md:hidden">
          <input type="text" placeholder="search" className="w-3/4 h-1/2 border-1 border-black text-black p-3"></input>
        </search>
        <nav className="w-1/3 h-full max-md:w-1/2 max-md:min-w-1/2 flex justify-end items-center">
          <div className="h-full w-full flex max-md:hidden text-lg max-w-120">
            <Link href="/" className="hover:bg-neutral-200 flex justify-center items-center w-full h-full">
              <div className="w-full h-2/3 flex flex-col justify-center items-center">
                <HomeIcon  className="w-full h-1/2"/>
                <div className="w-full h-1/2 text-black flex flex-col justify-center items-center text-sm">Home</div>
              </div>
            </Link>
            <Link href="/about" className="hover:bg-neutral-200 flex justify-center items-center w-full h-full">
              <div className="w-full h-2/3 flex flex-col justify-center items-center">
                <AboutIcon  className="w-full h-1/2"/>
                <div className="w-full h-1/2 text-black flex flex-col justify-center items-center text-sm">About</div>
              </div>
            </Link>
            <Link href="/updates" className="hover:bg-neutral-200 flex justify-center items-center w-full h-full">
              <div className="w-full h-2/3 flex flex-col justify-center items-center">
                <UpdatesIcon  className="w-full h-1/2"/>
                <div className="w-full h-1/2 text-black flex flex-col justify-center items-center text-sm">Updates</div>
              </div>
            </Link>
            {accountState ? 
              <Link href={userLink} className="hover:bg-neutral-200 flex justify-center items-center w-full h-full overflow-x-hidden rounded-r-2xl">
                <div className="w-full h-2/3 flex flex-col justify-center items-center">
                  <ProfileIcon  className="w-full h-1/2"/>
                  <div className="w-full h-1/2 text-black flex flex-col justify-center items-center text-sm">{profile}</div>
                </div>
              </Link>
              :
              <Link href="/auth/login" className="hover:bg-neutral-200 flex justify-center items-center w-full h-full rounded-r-2xl">
                <div className="w-full h-2/3 flex flex-col justify-center items-center">
                  <ProfileIcon  className="w-full h-1/2"/>
                  <div className="w-full h-1/2 text-black flex flex-col justify-center items-center text-sm">Login</div>
                </div>
              </Link>
            }
          </div>
          <div className="h-full w-full flex justify-end items-center pr-2 min-md:hidden">
            <button className="hover:cursor-pointer hover:opacity-80 flex justify-end items-center" onClick={toggleMobileNav}><MenuIcon className="w-1/10 h-full text-black"/></button>
          </div>
        </nav>
      </header>
      {shouldRenderNav && (
        <nav id="mobile" className={` ${mobileNavOpen ? animations.navSlideDown : animations.navSlideUp} h-screen w-screen fixed z-102 bg-[rgba(234,235,237,1)] min-md:hidden`}>
            <div className="h-full w-full flex flex-col justify-center items-center gap-y-10">
                <search>
                  <input type="text" placeholder="search" className="w-full h-full border-1 border-black rounded-4xl text-black p-3 bg-white"></input>
                </search>
                <Link href="/" className="text-black hover:text-[rgba(0,127,255,1)] text-2xl" onClick={toggleMobileNav}>Home</Link>
                {accountState ? 
                <Link href={userLink} className="text-black hover:text-[rgba(0,127,255,1)] text-2xl" onClick={toggleMobileNav}>Profile</Link>
                :
                <Link href="/auth/login" className="text-black hover:text-[rgba(0,127,255,1)] text-2xl" onClick={toggleMobileNav}>Login</Link>
                }
                <Link href="/about" className="text-black hover:text-[rgba(0,127,255,1)] text-2xl" onClick={toggleMobileNav}>About</Link>
                <Link href="/updates" className="text-black hover:text-[rgba(0,127,255,1)] text-2xl" onClick={toggleMobileNav}>Updates</Link>
                <DarkModeToggle/>
            </div>
        </nav>
      )}
    </>
  );
}

/*
            <div className="flex justify-center items-center w-1/2 h-full">
              <DarkModeToggle />
            </div>
*/
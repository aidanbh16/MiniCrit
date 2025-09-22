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

export default function Nav({user}: {user: string | undefined}) {
  const [accountState, setAccountState] = useState(Boolean(user));

  let profile;

  if (user){
    if (user.length > 12){ 
      profile = "Profile"
    }else{
      profile = user
    }
  }

  const userLink = `/profile/${user}`

  return (
    <div className="flex justify-center items-center w-full h-1/8 max-h-25 bg-[rgba(234,235,237,1)] absolute">
      <header className="flex items-center h-12.5 w-2/3 min-w-200 fixed rounded-2xl shadow-lg bg-white">
        <div className="w-1/3 h-full flex justify-center">
          <div className="h-25 flex items-center bg-neutral-800">
            <Link href="/"><Image src="/logo/logo2.png" alt="Logo" height={15} width={200} /></Link>
          </div>
        </div>
        <search className="w-1/3 h-full flex justify-center items-center bg-white">
          <input type="text" placeholder="search" className="w-3/4 h-1/2 border-1 border-black text-black p-3"></input>
        </search>
        <nav className="w-1/3 h-full flex justify-end items-center">
          <div className="h-full w-full flex text-lg max-w-120">
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
        </nav>
      </header>
    </div>
  );
}
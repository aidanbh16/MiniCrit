"use client"

import Image from "next/image"

export default function login(){
    return(
        <>
            <form action="" className="w-1/2 h-4/5 m-auto flex flex-col justify-center gap-y-2" autoComplete="off">
                <Image src="/logo/logo1.png" alt="Logo" width={500} height={500} className="mt-13 flex justify-center dark:invert"/>
                <input type="email" name="email" className="w-full h-1/6 p-1 mt-2 bg-white text-lg rounded-lg border-black border-1" placeholder="Email"></input>
                <input type="password" name="password" className="w-full h-1/6 p-1 bg-white text-lg rounded-lg border-black border-1" placeholder="Password"></input>
                <button type="submit" className="w-1/2 h-1/8 m-auto bg-[rgba(0,127,255,1)] text-white rounded-lg hover:text-[rgba(0,127,255,1)] border-1 border-[rgba(0,127,255,1)] hover:bg-white hover:cursor-pointer">Login</button>
            </form>
        </>
    )
}
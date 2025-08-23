"use client"

import Image from "next/image"
import Link from "next/link"

export default function Signup(){
    return(
        <div className="h-screen w-screen bg-[rgba(234,235,237,1)] dark:bg-[rgba(23,23,56,1)] overflow-x-hidden">
            <div className="h-full min-md:w-2/3 max-md:w-full flex items-center justify-center">
                <div className="w-3/5 min-w-150 max-w-200 h-120 flex flex-col items-center text-black border-r-1 border-r-black dark:border-r-white max-md:border-none">
                    <form action="" className="w-1/2 h-5/6 m-auto flex flex-col justify-center gap-y-2" autoComplete="off">
                        <Image src="/logo/logo1.png" alt="Logo" width={500} height={500} className="mt-13 flex justify-center dark:invert"/>
                        <input type="text" name="username" className="w-full h-1/6 p-1 mt-2 bg-white text-lg rounded-lg border-black border-1" placeholder="Username"></input>
                        <input type="email" name="email" className="w-full h-1/6 p-1 bg-white text-lg rounded-lg border-black border-1" placeholder="Email"></input>
                        <input type="password" name="password" className="w-full h-1/6 p-1 bg-white text-lg rounded-lg border-black border-1" placeholder="Password"></input>
                        <input type="password" name="confirm" className="w-full h-1/6 p-1 bg-white text-lg rounded-lg border-black border-1" placeholder="Confirm Password"></input>
                        <button type="submit" className="w-1/2 h-1/8 m-auto bg-[rgba(20,150,255,1)] text-white rounded-lg hover:text-[rgba(20,150,255,1)] border-1 border-[rgba(20,150,255,1)] hover:bg-white hover:cursor-pointer">Sign Up</button>
                    </form>
                    <div className="w-1/2 h-1/6 flex flex-col justify-center items-center text-sm dark:text-white">
                        <p>Have an account? <Link href="/auth/login" className="text-[rgba(0,127,255,1)] cursor-pointer">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

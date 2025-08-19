"use client"

import Image from "next/image"

export default function login(){
    return(
        <div className="w-3/5 min-w-150 h-120 flex flex-col items-center text-black border-r-1 border-r-black dark:border-r-white max-md:border-none">
            <form action="" className="w-1/2 h-4/5 m-auto flex flex-col justify-center gap-y-2" autoComplete="off">
                <Image src="/logo/logo1.png" alt="Logo" width={500} height={500} className="mt-13 flex justify-center dark:invert"/>
                <input type="email" name="email" className="w-full h-1/6 p-1 mt-2 bg-white text-lg rounded-lg border-black border-1" placeholder="Email"></input>
                <input type="password" name="password" className="w-full h-1/6 p-1 bg-white text-lg rounded-lg border-black border-1" placeholder="Password"></input>
                <button type="submit" className="w-1/2 h-1/8 m-auto bg-[rgba(20,150,255,1)] text-white rounded-lg hover:text-[rgba(20,150,255,1)] border-1 border-[rgba(20,150,255,1)] hover:bg-white hover:cursor-pointer">Login</button>
            </form>
            <div className="w-1/2 h-1/5 mt-2 flex flex-col items-center text-sm gap-y-2 dark:text-white">
                <p>Forgot password?</p>
                <p>Don't have an account? Sign up</p>
            </div>
        </div>
    )
}
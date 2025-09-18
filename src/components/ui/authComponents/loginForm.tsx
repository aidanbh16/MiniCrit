"use client"

import { login } from "~/src/actions/auth"

import Image from "next/image"
import Link from "next/link"

export default function LoginForm(){
    return(
        <>
            <form action={login} className="w-1/2 h-4/5 m-auto flex flex-col justify-center gap-y-2" autoComplete="off">
                <Image src="/logo/logo1.png" alt="Logo" width={500} height={500} className="mt-13 flex justify-center dark:invert"/>
                <input type="text" name="user" className="w-full h-1/8 p-1 mt-2 bg-white text-lg rounded-lg border-black border-1" placeholder="Username"></input>
                <input type="password" name="password" className="w-full h-1/8 p-1 bg-white text-lg rounded-lg border-black border-1" placeholder="Password"></input>
                <button type="submit" className="w-1/2 h-1/10 mr-auto ml-auto bg-[rgba(0,127,255,1)] text-white rounded-lg hover:text-[rgba(0,127,255,1)] border-1 border-[rgba(0,127,255,1)] hover:bg-white hover:cursor-pointer">Login</button>
            </form>
            <div className="w-1/2 h-1/5 flex flex-col items-center text-sm gap-y-2">
                <p>Forgot password?</p>
                <p>Don't have an account? <Link href="/auth/signup" className="text-[rgba(0,127,255,1)] cursor-pointer">Sign up</Link></p>
            </div>
        </>
    )
}
"use client"

import { signup } from "@/actions/auth"
import { useActionState } from "react"
import Image from "next/image"
import Link from "next/link"

type SignupFieldError = {
    error?: string | undefined,
    fields?: { 
        username: string, 
        email: string 
    } | undefined,
}

const initialState: SignupFieldError = { error: undefined, fields: undefined}

export default function SignupForm(){
    const [state, formAction] = useActionState(signup, initialState)

    return(
        <>
            <form action={formAction} className="w-1/2 h-5/6 m-auto flex flex-col justify-center gap-y-2" autoComplete="off">
                <Image src="/logo/logo1.png" alt="Logo" width={500} height={500} className="mt-13 flex justify-center dark:invert"/>
                {state.error && <div role="alert" className="text-red-600">{state.error}</div>}
                <input type="text" name="username" className="w-full h-1/6 p-1 mt-2 bg-white text-lg rounded-lg border-black border-1" defaultValue={state.fields?.username ?? ''} placeholder="Username" required></input>
                <input type="email" name="email" className="w-full h-1/6 p-1 bg-white text-lg rounded-lg border-black border-1" defaultValue={state.fields?.email ?? ''} placeholder="Email" required></input>
                <input type="password" name="password" className="w-full h-1/6 p-1 bg-white text-lg rounded-lg border-black border-1" placeholder="Password" required></input>
                <input type="password" name="confirm" className="w-full h-1/6 p-1 bg-white text-lg rounded-lg border-black border-1" placeholder="Confirm Password" required></input>
                <button type="submit" className="w-1/2 h-1/8 m-auto bg-[rgba(0,127,255,1)] text-white rounded-lg hover:text-[rgba(0,127,255,1)]      border-1 border-[rgba(20,150,255,1)] hover:bg-white hover:cursor-pointer">Sign Up</button>
            </form>
            <div className="w-1/2 h-1/6 flex flex-col justify-center items-center text-sm">
                <p>Have an account? <Link href="/auth/login" className="text-[rgba(0,127,255,1)] cursor-pointer">Login</Link></p>
            </div>
        </>
    )
}
"use client"

import Image from "next/image"
import Link from "next/link"
import { login } from "~/src/actions/auth"
import { useActionState } from "react"

type LoginFieldError = {
    error?: string | undefined,
    username?: string | undefined,
}

const initialState: LoginFieldError = { error: undefined, username: undefined,}

export default function HomeLogin(){
    const [state, formAction] = useActionState(login, initialState)

    return(
        <div className="w-9/10 bg-white rounded-2xl shadow-lg p-3 flex flex-col items-center gap-y-3">
            <form action={formAction} className="flex flex-col justify-center items-left gap-y-2" autoComplete="off">
                <Image src="/logo/logo1.png" alt="Logo" width={512} height={512} className="flex justify-center dark:invert"/>
                {state.error && <div role="alert" className="text-red-600">{state.error}</div>}
                <input type="text" name="user" className="w-full max-w-100 p-1 bg-white text-lg rounded-lg border-black border-1" placeholder="Username" defaultValue={state.username}></input>
                <input type="password" name="password" className="w-full max-w-100 p-1 bg-white text-lg rounded-lg border-black border-1" placeholder="Password"></input>
                <button type="submit" className="bg-[rgba(0,127,255,1)] text-white rounded-lg hover:text-[rgba(0,127,255,1)] border-2 border-[rgba(0,127,255,1)] hover:bg-white hover:cursor-pointer px-2">Login</button>
            </form>
            <div className="flex flex-col items-center justify-center text-sm gap-y-2">
                <p>Want to post? Sign in</p>
                <p>Don't have an account? <Link href="/auth/signup" className="text-[rgba(0,127,255,1)] cursor-pointer">Sign up</Link></p>
            </div>
        </div>
    )
}
export const runtime = 'nodejs'
import { login } from "~/src/actions/auth"

import Image from "next/image"
import Link from "next/link"

export default function Login(){
    return(
        <div className="h-screen w-screen bg-[rgba(234,235,237,1)] overflow-x-hidden">
            <div className="h-full min-md:w-2/3 max-md:w-full flex items-center justify-center">
                <div className="w-3/5 min-w-150 max-w-200 h-120 flex flex-col items-center text-black border-r-1 border-r-black max-md:border-none">
                    <form action={login} className="w-1/2 h-4/5 m-auto flex flex-col justify-center gap-y-2" autoComplete="off">
                        <Image src="/logo/logo1.png" alt="Logo" width={500} height={500} className="mt-13 flex justify-center dark:invert"/>
                        <input type="text" name="user" className="w-full h-1/6 p-1 mt-2 bg-white text-lg rounded-lg border-black border-1" placeholder="Username"></input>
                        <input type="password" name="password" className="w-full h-1/6 p-1 bg-white text-lg rounded-lg border-black border-1" placeholder="Password"></input>
                        <button type="submit" className="w-1/2 h-1/8 m-auto bg-[rgba(0,127,255,1)] text-white rounded-lg hover:text-[rgba(0,127,255,1)] border-1 border-[rgba(0,127,255,1)] hover:bg-white hover:cursor-pointer">Login</button>
                    </form>
                    <div className="w-1/2 h-1/5 mt-2 flex flex-col items-center text-sm gap-y-2">
                        <p>Forgot password?</p>
                        <p>Don't have an account? <Link href="/auth/signup" className="text-[rgba(0,127,255,1)] cursor-pointer">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client"

import Login from "./login/login";
import SignUp from "./signup/signup";
import { useState } from "react";

export default function login(){
    const [authState, setAuthState] = useState(true);
    
    return(
        <div className="h-screen w-screen bg-[rgba(245,245,245,1)] dark:bg-[rgba(23,23,56,1)] overflow-hidden">
            <div className="h-full min-md:w-2/3 max-md:w-full flex items-center justify-center">
                {authState ? (
                    <div className="w-3/5 min-w-150 h-120 flex flex-col items-center text-black border-r-1 border-r-black dark:border-r-white max-md:border-none">
                        <Login/>
                        <div className="w-1/2 h-1/5 mt-2 flex flex-col items-center text-sm gap-y-2 dark:text-white">
                            <p>Forgot password?</p>
                            <p>Don't have an account? <span onClick={() => setAuthState(false)} className="text-[rgba(0,127,255,1)] cursor-pointer">Sign up</span></p>
                        </div>
                    </div>
                ):(
                    <div className="w-3/5 min-w-150 h-120 flex flex-col items-center text-black border-r-1 border-r-black dark:border-r-white max-md:border-none">
                        <SignUp/>
                        <div className="w-1/2 h-1/6 flex flex-col justify-center items-center text-sm dark:text-white">
                            <p>Have an account? <span onClick={() => setAuthState(true)} className="text-[rgba(0,127,255,1)] cursor-pointer">Login</span></p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


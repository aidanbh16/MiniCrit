'use server'
export const runtime = 'nodejs';

import { compare } from "@/lib/compare"
import { redirect } from "next/navigation";
import { hash } from "@/lib/hash"
import { createUser } from "@/lib/users"

export async function login(formData: FormData) {
    const username = String(formData.get("user"));
    const pass = String(formData.get("password"));

    let check = false;
    try {
        check = await compare(username, pass)
    } catch (error) {
        console.log("Error: ", error);
    }

    if(check !== true){
        redirect("/auth/login")
    }else{
        redirect("/")
    }
}

export async function signup(formData: FormData) {
    const user = String(formData.get("username"))
    const email = String(formData.get("email"))
    const pass = String(formData.get("password"))
    const conf = String(formData.get("confirm"))

    if(pass !== conf){
        redirect("/auth/signup")
    }

    try {
        const hashedPass = await hash(pass)
        await createUser(user, email, hashedPass)
    } catch (error) {
        console.log("Error: ", error)
    }

    redirect("/auth/login")
}

'use server'

import { compare } from "@/lib/compare"
import { redirect } from "next/navigation";
import { hash } from "@/lib/hash"
import { createUser } from "@/lib/users"

export async function login(formData: FormData) {
    try {
        const username = String(formData.get("user"));
        const pass = String(formData.get("password"));

        const check = await compare(username, pass)
        if(check !== true){
            redirect("/auth/login")
        }

        redirect("/")
    } catch (error) {
        console.log("Error: ", error);
    }
}

export async function signup(formData: FormData) {
    try {
        const user = String(formData.get("username"))
        const email = String(formData.get("email"))
        const pass = String(formData.get("password"))
        const conf = String(formData.get("confirm"))

        if(pass !== conf){
            redirect("/auth/signup")
        }
    
        const hashedPass = await hash(pass)
        await createUser(user, email, hashedPass)

        redirect("/auth/login")
    } catch (error) {
        console.log("Error: ", error)
    }
}

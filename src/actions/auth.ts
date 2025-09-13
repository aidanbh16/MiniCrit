'use server'

import { compare } from "@/lib/bcrypt"
import { redirect } from "next/navigation";
import { hash } from "@/lib/hash"
import { createUser } from "@/lib/user"
import { generateToken } from "@/lib/token";

export async function login(formData: FormData) {
    const user = {
        id: null,
        username: String(formData.get("user")),
        password: String(formData.get("password"))
    }

    try {
        user.id = await compare(user.username, user.password)
        console.log(user.id, " arrived safely")
        const token = await generateToken(user.id, user.username)
        console.log(token)
        redirect("/")
    } catch (error) {
        console.log("Error: ", error);
        redirect("/auth/login")
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
        redirect("/auth/login")
    } catch (error) {
        console.log("Error: ", error)
        redirect("/auth/signup")
    }
}
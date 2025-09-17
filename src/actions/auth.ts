'use server'

import { compare } from "@/lib/bcrypt"
import { redirect } from "next/navigation";
import { hash } from "@/lib/hash"
import { createUser } from "@/lib/user"
import { generateToken } from "@/lib/token";
import { signupTests } from "~/tests/signup.test";

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

type FieldError = {
    error?: string,
    fields?: { 
        username: string, 
        email: string,
    },
}

export async function signup(prev: FieldError, formData: FormData): Promise<FieldError | never> {
    const user = {
        username: String(formData.get("username")),
        email: String(formData.get("email")),
        password: String(formData.get("password")),
        confirm: String(formData.get("confirm")),
    };

    const result = await signupTests(user)
    if (result != Boolean){
        return result as FieldError
    }

    const hashedPass = await hash(user.password);
    await createUser(user.username, user.email, hashedPass);
    redirect("/auth/login");
}
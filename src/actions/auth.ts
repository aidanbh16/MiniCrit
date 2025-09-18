'use server'

import { compare } from "@/lib/bcrypt"
import { redirect } from "next/navigation";
import { hash } from "@/lib/hash"
import { createUser } from "@/lib/user"
import { generateToken } from "@/lib/token";
import { signupTests } from "~/tests/signup.test";

type LoginFieldError = {
    error?: string,
    fields?: { 
        username: string, 
        password: string,
    },
}

export async function login(prev: LoginFieldError, formData: FormData): Promise<LoginFieldError | never> {
    const user = {
        id: null,
        username: String(formData.get("user")),
        password: String(formData.get("password"))
    }

    try {
        const result = await compare(user.username, user.password)
        const token = await generateToken(user.id, user.username)
        console.log(token)
        redirect("/")
    } catch (error) {
        return {error: Result.error, fields{user.username, user.password}}
    }
}

type SignupFieldError = {
    error?: string,
    fields?: { 
        username: string, 
        email: string,
    },
}

export async function signup(prev: SignupFieldError, formData: FormData): Promise<SignupFieldError | never> {
    const user = {
        username: String(formData.get("username")),
        email: String(formData.get("email")),
        password: String(formData.get("password")),
        confirm: String(formData.get("confirm")),
    };

    const result = await signupTests(user)
    if (result !== true){
        return result as SignupFieldError
    }

    const hashedPass = await hash(user.password);
    await createUser(user.username, user.email, hashedPass);
    redirect("/auth/login");
}
'use server'

import { hash, compare } from "@/lib/bcrypt"
import { redirect } from "next/navigation";
import { createUser } from "@/lib/user"
import { generateSession } from "~/src/lib/session";
import { signupTests } from "~/tests/signup.test";

type LoginFieldError = {
    error?: string,
    username?: string,
}

export async function login(prev: LoginFieldError, formData: FormData): Promise<LoginFieldError | never> {
    const user = {
        id: "null",
        username: String(formData.get("user")),
        password: String(formData.get("password"))
    }
    
    try {
        const result = await compare(user.username, user.password)
        if(typeof result !== "string"){
            throw result as LoginFieldError
        }
        user.id = result
        await generateSession(user.id, user.username)
    } catch (err: any) {
        return {error: err.error, username: err.username}
    }
    redirect("/")
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
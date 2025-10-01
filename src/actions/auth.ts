'use server'

import { hash, compare } from "@/lib/bcrypt"
import { redirect } from "next/navigation";
import { createUser } from "@/lib/user"
import { generateSession, deleteSession } from "@/lib/session";
import { signupTests } from "~/tests/signup.test";

type LoginFieldError = {
    error?: string,
    username?: string,
}

export async function login(prev: LoginFieldError, formData: FormData): Promise<LoginFieldError | never> {
    const user = {
        id: "",
        username: String(formData.get("user")).toLowerCase(),
        password: String(formData.get("password"))
    }

    try {
        const result = await compare(user.username, user.password)
        if(typeof result !== "string"){
            throw result as LoginFieldError
        }
        user.id = result
        await generateSession(user.id)
        console.log("generated")
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
    const userUsername = String(formData.get("username")).toLowerCase()
    const userEmail = String(formData.get("email")).toLowerCase()
    const userPassword = String(formData.get("password"))
    const userConfirm = String(formData.get("confirm"))
    const user = {
        username: userUsername,
        email: userEmail,
        password: userPassword,
        confirm: userConfirm,
    };

    const result = await signupTests(user)
    if (result !== true){
        return result as SignupFieldError
    }

    const hashedPass = await hash(user.password);
    await createUser(userUsername, userEmail, hashedPass)
    redirect("/auth/login");
}

export async function signout(){
    await deleteSession()
    redirect("/")
}

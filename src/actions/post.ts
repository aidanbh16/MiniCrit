'use server'

import { cookies } from "next/headers"
import { decrypt } from "@/lib/session"
import { redirect } from "next/navigation"
import { createPost } from "../lib/post"
import { postTests } from "~/tests/posts.test"
import { uploadS3 } from "../lib/s3"

type PostFieldError = {
    error?: string,
    title?: string,
    text?: string,
}

export async function authPost(prev: PostFieldError, formData: FormData): Promise<PostFieldError | never> {
    try{
        // Session check
        const cookie = await cookies()
        const value = await decrypt(cookie.get("session")?.value)
        if(!value){
            throw {error: "How did you even get this form to render...", title: "", text: ""}
        }


        // Initialize post object
        const post = {
            userID: String(value.id),
            title: String(formData.get("title")),
            text: String(formData.get("text")),
            tags: formData.getAll("tags").map(String),
            file: formData.get("file") as File,
            media_key: "",
        }

        // Test post
        const test = await postTests(post)
        if(typeof test !== "boolean"){
            throw test
        }

        // Upload file to S3
        if(post.file.name !== "undefined"){
            try{
                post.media_key = await uploadS3(post)
            }catch{
                throw {error: "Failed to create post", title: post.title, text: post.text}
            }
        }

        // Upload post to database
        await createPost(post)
    } catch(err: any){
        return err
    }
    redirect("/")
}
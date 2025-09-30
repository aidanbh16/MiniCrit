import "server-only"
import pool from "@/lib/db"

type Post = {
    userID: string,
    title: string,
    text: string,
    tags: string[],
    media_key: string,
}

type PostFieldError = {
    error?: string,
    title?: string | undefined,
    text?: string | undefined,
}

export async function createPost(post: Post){
    try{
        await pool.query('INSERT INTO posts (userID, title_text, post_text, tags, media_key) VALUES ($1,$2,$3, $4::text[], $5) RETURNING id', [post.userID, post.title, post.text, post.tags, post.media_key]);
    } catch{
        return {error: "Failed to create post"}
    }
}
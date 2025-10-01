import "server-only"
import pool from "@/lib/db"

type Post = {
    userID: string,
    title: string,
    text: string,
    tags: string[],
    media_key: string,
}

export async function createPost(post: Post){
    try{
        await pool.query('INSERT INTO posts (userID, title_text, post_text, tags, media_key) VALUES ($1,$2,$3, $4::text[], $5) RETURNING id', [post.userID, post.title, post.text, post.tags, post.media_key]);
    } catch{
        return {error: "Failed to create post"}
    }
}

export async function postAmount(){
    const amount = await pool.query('SELECT COUNT(*) FROM posts')
    return amount
}

export async function latest10Posts(){
    const posts = await pool.query('SELECT * FROM posts ORDER BY created_at DESC LIMIT 10')
    return posts.rows
}


// WHERE id != ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
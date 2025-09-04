import "server-only"
import pool from "@/lib/db"

export async function createUser(username: string, email: string, hash: string) {
  return pool.query("INSERT INTO users (username, email, password_hash) VALUES ($1,$2,$3) RETURNING id", [username, email, hash]);
}

export async function selectUser(id: string){
  if(id == "" || null){
    return null
  }
  const { rows } = await pool.query("SELECT username FROM users WHERE id = $1", [id])
  const user = rows[0].username
  return user
}
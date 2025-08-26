import pool from "@/lib/db"

export async function createUser(username: string, email: string, hash: string) {
  return pool.query("INSERT INTO users (username, email, password_hash) VALUES ($1,$2,$3) RETURNING id", [username, email, hash]);
}
import "server-only"
import pool from "@/lib/db"
import { JWTPayload } from "jose";

export async function createUser(username: string, email: string, hash: string) {
  const check = await pool.query('INSERT INTO users (username, email, password_hash) VALUES ($1,$2,$3) RETURNING id', [username, email, hash]);
  return check
}

export async function selectUserByID(id?: string){
  try{
    const { rows } = await pool.query('SELECT username FROM users WHERE id = ($1)', [id])
    return rows[0].username
  } catch (err){
    return undefined;
  }
}
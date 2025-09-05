import "server-only"
import bcrypt from "bcrypt"
import pool from "@/lib/db"
export const runtime = 'nodejs'

export async function compare(user: string, pass: string): Promise<boolean> {
    const { rows } = await pool.query('SELECT password_hash FROM users WHERE username=$1', [user]);
    const hash = rows[0].password_hash
    return bcrypt.compare(pass, hash);
}
import "server-only"

import bcrypt from "bcrypt";
import pool from "@/lib/db"

type LoginFieldError = {
    error?: string,
    username?: string,
}

export async function hash(pass: string){
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hash(pass, salt);
}

export async function compare(user: string, pass: string): Promise<string | LoginFieldError>{
    try{
        const result = await pool.query('SELECT pass_hash FROM users WHERE username = ($1)', [user]);
        const compare = await bcrypt.compare(pass, result.rows[0].pass_hash)
        if(compare){
            const userID = await pool.query('SELECT id FROM users WHERE username = ($1)', [user]);
            return userID.rows[0].id
        }else{
            throw {error: "Invalid password", username: user} as LoginFieldError
        }
    } catch(error: any){
        return error
    }
}
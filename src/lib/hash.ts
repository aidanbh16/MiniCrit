import "server-only"
import bcrypt from "bcrypt";
export const runtime = 'nodejs';

export async function hash(pass: string){
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hash(pass, salt);
}
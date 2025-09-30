import 'server-only'

import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const key = new TextEncoder().encode(process.env.SESSION_ACCESS_KEY)

type SessionPayload = {
    id: string,
    expiration: Date,
}

export async function generateSession(userID: string){
    const expires = new Date(Date.now() + 60 * 60 * 1000)
    const session = await encrypt({ id: userID, expiration: expires})
    const cookie = await cookies();
    cookie.set("session", session, {
        httpOnly: true,
        secure: true,
        expires: expires,
    })
}

export async function encrypt(payload: SessionPayload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(key)
}

export async function decrypt(session: string | undefined = ""): Promise<JWTPayload | undefined>{
    try{
        const { payload } = await jwtVerify(session, key, {algorithms: ["HS256"]})
        return payload
    }catch(error){
        return undefined
    }
}

export async function deleteSession(){
    const cookie = await cookies()
    cookie.delete("session")
}
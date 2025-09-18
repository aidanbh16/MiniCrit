import 'server-only'

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const key = new TextEncoder().encode(process.env.ACCESS_KEY)

type SessionPayload = {
    ID: string,
    expiration: Date,
}

export async function generateSession(userID: string, user?: String){
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const session = await encrypt({ ID: userID, expiration: expires})
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
        .setExpirationTime("7d")
        .sign(key)
}

export async function decrypt(session: string | undefined = ""){
    try{
        const { payload } = await jwtVerify(session, key, {algorithms: ["HS256"]})
        return payload
    }catch(error){
        console.log("Failed verify")
    }
}
import { NextRequest, NextResponse } from "next/server"
import { decrypt } from "@/lib/session"

const publicRoutes = ["/auth/login", "/auth/signup"]

export async function middleware(req: NextRequest){

    const path = req.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)

    const cookie = req.cookies.get("session")?.value
    const session = await decrypt(cookie)
    
    if(isPublicRoute && session?.id){
        return NextResponse.redirect(new URL("/", req.nextUrl))
    }

    return NextResponse.next()
} 
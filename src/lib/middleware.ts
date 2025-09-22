import "server-only"
import { NextRequest } from "next/server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { decrypt } from "@/lib/session"

const publicRoutes = ["/auth/login", "/auth/signup"]

export default async function middleware(req: NextRequest){
    const path = req.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)

    const cookie = cookies()
    const session = await decrypt((await cookie).get("session")?.value)

    if(isPublicRoute && session?.userID){
        redirect(path)
    }
}
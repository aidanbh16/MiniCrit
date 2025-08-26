import { hash } from "@/lib/hash"
import { createUser } from "@/lib/users"
import { redirect } from "next/navigation"

export const runtime = "nodejs";

export async function POST(req: Request) {
    try {
        const data = await req.formData();
        const user = String(data.get("username"))
        const email = String(data.get("email"))
        const pass = String(data.get("password"))
        const conf = String(data.get("confirm"))

        if(pass !== conf){
            return Response.redirect(new URL("/auth/signup", req.url));
        }
    
        const hashedPass = await hash(pass)
        await createUser(user, email, hashedPass)

        return Response.redirect(new URL("/auth/login", req.url));
    } catch (error) {
        console.log("Error: ", error)
    }
}

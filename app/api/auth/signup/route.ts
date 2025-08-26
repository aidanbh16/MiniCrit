import pool from "@/lib/db";
import {redirect} from "next/navigation"

export const runtime = "nodejs";

export async function POST(req: Request) {
    const data = await req.formData();
    console.log(data.get("username"))

    return(
        redirect("/auth/login")
    )
}

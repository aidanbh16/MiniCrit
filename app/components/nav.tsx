import Link from "next/link"

export default function nav(){
    return(
        <nav className="flex gap-x-5 justify-center h-10 bg-blue-950">
            <Link href="/">Home</Link>
            <Link href="/admin">Admin</Link>
        </nav>
    )
}
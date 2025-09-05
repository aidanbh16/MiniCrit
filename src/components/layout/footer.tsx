"use client"

import { usePathname } from "next/navigation";

export default function Footer() {  
    const path = usePathname()
    if (path !== "/"){
      return (
        <>
          <div className="h-30 w-screen bg-neutral-800">
            
          </div>
        </>
      )
    }
}
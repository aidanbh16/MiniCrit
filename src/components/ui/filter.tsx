"use client"

import animations from "~/styles/filter-animations.module.css"

type FilterProps = {filterState: boolean}

export default function Filter({filterState}: FilterProps){
    return(
        <div className="absolute h-screen w-screen flex justify-center items-center backdrop-blur-xs z-100">
            <div className={`${filterState ? animations.filterSlideDown : null} w-1/6 h-80 bg-white border-1 border-black shadow-[1px_1px_1px_1px_rgb(0,0,0,1)] relative -top-40`}>
            
            </div>
        </div>
    )
}
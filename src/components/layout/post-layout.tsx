"use client"

import Post from "../ui/post"
import Filter from "../ui/filter"
import QuickFilter from "../ui/quick-filter"

import { useState } from "react"

export default function PostLayout(){
    const [filterState, setFilterState] = useState(false)

    function toggleFilter(){
        setFilterState(!filterState)
    }

    return(
        <div className="h-3/4 w-full flex flex-col justify-center items-center">
            <div className="h-1/12 w-1/6 relative flex flex-col justify-center items-center">
                <QuickFilter toggleFilter={toggleFilter}/>
            </div>
            <div className="h-11/12 w-2/3 grid grid-cols-3 grid-rows-3 gap-5">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            {filterState ? <Filter filterState={filterState}/> : null}
        </div>
    )
  }
"use client"

import QuickFilter from "./components/layout/quickFilter";
import QuickUpdates from "./components/layout/quickUpdates";
import PostLayout from "./components/layout/postLayout";

export default function Home() {
  return (
      <div className="h-screen w-screen bg-[rgba(234,235,237,1)] dark:bg-[rgba(23,23,56,1)] overflow-x-hidden flex items-center justify-center text-black">
        <div className="h-3/4 w-full flex flex-col justify-center items-center gap-y-2 relative bottom-4">
          <QuickFilter />
          <PostLayout />
        </div>
      </div>
  );
}

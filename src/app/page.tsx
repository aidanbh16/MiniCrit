"use client"

import PostLayout from "../components/layout/post-layout";

export default function Home() {
  return (
      <div className="h-screen w-screen bg-[rgba(234,235,237,1)] overflow-x-hidden flex items-center justify-center text-black">
        <PostLayout />
      </div>
  );
}

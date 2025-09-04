"use client"

import PostLayout from "../components/layout/post-layout";

export default function Home() {
  return (
      <div className="h-screen w-screen bg-gradient-to-b from-neutral-100 to-neutral-400 overflow-x-hidden flex items-center justify-center text-black">
        <PostLayout />
      </div>
  );
}

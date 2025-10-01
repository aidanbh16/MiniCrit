export const runtime = 'nodejs'

import HomeServer from "~/src/components/server/homeServer";
import PostServer from "../components/server/postServer";


export default function Home() {
  return (
      <div className="h-screen w-screen bg-[rgba(234,235,237,1)] overflow-x-hidden flex items-center justify-center text-black">
        <div className="w-2/3 min-w-250 h-3/4 flex justify-center items-center">
          <div className="w-1/4 min-w-1/4 h-9/10 flex flex-col items-center gap-y-4">
            <HomeServer />
          </div>
          <div className="w-2/4 min-w-2/4 h-9/10 flex flex-col items-center gap-y-4">
            <PostServer />
          </div>
          <div className="w-1/4 min-w-1/4 h-full">

          </div>
        </div>
      </div>
  );
}

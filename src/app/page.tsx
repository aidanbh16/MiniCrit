export const runtime = 'nodejs'

import HomeProfileServer from "@/components/server/homeProfileServer";
import HomeCreatePostServer from "../components/server/homeCreatePostServer";

export default function Home() {
  return (
      <div className="h-screen w-screen bg-[rgba(234,235,237,1)] overflow-x-hidden flex items-center justify-center text-black">
        <div className="w-2/3 min-w-250 h-3/4 flex justify-center items-center">
          <div className="w-1/4 min-w-1/4 h-9/10 flex flex-col items-center gap-y-4">
            <HomeProfileServer />
            <HomeCreatePostServer />
          </div>
          <div className="w-3/4 min-w-3/4 h-full bg-blue-100">

          </div>
        </div>
      </div>
  );
}

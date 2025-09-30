export const runtime = 'nodejs'

import Image from "next/image";
import { redirect } from "next/navigation";
import { selectProfileByUser, selectUserByUser } from "~/src/lib/user";

export default async function Profile({params}: {params: Promise<{ username: string }>}) {
    const userParams = await params;
    const userExists = await selectUserByUser(userParams.username)
    if(!userExists){redirect("/error/profile_not_found")}
    const userValues = await selectProfileByUser(userParams.username)
    const user = {
      username: userValues[0].username,
      pfp: userValues[0].pfp_key,
      bio: userValues[0].bio
    }



    return (
      <div className="h-screen w-screen overflow-x-hidden flex justify-center items-center bg-[rgba(234,235,237,1)]">
        <div className="h-2/3 w-2/3 min-w-200 flex items-center justify-center">
          <div className="h-full w-1/3 flex flex-col items-center justify-center">
            <div className="h-full w-full flex items-center justify-center">
              <div className="h-full w-full flex items-center justify-center">
                <div className="h-70 bg-white rounded-full border-3 border-white overflow-hidden bg-blue">
                  <Image src="/profile/placeholder.png" alt="profile" width={180} height={180} className="w-full h-full flex justify-center items-center"/>
                </div>
              </div>
            </div>
            <div className="h-0.5 w-2/3 bg-black"/>
            <div className="h-full w-full flex items-center justify-center">
              <div className="h-full w-2/3 flex justify-left text-xl">
                <ul className="text-black space-y-5 mt-5 font-thin">
                  <li>{user.username}</li>
                  <li>{user.bio}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-4/5 w-0.5 bg-black"/>
          <div className="h-full w-2/3 flex items-center justify-center bg-blue-100">
          
          </div>
        </div>
      </div>
    );
}
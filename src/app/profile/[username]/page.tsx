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
      <div className="h-screen w-screen bg-[#c3cee5] overflow-x-hidden flex justify-center items-center">
        <div className="h-2/3 w-2/3 min-w-200 flex items-center justify-center">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="h-full w-full flex items-center justify-center">
              <div className="h-full w-1/2 flex items-center justify-center bg-blue-100">
                <div className="h-9/10 w-9/10 bg-white rounded-full border-4 border-white overflow-hidden">
                  <Image src="/profile/placeholder.png" alt="profile" width={200} height={200} className="w-full h-full flex justify-center items-center"/>
                </div>
              </div>
              <div className="h-full w-1/2 bg-green-100">
                <ul className="text-black">
                  <li>{user.username}</li>
                  <li>{user.bio}</li>
                  <li>Username</li>
                  <li>Username</li>
                </ul>
              </div>
            </div>
            <div className="h-full w-full flex items-center justify-center bg-red-100">
            
            </div>
          </div>
          <div className="h-full w-full flex items-center justify-center bg-blue-100">
          
          </div>
        </div>
      </div>
    );
}
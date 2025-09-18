export const runtime = 'nodejs'

import SignupForm from "~/src/components/ui/authComponents/signupForm";

export default function Signup(){
    return(
        <div className="h-screen w-screen bg-[rgba(234,235,237,1)] flex items-center justify-center overflow-x-hidden">
            <div className="h-full w-3/4 min-w-200 flex items-center">
                <div className="w-3/5 h-140 flex flex-col items-center text-black border-r-1 border-r-black max-md:border-none">
                    <SignupForm />
                </div>
                <div className="w-2/5 h-140 flex flex-col items-center text-black">
                </div>
            </div>
        </div>
    );
}

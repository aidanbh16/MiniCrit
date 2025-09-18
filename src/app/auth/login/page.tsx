export const runtime = 'nodejs'

import LoginForm from "~/src/components/ui/authComponents/loginForm";

export default function Login(){
    return(
        <div className="h-screen w-screen bg-[rgba(234,235,237,1)] flex items-center justify-center overflow-x-hidden">
            <div className="h-full w-3/4 min-w-200 flex items-center">
                <div className="w-3/5 h-140 flex flex-col items-center text-black border-r-1 border-r-black max-md:border-none">
                    <LoginForm />
                </div>
                <div className="w-2/5 h-140 flex flex-col items-center text-black">
                </div>
            </div>
        </div>
    );
}

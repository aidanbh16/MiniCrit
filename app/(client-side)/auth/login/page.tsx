import Login from "./login";

export default function login(){
    return(
        <div className="bg-[rgba(245,245,245,1)] dark:bg-[rgba(23,23,56,1)]">
            <div className="max-md:pt-10 h-screen w-1/2 flex items-center justify-center">
                <Login />
            </div>
        </div>
    );
}


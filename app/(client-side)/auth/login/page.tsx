import Login from "./login";

export default function login(){
    return(
        <div className="h-screen w-screen bg-[rgba(245,245,245,1)] dark:bg-[rgba(23,23,56,1)] overflow-hidden">
            <div className="h-full min-md:w-2/3 max-md:w-full flex items-center justify-center">
                <Login />
            </div>
        </div>
    );
}


export default function login(){
    return(
        <div className="w-2/3 min-w-100 h-100 flex justify-center shadow-2xl rounded-[100px] bg-[rgba(255,255,255,1)] dark:bg-[rgba(17,17,50,1)] text-black">
            <form action="" className="w-1/2 m-auto flex flex-col justify-center gap-y-2">
                <h1 className="w-full h-1/5 text-6xl dark:text-white">LOGIN</h1>
                <label className="w-full h-1/5 mt-5 text-4xl dark:text-white">Email</label>
                <input type="email" className="w-full h-1/5 p-1 bg-white text-lg rounded-lg border-black border-1"></input>
                <label className="w-full h-1/5 mt-5 text-4xl dark:text-white">Password</label>
                <input type="password" className="w-full h-1/5 p-1 bg-white text-lg rounded-lg border-black border-1"></input>
            </form>
        </div>
    )
}
export default function login(){
    return(
        <form action="" className="w-2/3 h-2/3 border-1 border-black bg-[rgb(18, 20, 18)] text-black dark:bg-[rgba(18,20,38,1)]">
            <h1 className="dark:text-white">LOGIN</h1>
            <label className="dark:text-white">Email</label>
            <input type="email" className="border-black bg-amber-400"></input>
            <label className="dark:text-white">Password</label>
            <input type="password" className="border-black bg-amber-400"></input>
        </form>
    )
}
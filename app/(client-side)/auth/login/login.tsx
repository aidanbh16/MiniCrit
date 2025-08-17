export default function login(){
    return(
        <form action="" className="w-2/3 h-2/3 border-1 border-black bg-[rgb(18, 20, 18)] text-black">
            <h1>LOGIN</h1>
            <label>Email</label>
            <input type="email" className="border-black bg-amber-400"></input>
            <label>Password</label>
            <input type="password" className="border-black bg-amber-400"></input>
        </form>
    )
}
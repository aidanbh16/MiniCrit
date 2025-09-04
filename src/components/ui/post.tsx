
export default function Post(){
    return(
        <div className="w-full h-full hover:scale-101 hover:cursor-pointer">
            <div className="w-fit h-1/10 max-w-1/2 pl-2 pr-2 flex items-center rounded-t-lg bg-white border-r-1 border-l-1 border-t-1 border-black overflow-x-scroll overflow-y-hidden no-scrollbar">
                <h1 className="text-black">Username</h1>
            </div>
            <div className="w-full h-9/10 bg-white border-black border-1 border-r-3 border-b-3 shadow-lg">
            </div>
        </div>
    )
}
"use client"

export default function CreatePost(){
    return(
        <div className="w-9/10 bg-white rounded-2xl shadow-lg p-3 flex flex-col items-start gap-y-3">
            <h1 className="w-full text-lg">Create Post</h1>
            <form className="w-full flex flex-col items-start gap-y-3">
                <fieldset className="w-full flex flex-col justify-center">
                    <input name="title" type="text" className="w-full px-1 border-black border-1" placeholder="Title" required></input>
                </fieldset>
                <fieldset className="w-full flex flex-col justify-center">
                    <textarea name="text" className="w-full h-40 min-h-40 px-1 border-black border-1 overflow-y-scroll" placeholder="Text" required></textarea>
                </fieldset>
                <fieldset className="w-full max-h-40 flex flex-wrap justify-start overflow-y-scroll gap-1 text-sm text-white">
                    <label className="tile rounded-lg bg-blue-500 border-0.5 border-blue-500 px-2">
                        <input name="tags" value="gym" type="checkbox" className="sr-only"></input>
                        <span className="select-none">Gym</span>
                    </label>
                    <label className="tile rounded-lg bg-blue-500 border-0.5 border-blue-500 px-2">
                        <input name="tags" value="coding" type="checkbox" className="sr-only"></input>
                        <span className="select-none">Coding</span>
                    </label>
                    <label className="tile rounded-lg bg-blue-500 border-0.5 border-blue-500 px-2">
                        <input name="tags" value="math" type="checkbox" className="sr-only"></input>
                        <span className="select-none">Math</span>
                    </label>
                    <label className="tile rounded-lg bg-blue-500 border-0.5 border-blue-500 px-2">
                        <input name="tags" value="art" type="checkbox" className="sr-only"></input>
                        <span className="select-none">Art</span>
                    </label>
                    <label className="tile rounded-lg bg-blue-500 border-0.5 border-blue-500 px-2">
                        <input name="tags" value="writing" type="checkbox" className="sr-only"></input>
                        <span className="select-none">Writing</span>
                    </label>
                    <label className="tile rounded-lg bg-blue-500 border-0.5 border-blue-500 px-2">
                        <input name="tags" value="cooking" type="checkbox" className="sr-only"></input>
                        <span className="select-none">Cooking</span>
                    </label>
                </fieldset>
                <fieldset className="w-full flex flex-col justify-center">
                    <input type="file" id="files" className="hidden"></input>
                    <label htmlFor="files" className="w-1/2 min-w-22 bg-neutral-300 rounded-lg px-1 hover:cursor-pointer text-center text-sm">Image/Video</label>
                </fieldset>
                <button type="submit" className="w-1/3 min-w-15 bg-[rgba(0,127,255,1)] text-white rounded-lg hover:cursor-pointer">Submit</button>
            </form>
        </div>
    )
}


// SVG Components
import ArrowLeft from "@/public/subjectIcons/arrow-small-left.svg";
import ArrowRight from "@/public/subjectIcons/arrow-small-right.svg";
import ArtIcon from "@/public/subjectIcons/art.svg";
import MusicIcon from "@/public/subjectIcons/music.svg";
import WritingIcon from "@/public/subjectIcons/writing.svg";
import MathIcon from "@/public/subjectIcons/math.svg";
import CodingIcon from "@/public/subjectIcons/coding.svg";

export default function QuickFilter(){
  return(
    <div className="h-1/30 w-1/6 min-w-50 max-w-80 min-2xl:h-6 bg-white flex justify-center items-center border-1 border-black relative top-2.5">
      <div className="h-full w-1/8">
        <ArrowLeft className="w-full h-full text-black hover:cursor-pointer hover:text-white hover:bg-black rounded-l-2xl"/>
      </div>
      <div className="h-full w-6/8 flex justify-center items-center">
        <ArtIcon className="w-full h-full p-0.5 text-red-500 hover:cursor-pointer hover:text-white hover:bg-red-500"/>
        <MusicIcon className="w-full h-full p-0.5 text-orange-500 hover:cursor-pointer hover:text-white hover:bg-orange-500" />
        <WritingIcon className="w-full h-full p-0.5 text-green-500 hover:cursor-pointer hover:text-white hover:bg-green-500" />
        <MathIcon className="w-full h-full p-0.5 text-blue-500 hover:cursor-pointer hover:text-white hover:bg-blue-500" />
        <CodingIcon className="w-full h-full p-0.5 text-purple-500 hover:cursor-pointer hover:text-white hover:bg-purple-500" />
      </div>
      <div className="h-full w-1/8">
        <ArrowRight className="w-full h-full text-black hover:cursor-pointer hover:text-white hover:bg-black rounded-r-2xl" />
      </div>
    </div>
  )
}
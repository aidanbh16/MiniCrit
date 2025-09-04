


// SVG Components
import FilterIcon from "@/vectors/subjectIcons/filter.svg";
import ArtIcon from "@/vectors/subjectIcons/art.svg";
import MusicIcon from "@/vectors/subjectIcons/music.svg";
import WritingIcon from "@/vectors/subjectIcons/writing.svg";
import MathIcon from "@/vectors/subjectIcons/math.svg";
import CodingIcon from "@/vectors/subjectIcons/coding.svg";

type Props = { toggleFilter: () => void };

export default function QuickFilter({toggleFilter}: Props){
  

  return(
    <>
      <div className="h-1/30 w-full min-w-50 max-w-80 min-2xl:h-6 flex justify-center items-center relative z-101 bottom-2.5">
        <div className="w-3/4 h-full bg-white border-1 border-black border-r-3 border-b-3 shadow-lg">
          <div className="h-full w-full flex justify-center items-center">
            <ArtIcon className="w-full h-full p-0.5 text-red-500 hover:cursor-pointer hover:text-white hover:bg-red-500"/>
            <MusicIcon className="w-full h-full p-0.5 text-orange-500 hover:cursor-pointer hover:text-white hover:bg-orange-500" />
            <WritingIcon className="w-full h-full p-0.5 text-green-500 hover:cursor-pointer hover:text-white hover:bg-green-500" />
            <MathIcon className="w-full h-full p-0.5 text-blue-500 hover:cursor-pointer hover:text-white hover:bg-blue-500" />
            <CodingIcon className="w-full h-full p-0.5 text-purple-500 hover:cursor-pointer hover:text-white hover:bg-purple-500" />
          </div>
        </div>
        <div className="w-1/10 h-full"></div>
        <div className="w-1/10 h-full bg-white border-1 border-black border-r-3 border-b-3 shadow-lg">
          <FilterIcon className="w-full h-full p-0.5 text-black hover:cursor-pointer hover:text-white hover:bg-black" onClick={toggleFilter}/>
        </div>
      </div>
    </>
  )
}
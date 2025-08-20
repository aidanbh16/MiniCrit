export default function Home() {
  return (
      <div className="h-329 w-screen bg-[rgba(234,235,237,1)] dark:bg-[rgba(23,23,56,1)] overflow-x-hidden flex items-center justify-center text-black">
        <div className="h-3/4 w-1/4 flex justify-end bg-blue-200">
          <div className="h-24/30 w-1/8 bg-white rounded-[20px] relative right-1/8 top-1/8">

          </div>
        </div>
        <div className="h-3/4 w-2/4 flex flex-col items-center bg-red-200">
          <div className="h-1/30 w-1/4 bg-white rounded-[50px] relative top-1/13">

          </div>
          <div className="h-24/30 w-full bg-white rounded-[50px] relative top-1/11">
            
          </div>
        </div>
        <div className="h-3/4 w-1/4 flex justify-start bg-green-200">
          <div className="h-24/30 w-2/3 bg-white rounded-[50px] relative left-1/8 top-1/8">
            updates
          </div>
        </div>
      </div>
  );
}

export default function Profile() {
    return (
      <div className="h-screen w-screen bg-[rgba(234,235,237,1)] dark:bg-[rgba(23,23,56,1)] overflow-x-hidden flex justify-center items-center">
        <div className="h-2/3 w-2/3 flex items-center justify-center">
            <div className="h-full w-full flex flex-col items-center justify-center">
              <div className="h-full w-full flex items-center justify-center bg-green-100">
                <div className="h-3/4 w-1/2 flex items-center justify-center bg-blue-100 rounded-[200px]">

                </div>
              </div>
              <div className="h-full w-full flex items-center justify-center bg-red-100">
              
              </div>
            </div>
            <div className="h-full w-full flex items-center justify-center bg-blue-100">
            
            </div>
        </div>
      </div>
    );
}
import Link from "next/link";


  
  export default function PriLoadingCard() {
      return (
        <div>
    
              
      <div className="w-full h-full">
      <div>
        <div className="bg-gray-800/30 animate-pulse min-h-[249px] py-[29px] px-[16px] rounded-2xl shadow-xl">
          <div className="md:flex gap-4">
            <div className="w-full bg-gray-800 md:max-w-[144px] h-[200px] rounded-2xl object-cover object-center" />
            <div className="mt-4 w-full">
              <h1 className="text-xl font-bold text-main-500">  </h1>
              <div>
                <p className="text-lg bg-gray-600 h-2 w-full  animate-pulse font-medium rounded-2xl mt-4"> </p>
                <p className="text-lg bg-gray-600 h-2 w-full animate-pulse  font-medium  rounded-2xl mt-4">  </p>
                <p className="text-lg bg-gray-600 h-2 w-full animate-pulse  font-medium  rounded-2xl mt-4">  </p>
                <p className="text-lg bg-gray-600 h-2 w-full animate-pulse  font-medium  rounded-2xl mt-4">  </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="pt-4">
     
      </div>
    </div>
        </div>
    );
  }
  
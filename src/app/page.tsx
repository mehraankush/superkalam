import MainSection from "@/component/core/MainSection";
import RightSIdebar from "@/component/core/RightSIdebar";
import Sidebar from "@/component/core/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen flex overflow-hidden">

      {/* sdebar  */}
      <div className='w-[380px]  h-full'>
          <Sidebar/>
      </div>

        <div className='w-full '>
          <MainSection/>
        </div>

        <div className='w-[450px]'>
        <RightSIdebar/>
        </div>
      </div>
      );
}

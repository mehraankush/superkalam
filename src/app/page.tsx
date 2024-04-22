import MainSection from "@/component/core/MainSection";
import MucisPlayer from "@/component/core/MucisPlayer";
import RightSIdebar from "@/component/core/RightSIdebar";
import Sidebar from "@/component/core/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen flex overflow-hidden">

      {/* Sidebar  */}
      <div>
        <Sidebar />
      </div>

      {/* main section  */}
      <div className='w-full '>
        <MainSection />
      </div>

     {/* RigtSideBar  */}
      <div >
        <RightSIdebar />
      </div>

      <div className="bg-[#0A0A0B] w-screen  absolute z-[10] bottom-0 h-[80px]">
        <MucisPlayer/>
      </div>
    </div>
  );
}

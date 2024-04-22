import MainSection from "@/components/core/MainSection";
import MucisPlayer from "@/components/core/MucisPlayer";
import RightSIdebar from "@/components/core/RightSIdebar";
import Sidebar from "@/components/core/Sidebar";

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

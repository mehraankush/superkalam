import MainSection from "@/component/core/MainSection";
import RightSIdebar from "@/component/core/RightSIdebar";
import Sidebar from "@/component/core/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen flex overflow-hidden">

      {/* Sidebar  */}
      <div className='hidden md:block w-[380px]  h-full'>
        <Sidebar />
      </div>

      {/* main section  */}
      <div className='w-full '>
        <MainSection />
      </div>

     {/* RigtSideBar  */}
      <div className='hidden md:block lg:w-[450px]'>
        <RightSIdebar />
      </div>
    </div>
  );
}

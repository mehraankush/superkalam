import Sidebar from "@/component/core/Sidebar";
import { routes } from "@/data/sidebar";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">

      {/* sdebar  */}
      <div className='w-[300px] border h-full'>
          <Sidebar/>
      </div>

        <div className='w-full border'>

        </div>
        <div className='w-[400px] border'>

        </div>
      </div>
      );
}

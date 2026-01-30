import React from "react";
import { FaCircleUser} from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { SiGoogledocs } from "react-icons/si";
import { IoIosHelpCircle } from "react-icons/io";


function Sidebar() {
  return (
    <div>
      <div className="bg-[#031C30] w-60 h-screen fixed">
        <div>
           
            <div className="flex flex-col gap-y-2 text-white mx-10 pt-10">
                 <FaCircleUser size="7rem"/>
                <h1 className="text-xl font-semibold">Alumno</h1>
                <h2 className="text-lg">ARTURO DIAZ</h2>
            </div>    
        </div>

        <div className="flex flex-col gap-y-2  mt-20 mx-5 text-white font-semibold">
                <button className="flex items-center gap-x-4 p-3 rounded-lg hover:bg-white hover:bg-opacity-30"><IoHome size="2rem" />Dashboard</button>
                <button className="flex items-center gap-x-4 p-3 rounded-lg hover:bg-white hover:bg-opacity-30"><SiGoogledocs size="2rem" />Tramites</button>
                <button className="flex items-center gap-x-4 p-3 rounded-lg hover:bg-white hover:bg-opacity-30"><FaHistory size="2rem" />Mis tramites</button>
                <button className="flex items-center gap-x-4 p-3 rounded-lg hover:bg-white hover:bg-opacity-30"><IoIosHelpCircle size="2rem" />Asistente</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

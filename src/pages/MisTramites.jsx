import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ButtonRag from "../components/ButtonRag";

function MisTramites() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const estatus = "En proceso"
  return (

    <div>
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)}></Header>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}></Sidebar>

      <h1 className="text-center mt-20 md:ml-60 font-bold text-lg md:text-xl px-4">Seguimientos</h1>
      <div className="flex justify-center md:ml-60 mt-5 p-2 md:p-5 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
          <thead className="border bg-gray-100">
            <th className="border-collapse border border-gray-400 p-2">Folio</th>
            <th className="border-collapse border border-gray-400 p-2">Nombre del paquete</th>
            <th className="border-collapse border border-gray-400 p-2">Fecha solicitada</th>
            <th className="border-collapse border border-gray-400 p-2">Fecha de entrega</th>
            <th className="border-collapse border border-gray-400 p-2">Estatus</th>
            <th className="border-collapse border border-gray-400 p-2">Acciones</th>
          </thead>
          <tbody className="border">
            <tr>
              <td className="border-collapse border border-gray-300 p-2">1</td>
              <td className="border-collapse border border-gray-300 p-2">1</td>
              <td className="border-collapse border border-gray-300 p-2">1</td>
              <td className="border-collapse border border-gray-300 p-2">1</td>
              <td className="border-collapse border border-gray-300 p-2">
                <p className={`${estatus === "En proceso" ? "bg-yellow-300" : estatus === "Entregado" ? "bg-green-300" : "bg-red-300"} p-1 text-center rounded-md text-xs md:text-sm`}>{estatus}</p> 
            
              </td>
              <td className="border-collapse border border-gray-300 p-2 flex justify-center">
                <button className="bg-red-600 p-2 text-white rounded-md hover:bg-red-500 text-xs md:text-sm">Borrar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ButtonRag></ButtonRag>
    </div>
  );
}

export default MisTramites;

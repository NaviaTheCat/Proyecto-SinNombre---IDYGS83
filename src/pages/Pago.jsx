import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import ButtonRag from "../components/ButtonRag";

function Pago() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)}></Header>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}></Sidebar>

      <div className="flex justify-center items-center min-h-screen md:ml-60 pt-20 md:pt-0">
        <div className="w-full max-w-md bg-white p-6 md:p-10 rounded-lg shadow-lg border mx-4 md:mx-0">
          <h1 className="text-lg md:text-xl font-semibold text-center mb-8 md:mb-10">
            Datos de tarjeta
          </h1>

          <form className="space-y-4">
            <div className="flex flex-col space-y-4">
              <input
                className="border p-2 rounded-lg"
                placeholder="Nombre Completo del titular"
              ></input>

              <input
                className="border p-2 rounded-lg"
                placeholder="Numero de tarjeta"
                type="number"
              ></input>
              <div className="space-x-0 md:space-x-6 flex flex-col md:flex-row gap-2">
                <input
                  className="border p-2  rounded-lg w-full md:w-[50%]"
                  placeholder="Fecha Vencimiento"
                  type="date"
                ></input>
                <input
                  className="border p-2 rounded-lg w-full md:w-[40%]"
                  placeholder="CVV"
                  type="number"
                ></input>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-between mt-6">
              <Link
                to="/formulario"
                className="bg-red-600 p-3 text-white rounded-lg hover:bg-red-300 text-center flex-1 sm:flex-none"
              >
                Cancelar
              </Link>
              <Link
                to="/pago"
                className="bg-[#00fcfc] p-3 rounded-lg hover:bg-[#01abab] text-center flex-1 sm:flex-none"
              >
                Siguiente
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ButtonRag></ButtonRag>
    </div>
  );
}

export default Pago;

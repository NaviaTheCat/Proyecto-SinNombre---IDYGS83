import React from "react";
import { LuNotebookText } from "react-icons/lu";

function CardTramite() {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-5 w-[80%] border">
        <div className="flex space-x-4 mt-3 mb-3">
          <div className="bg-white rounded-[70px] p-3 border">
            <LuNotebookText size="2rem" />
          </div>
          <h1 className="text-xl font-semibold">Constancia de estudios</h1>
        </div>

        <p>
          Documento oficial que certifica tu inscripción activa en la
          institución
        </p>
        <div className="flex space-x-40 p-2 border mt-5 mb-10 rounded-lg">
          <p>Costo</p>
          <p>150$</p>
        </div>
        <button className="bg-[#00FFFF] p-2 rounded-lg hover:bg-[#2fbdbd]">
          Solicitar
        </button>
      </div>
    </div>
  );
}

export default CardTramite;

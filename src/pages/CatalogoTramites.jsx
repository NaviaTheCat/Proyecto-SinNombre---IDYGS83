import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CardTramite from "../components/CardTramite";
import ButtonRag from "../components/ButtonRag";

function CatalogoTramites() {
  return (
    <div>
      <Sidebar></Sidebar>
      <Header></Header>
      <h1 className="ml-80 mt-20 text-xl font-bold">
        Catalogo de tramites Universitarios
      </h1>

      <div className="ml-80 mt-8">
        <input
          className="bg-white border border-opacity-10 rounded-md p-2 w-[93%]"
          placeholder="Buscar"
          type="text"
        ></input>
      </div>

      <div className="ml-80 mt-8 mb-8 grid grid-cols-3 gap-y-10">
        <CardTramite></CardTramite>
        <CardTramite></CardTramite>
        <CardTramite></CardTramite>

         <CardTramite></CardTramite>
        <CardTramite></CardTramite>
        <CardTramite></CardTramite>
      </div>
      <ButtonRag></ButtonRag>
    </div>
  );
}

export default CatalogoTramites;

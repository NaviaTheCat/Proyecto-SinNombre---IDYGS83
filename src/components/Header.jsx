import React from 'react'
import { IoExitOutline } from "react-icons/io5";

function Header() {
  return (
    <div>
        <div className='bg-white border fixed top-0 left-60 w-[calc(100%-15rem)] h-16 flex items-center px-5 shadow-md'>
            <div className='flex justify-end w-full gap-x-16'>
                    <h1 className='flex items-center font-semibold'>Bienvenido ARTURO DIAZ</h1>
                    <button className='flex items-center gap-x-4 p-3 rounded-lg text-red-600 font-semibold'><IoExitOutline size="2rem" />Cerrar Sesion</button>
            </div>
        </div>
    </div>
  )
}

export default Header

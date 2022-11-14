
import { AiOutlineArrowLeft } from "react-icons/ai"
import { NavLink } from 'react-router-dom'
import React from 'react'



export default function ConfiguracionEmpresa(){
    
    const regresar = () => {
        return <NavLink to= "/configuracion"/>
    }

    return(
        <>
        <div className="flex justify-between container">
             <div>
             <h1 className='font-semibold text-xl px-10 pt-10'>Configuración - Empresa</h1>
             </div>
             <div className="p-5 mr-10 relative bottom-0">
                <button onClick={regresar()}>
                <AiOutlineArrowLeft className="cursor-pointer" size="25px"/>
                </button>
             </div>
        </div>
        <div className="p-10 container">
            <div className="bg-blue-gray-50 p-5 pl-10 mb-5 rounded-md">
                <div className="mt-3">
                    <h1 className="font-semibold text-md">Datos Generales</h1>
                    <p className="text-sm">Información básica de tu empresa</p>
                </div>
                <div className="lg:grid grid-cols-3 mt-6">
                    <div className="mr-8">
                         <div className="flex flex-col p-4 border border-purple-600 rounded-lg">
                            <span className="text-lg text-gray-400">Perfil</span>
                            <span className="text-xs text-gray-400">Tamaño maximo</span>
                            <span className="text-xs text-gray-400">2MB</span>
                            <input type="file" className="m-1 rounded-lg" />
                         </div>
                        <div className="flex flex-col mt-2 mb-3">
                        <label className='font-semibold text-sm mb-1'>Certificado</label>
                        <input type="file" className="rounded-lg " />
                        </div>
                    </div>
                    
                    <div className="flex flex-col mb-5 mr-8">
                        <label htmlFor="num_ruc" className='font-semibold text-sm mb-1'>Razón social</label>
                        <input type={"text"} id='num_ruc' className='rounded-lg bg-blue-gray-50 mb-3'/>
                        <label htmlFor="num_ruc" className='font-semibold text-sm mb-1'>Nombre Comercial</label>
                        <input type={"text"} id='num_ruc' className='rounded-lg bg-blue-gray-50 mb-3'/>
                        <label htmlFor="num_ruc" className='font-semibold text-sm mb-1'>Direccion</label>
                        <input type={"text"} id='num_ruc' className='rounded-lg bg-blue-gray-50 mb-3'/>
                    </div>
                    <div className="flex flex-col mb-3 mr-8">
                        <label htmlFor="num_ruc" className='font-semibold text-sm mb-1'>RUC</label>
                        <input type={"text"} id='num_ruc' className='rounded-lg bg-blue-gray-50 mb-3'/>
                        <label htmlFor="num_ruc" className='font-semibold text-sm mb-1'>Teléfono</label>
                        <input type={"text"} id='num_ruc' className='rounded-lg bg-blue-gray-50 mb-3'/>
                        <label htmlFor="num_ruc" className='font-semibold text-sm mb-1'>Correo Electronico</label>
                        <input type={"text"} id='num_ruc' className='rounded-lg bg-blue-gray-50 mb-3'/>
                    </div>
                </div>
                <div className="flex justify-end">
                        <input type="submit" value="Guardar" className= "py-3 mt-3 px-10 rounded-md bg-deep-purple-400 text-white text-sm mr-8 cursor-pointer" />
                </div>
            </div>
            <div className="bg-blue-gray-50 p-5 pl-10 mb-5 rounded-md">
                <div className="mt-5">
                    <h1 className="font-semibold text-md">Otras Funciones</h1>
                    <p className="text-sm">Funcionamiento General de tu empresa</p>
                </div>
                <div className="lg:grid grid-cols-3 mt-5 mb-5">
                    <div className="flex flex-col mr-8">
                        <label htmlFor="num_ruc" className='font-semibold text-sm mb-1'>Régimen</label>
                        <input type={"text"} id='num_ruc' className='rounded-lg bg-blue-gray-50 mb-3' placeholder="Régimen General"/>
                    </div>
                    <div className="flex flex-col mr-8">
                        <label htmlFor="num_ruc" className='font-semibold text-sm mb-1'>Sector</label>
                        <input type={"text"} id='num_ruc' className='rounded-lg bg-blue-gray-50 mb-3'
                        placeholder="Tecnologia / Telecomunicaciones "/>
                    </div>
                    <div className="flex flex-col mr-8">
                        <label htmlFor="num_ruc" className='font-semibold text-sm mb-1'>Moneda</label>
                        <input type={"text"} id='num_ruc' className='rounded-lg bg-blue-gray-50 mb-3'
                        placeholder="PEN - Peru Nuevo Sol"/>
                    </div>
                </div>
            </div>
      
        </div>
        </>
    )
}

import React from 'react'
import { FaChevronRight, FaFacebookF, FaRegEnvelope, FaSave } from 'react-icons/fa'

export default function Perfil() {
  return (
    <div>
        <h1 className='text-center font-semibold text-2xl p-4 '>
            MI PERFIL
        </h1>
        <div className='flex justify-evenly flex-wrap'>
            <div className='flex justify-center m-4 bg-gray-50 px-12 py-6 rounded-xl shadow-xl flex-col'>
                <div className='h-60 w-60 rounded-full border-4 border-red-600 m-4'></div>
                <h1 className='text-center mt-4 font-bold'>Cliente</h1>
                    <span className='text-gray-500 text-center'>Cel:</span>
                    <span className='text-bold m-2'>Direccion:</span>
                    <div className='flex items-center justify-center mt-4'>
                        <button className='text-white rounded-2xl bg-gradient-to-b from-purple-600 to-indigo-500 px-4 py-2 flex items-center'>Editar perfil <FaChevronRight className='mx-2'/> </button>
                    </div>
                    <div className='flex justify-around mt-4'>
                        <button className='bg-gradient-to-b from-purple-600 p-4 rounded-full'>
                            <FaFacebookF className='text-2xl text-white'></FaFacebookF>
                        </button>
                        <button className='bg-gradient-to-b from-purple-600 p-4 rounded-full'>
                            <FaRegEnvelope className='text-2xl text-white'></FaRegEnvelope>
                        </button>
                        
                    </div>
            </div>
            <div className='xl:flex justify-center items-center  m-4 hidden '>
                <hr className='w-px h-[90%]  bg-gray-400 m-auto'/>
            </div>
            
            <div className='flex justify-center  m-4 bg-gray-50 px-12 py-6 rounded-xl shadow-xl flex-col'>
                <span className='my-2 font-medium '>Nombre</span>
                <input type="text"  className='rounded-md bg-gray-100 mx-4 border border-gray-300'/>
                <span className='my-2 font-medium '>Numero de Celular</span>
                <input type="text"  className='rounded-md bg-gray-100 mx-4 border border-gray-300'/>
                <span className='my-2 font-medium '>Direccion</span>
                <input type="text"  className='rounded-md bg-gray-100 mx-4 border border-gray-300'/>
                <span className='my-2 font-medium '>Ruc</span>
                <input type="text"  className='rounded-md bg-gray-100 mx-4 border border-gray-300'/>
                <span className='my-2 font-medium '>Otros</span>
                <input type="text"  className='rounded-md bg-gray-100 mx-4 border border-gray-300'/>
                <span className='my-2 font-medium '>Otros</span>
                <input type="text"  className='rounded-md bg-gray-100 mx-4 border border-gray-300'/>
                <button className='mt-4 rounded-lg bg-gradient-to-b from-purple-600 to-indigo-500 text-white py-2 flex justify-center items-center'>
                    <FaSave className='mx-2'></FaSave>
                    Actualizar perfil
                </button>
            </div>
        </div>
    </div>
  )
}


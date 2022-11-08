import React from 'react'

export default function ConfiguracionAdmin() {
  return (
      <div className='flex justify-around mx-4 mt-12 flex-wrap'>
        <div className='p-4 bg-gray-300 flex flex-col rounded-md m-2'>
          <span className='text-xl font-bold mb-4'>Cambiar índice de número de orden</span>
          <span className='text-md'>Elige el número de conteo de tus boletas, facturas , etc</span>
          <div className='flex my-2'>
            <span className='p-2'>Ejemplo:</span>
            <span className='mx-2 bg-[#151423] p-2 rounded-md text-white'> FC-1001</span>
          </div>
          <button className='p-1 bg-[#151423] text-white mx-8 my-4 rounded-md'>MODIFICAR</button>
        </div>
        <div className='p-4 bg-gray-300 flex flex-col max-w-md rounded-md m-2'>
          <span className='text-xl font-bold mb-4'>Cambiar contraseña</span>
          <span className='text-md'>Cambia tu contraseña por una nueva en cualquier momento,siguiendo los patrones para una contraseña segura</span>
          <button className='p-1 bg-[#151423] text-white mx-8 mt-6 rounded-md'>MODIFICAR</button>
        </div>
      </div>
    )
}

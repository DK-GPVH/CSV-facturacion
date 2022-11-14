import React from 'react'
import { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-tailwind/react'
import { Dialog, Transition } from '@headlessui/react'

export default function ConfiguracionAdmin() {

  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
    <div>
      <h1 className='font-semibold text-xl px-10 pt-10'>Configuración</h1>
    </div>

    <div className='p-10 container'>
      <div className='bg-blue-gray-50 p-5 pl-10 mb-5 rounded-md'>
      <div className='flex justify-between'>
          <div>
               <h2 className='font-semibold mt-3'>Datos Generales</h2>
                <p className='text-sm'>Informacion Actual de tu empresa </p>
          </div>
          <div className='flex justify-between ' onClick={openModal}>
            <button className='py-1 mt-3 px-8 rounded-md bg-deep-purple-400 text-white text-sm mr-8'>Nueva Empresa</button>
         </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className='lg:grid items-center justify-items-center h-screen'>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-5/12 p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title as="h3" className="mb-6 text-lg font-bold leading-6 text-gray-900">
                    Nueva Empresa
                  </Dialog.Title>
                  <form action="">
                    <div>
                      <div className="grid grid-cols-2 gap-10">
                        <div>
                          <label>Usuario SOL</label>
                          <input
                            type="text"
                            className="w-full mt-1 transition-all rounded-lg border-blue-gray-100"
                            required={true}
                          />
                        </div>
                        <div>
                          <label>Contraseña SOL</label>

                          <input
                            type="text"
                            className="w-full mt-1 transition-all rounded-lg border-blue-gray-100"
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 mt-2 gap-2">
                        <div>
                          <label>Número de RUC</label>
                          <br />
                          <input
                            type="text"
                            className="w-full mt-1 transition-all rounded-lg border-blue-gray-100"
                            required="true"
                          />
                        </div>
                        <div>
                          <label>Razón social</label>
                          <br />
                          <input
                            type="text"
                            className="w-full mt-1 transition-all rounded-lg border-blue-gray-100"
                            required="true"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-3 mt-6">
                        <div>
                          <label>Certificado</label>
                          <br />
                          <input
                            type="file"
                            className="w-10/12 mt-1 transition-all rounded-lg "
                            required={true}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center gap-6 my-6">
                    <Button
                        type="button"
                        className="text-gray-900 border-2 border-gray-900 bg-blue-gray-50 hover:shadow-gray-300"
                        onClick={closeModal}
                      >
                        Cancelar
                      </Button>
                      <Button type="submit" className="bg-deep-purple-400">
                        Guardar
                      </Button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    <div className='lg:grid grid-cols-3 grid-rows-2 mt-10'>
      <div className='flex flex-col mb-5 mr-8'>
        <label htmlFor="num_ruc" className='font-semibold text-sm mb-1'>Número de RUC</label>
        <input type={"text"} id='num_ruc' className='rounded-lg bg-blue-gray-50'/>
      </div>
      <div className='flex flex-col mb-5 mr-8'>
        <label htmlFor="raz_soc" className='font-semibold text-sm mb-1'>Razón Social</label>
        <input type={"text"} id='raz_soc' className='rounded-lg bg-blue-gray-50'/>
      </div>
      <div className='flex flex-col mb-5 mr-8'>
        <label htmlFor="tok" className='font-semibold text-sm mb-1'>Token</label>
        <input type={"text"} id='tok'className='rounded-lg bg-blue-gray-50'/>
      </div>
      <div className='flex flex-col mb-5 mr-8'>
        <label htmlFor="usu_sol" className='font-semibold text-sm mb-1'>Usuario SOL</label>
        <input type={"text"} id='usu_sol' className='rounded-lg bg-blue-gray-50'/>
      </div>
      <div className='flex flex-col mb-5 mr-8'>
        <label htmlFor="pass_sol" className='font-semibold text-sm mb-1'>Contraseña SOL</label>
        <input type={"text"} id='pass_sol' className='rounded-lg bg-blue-gray-50'/>
      </div>
      <div className='flex flex-col mb-5 mr-8'>
        <label htmlFor="pass_sol" className='font-semibold text-sm mb-1'>Certificado</label>
        <button className='bg-blue-gray-300 text-sm rounded-lg p-3 text-white font-semibold'>Descargar Certificado</button>
      </div>
     </div>
     </div>
      <div className='bg-blue-gray-50 p-3 pl-10 rounded-md'>
        <div className='py-3'>
          <h1 className='font-semibold mt-3'>Configuración Avanzada</h1>
          <p className='text-sm mb-3'>Configura cada aspecto de tu empresa</p>
        </div>
        <div className='lg:flex flex-row'>
          <div className='border-solid border-2 border-gray-400 w-72 h-60 rounded-xl mr-auto mb-5'>
            <h1 className='text-sm font-semibold px-5 pt-3 pb-3 border-b-2 border-gray-400'>Empresa</h1>
            <p className='text-sm pl-3 pr-16 pt-3'>Configura la información de tu empresa</p>
            <div className='flex flex-col text-sm pt-3 pl-3 pr-44 underline text-indigo-600'>
              <a href="/"><NavLink to= "/configuracionempresa">Ingresar</NavLink></a>
              <a href="/" className='mt-2'>Usuarios</a>
              <a href="/" className='mt-2'>Mi Perfil</a>
            </div>
          </div>
          <div className='border-solid border-2 border-gray-400 w-72 h-60 rounded-xl mr-auto mb-5'>
            <h1 className='text-sm font-semibold px-5 pt-3 pb-3 border-b-2 border-gray-400'>Facturación</h1>
            <p className='text-sm pl-3 pr-16 pt-3'>Configura la información que se mostrara en tus facturas</p>
            <div className='flex flex-col text-sm p-3 underline text-indigo-600'>
              <a href="/">Datos Generales</a>
              <a href="/" className='mt-2'>Plantillas</a>
              <a href="/" className='mt-2'>Vendedores</a>
            </div>
          </div>
          <div className='border-solid border-2 border-gray-400 w-72 h-60 rounded-xl mr-auto mb-5'>
            <h1 className='text-sm font-semibold px-5 pt-3 pb-3 border-b-2 border-gray-400'>Contabilidad</h1>
            <p className='text-sm pl-3 pr-16 pt-3'>Define Opciones para el manejo de tu contabilidad</p>
            <div className='flex flex-col text-sm p-3 underline text-indigo-600'>
              <a href="/">Datos Generales</a>
              <a href="/" className='mt-2'>Periodos</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

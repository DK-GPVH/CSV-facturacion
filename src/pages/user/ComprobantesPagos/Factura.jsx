import React, { useState } from 'react'
import { FaFolderPlus } from 'react-icons/fa'
import TablaFactura from '../../../components/user/factura/TablaFactura'
import TipoPago from '../../../components/user/factura/TipoPago'
import DatesSearch from '../../../components/user/factura/DatesSearch'

export default function Factura() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="pt-4 mx-2 lg:mx-5 ">
      <h1 className="text-xl  font-bold mb-4 text-stone-600 text-center text-[#2F9B86]">EMITIR FACTURA</h1>

      <div className="px-1 text-gray-100 bg-gray-800 rounded-lg lg:px-6">
        <form action="" className="container flex flex-col mx-auto space-y-12">
          <div className="grid grid-cols-8 gap-6 p-6 rounded-md shadow-sm ">
            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Serie</label>
              <input
                type="text"
                disabled
                placeholder="F001-00637869"
                className="w-full text-gray-900 border-gray-700 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Fecha de Emisión</label>
              <input
                type="date"
                className="w-full text-gray-900 border-gray-700 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Tipo de Moneda</label>
              <select className="w-full text-gray-900 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700">
                <option>Soles</option>
                <option>Dólares</option>
              </select>
            </div>

            <div className="col-span-full sm:col-span-2">
              <label className="text-sm">Núm. Celular</label>
              <input
                type="number"
                placeholder=""
                className="w-full text-gray-900 border-gray-700 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
              />
            </div>

            <div className="grid grid-cols-8 gap-4 col-span-full lg:col-span-8">
              <DatesSearch onDocumento={"factura"}></DatesSearch>

              <div className="col-span-full lg:col-span-2">
                <label className="text-sm">Productos o servicios</label>
                <span className='w-full'>
                  <button className='flex justify-center w-full bg-[#2F9B86] text-white p-2 rounded-lg flex-wrap'>
                  <FaFolderPlus className='my-auto text-2xl'/>
                  <span className='mx-2'>Agregar productos o servicios</span> 
                  </button>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/*contenido de tabla */}
      <div className="px-1 pt-4 bg-gray-800 rounded-lg lg:px-6 mt-2">
        <div className="p-4">
          <TablaFactura />
        </div>

        <div className="grid grid-cols-12 gap-4 px-1 pb-8 lg:px-4">
          <div className="col-span-7 bg-white rounded-lg">
            <div className="m-4">
              <div className="form-group row">
                <h1 className="text-center col-sm-3 col-form-label text-md text-[#2F9B86]">TIPO DE PAGO</h1>
                <div className="border-t border-[#2F9B86]" />
                <div className="grid grid-cols-12 gap-4 mt-2">
                  <div className="col-span-6">
                    <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                      <input
                       defaultChecked
                        id="bordered-radio-1"
                        type="radio"
                        defaultValue
                        onClick={() => setVisible(false)}
                        name="bordered-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="bordered-radio-1"
                        className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Contado
                      </label>
                    </div>
                  </div>

                  <div className="col-span-6">
                    <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                      <input
                        id="bordered-radio-2"
                        type="radio"
                        defaultValue
                        name="bordered-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onClick={() => setVisible(true)}
                     />
                      <label
                        htmlFor="bordered-radio-2"
                        className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        
                      >
                        Crédito
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {visible && (
                <div>
                  <TipoPago />
                </div>
              )}
            </div>
          </div>
          <div className="col-span-5 bg-white rounded-lg">
            <div className="flex flex-wrap mb-4 overflow-hidden lg:-mx-px xl:-mx-full">
              <div className="mx-5">
                <h1 className="pt-4 text-md text-[#2F9B86] font-mediun py">RESUMEN</h1>
                <div className="border-t border-[#2F9B86]" />
                <div className="flex flex-wrap overflow-hidden lg:-mx-px">
                  <div className="w-full overflow-hidden text-right lg:my-px lg:px-px xl:w-1/2">
                    <h1 className="py-3 pr-4 text-xs font-medium text-[#2F9B86]">SUB TOTAL</h1>
                  </div>
                  <div className="w-full overflow-hidden lg:my-px lg:px-px xl:w-1/2">
                    <input
                      type="text"
                      disabled
                      className="mt-2 block border-none w-full h-6 rounded-md bg-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div className="w-full overflow-hidden text-right lg:my-px lg:px-px xl:w-1/2">
                    <h1 className="py-3 pr-4 text-xs font-medium text-[#2F9B86]">OP. EXONERADAS</h1>
                  </div>

                  <div className="w-full overflow-hidden lg:my-px lg:px-px xl:w-1/2">
                    <input
                      type="text"
                      disabled
                      className="mt-2 block border-none w-full h-6 rounded-md bg-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div className="w-full overflow-hidden text-right lg:my-px lg:px-px xl:w-1/2">
                    <h1 className="py-3 pr-4 text-xs font-medium text-[#2F9B86]">DESCUENTO</h1>
                  </div>

                  <div className="w-full overflow-hidden lg:my-px lg:px-px xl:w-1/2">
                    <input
                      type="text"
                      disabled
                      className="mt-2 block border-none w-full h-6 rounded-md bg-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div className="w-full overflow-hidden text-right lg:my-px lg:px-px xl:w-1/2">
                    <h1 className="py-3 pr-4 text-xs text-[#2F9B86] font-xs">IGV (18%)</h1>
                  </div>

                  <div className="w-full overflow-hidden lg:my-px lg:px-px xl:w-1/2">
                    <input
                      type="text"
                      disabled
                      className="mt-2 block border-none w-full h-6 rounded-md bg-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div className="w-full overflow-hidden text-right lg:my-px lg:px-px xl:w-1/2">
                    <h1 className="py-3 pr-4 text-xs text-gray-700 font-mediun">TOTAL</h1>
                  </div>

                  <div className="w-full overflow-hidden lg:my-px lg:px-px xl:w-1/2">
                    <input
                      type="text"
                      disabled
                      className="mt-2 block w-full h-6 rounded-md border-[#2F9B86] shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-12 pt-4'>
            <div className='col-span-12 mx-2 p-1 lg:col-span-3 lg:col-start-10'>
              <button className='text-white  bg-red-600 rounded-md py-2 px-6 font-mediun font-bold mx-4'>GUARDAR CAMBIOS</button>
            </div>
          </div>
      </div>
      <div className="px-1 lg:px-6 mt-4">
        <div className='flex justify-center flex-wrap'>
          <button className='bg-red-600 rounded-md py-4 px-6 my-2 mx-6 text-white font-bold'>Vista preliminar</button>
          <button className='bg-[#2F9B86]  rounded-md py-4 px-6 m-2 mx-6 text-white font-bold'>Emitir Boleta</button>
          <button className='bg-white border-2 border-[#2F9B86] rounded-md py-4 px-6 m-2 mx-6 font-bold'>Cancelar</button>
        </div>
      </div>
    </div>
  )
}

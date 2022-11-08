import React from 'react'
import { FaFileExcel, FaFilePdf } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import CircularChartReporte from '../../components/user/dashboard/CircularChartReporte'
import YearChartReporte from '../../components/user/dashboard/YearChartReporte'

export default function ReportesAdmin() {
  return (
    <div>
    <div className="mt-4 grid grid-cols-6">
      <div className='lg:col-span-2 col-span-6 flex flex-col m-4'>
        <div className='flex flex-col'>
          <span className='my-4'>Filtrar Por:</span>
          <select name="" id="" className='rounded-lg border-gray-300'>
            <option value="">Factura</option>
            <option value="">Comprobante</option>
            <option value="">Nota de crédito</option>
            <option value="">Nota de débito</option>
          </select>
        </div>
        <div className='flex flex-col'>
          <span className='my-4'>Buscar Documento</span>
          <div className='flex'>
            <input type="text" className='border-gray-300 rounded-l-lg'/>
            <span className="inline-flex items-center px-2 text-md text-purple-500 border-gray-300 border rounded-r-md">
                    <button>
                      <FiSearch />
                    </button>
            </span>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='my-4'>Descargar</span>
          <button className='p-2 bg-gray-200 mx-8 my-2 flex justify-center rounded-lg'> <FaFilePdf className='text-red-600'></FaFilePdf> </button>
          <button className='p-2 bg-gray-200 mx-8 my-2 flex justify-center rounded-lg'> <FaFileExcel className='text-green-600'></FaFileExcel> </button>
        </div>
      </div>
      <div className='lg:col-span-4 col-span-6 m-4'>
        <div className='flex bg-gray-100 rounded-xl w-[100%] flex-col'>
            <div className='flex justify-around my-6 flex-wrap'>
                <div className='flex items-center justify-center flex-col'>
                  <span className='font-bold my-2'>INICIO</span>
                  <input type="date" className='rounded-lg '/>
                </div>
                <div className='flex items-center justify-center flex-col'>
                  <span className='font-bold my-2'>FINAL</span>
                  <input type="date" className='rounded-lg '/>
                </div>
            </div>
            <div className='w-[80%] h-80 bg-gray-300 m-auto my-6 rounded-lg '>
            </div>
        </div>
      </div>
    </div>
    <div className='grid grid-cols-4 gap-4'>
      <div className='lg:col-span-2 col-span-4 '>
        <CircularChartReporte></CircularChartReporte>
      </div>
       <div className='lg:col-span-2 col-span-4'>
        <YearChartReporte></YearChartReporte>
       </div>
        
    </div>
    </div>
  )
}

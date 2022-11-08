import React from 'react'
import NamesSearch from '../../../components/user/factura/NamesSearch'

export default function NotaDeDebito() {
  return (
    <div className="grid grid-cols-12 gap-3">
      <h1 className="text-center col-span-12 font-extrabold text-[#2F9B86] my-4">EMITIR NOTA DE DEBITO</h1>
      <div className="col-span-12 lg:col-span-4 ">
        <div className="flex flex-col p-4 mx-4 rounded-lg shadow-md bg-gray-50">
          <div className="flex flex-col my-2">
            <span className="my-2 text-left font-md">Tipo de Notas de Débito</span>
            <select className="border-none rounded-md shadow-md">
              <option>Interes por Mora</option>
              <option>Aumento en el Valor</option>
              <option>Penalidad</option>
            </select>
          </div>
          <NamesSearch></NamesSearch>
          <div className="flex flex-col my-2">
            <span className="my-2 text-left font-md">Motivo</span>
            <textarea className="border-none rounded-md shadow-md"></textarea>
          </div>
          <div className="flex flex-col my-2">
            <span className="my-2 text-left font-md">Doc. Afectado</span>
            <input type="text" className="border-none rounded-md shadow-md" />
          </div>
          <div className="grid">
            <button className="px-6 py-2 m-auto mt-4 font-extrabold text-white bg-blue-900 rounded-md">
              Buscar Documento
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-12 mx-4 rounded-lg shadow-md lg:col-span-8 bg-gray-50">
        <span className=" col-span-4 p-2 m-1 font-bold text-[#2F9B86] text-center">Nota de debito seleccionada</span>
        <div className="col-span-4 mx-2 border-t border-gray-300 "></div>
        <div className="grid grid-cols-3 p-2 m-1">
          <div className="flex flex-col col-span-2">
            <div className="flex flex-row flex-wrap m-1">
              <span className="mx-1 font-bold">Nombre del cliente:</span>
              <input type="text" className="border-none rounded-md shadow-md w-[50%]" />
            </div>
            <div className="flex flex-row flex-wrap m-1">
              <span className="mx-1 font-bold">Direccion:</span>
              <input type="text" className="border-none rounded-md shadow-md w-[50%]" />
            </div>
            <div className="flex flex-row flex-wrap m-1">
              <span className="mx-1 font-bold">Fecha de emisión:</span>
              <input type="date" className="border-none rounded-md shadow-md  w-[50%]" />
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col p-2 bg-[#2F9B86] rounded-md text-white">
              <span>BOLETA DE VENTA ELECTRONICA</span>
              <span>RUC: 000000000000</span>
            </div>
          </div>
        </div>
        <div className="mx-2 border-t border-gray-300"></div>

        <div className="flex flex-col p-2 m-1">
          <div className="flex flex-row flex-wrap my-1">
            <span className="mx-1 font-bold">Señor(es) :</span>
            <span className="mx-1 font-medium">XXXXXXXXX</span>
          </div>
          <div className="flex flex-row flex-wrap my-1">
            <span className="mx-1 font-bold">RUC :</span>
            <span className="mx-1 font-medium">00000000000</span>
          </div>
          <div className="flex flex-row flex-wrap my-1">
            <span className="mx-1 font-bold">Direccion del Receptor:</span>
            <span className="mx-1 font-medium">XXXXXXXXXXX</span>
          </div>
          <div className="flex flex-row flex-wrap my-1">
            <span className="mx-1 font-bold">Direccion del Cliente</span>
            <span className="mx-1 font-medium">XXXXXXXXXXXXXXXXXXXXXX</span>
          </div>
          <div className="flex flex-row flex-wrap my-1">
            <span className="mx-1 font-bold">Tipo de Moneda</span>
            <span className="mx-1 font-medium">$$$$$$$$$$$$$</span>
          </div>
        </div>
        <div className="flex justify-center m-1">
          <table className="m-2 rounded-md shadow-md w-[100%] bg-[#2F9B86]">
            <thead className="text-white">
              <tr>
                <th>#</th>
                <th>Cantidad</th>
                <th>Descripcion</th>
                <th>Valor Unitario</th>
              </tr>
            </thead>
            <tbody className="bg-white rounded-b-lg">
              <tr>
                <th>1</th>
                <td>10</td>
                <td>Galletas</td>
                <td>$0.15</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-2 m-1">
          <div className="col-span-1 col-start-2">
            <span className="text-[#2F9B86] font-bold">RESUMEN</span>
            <div className=" col-span-4 border-t border-[#2F9B86] mr-2"></div>
            <div className="flex flex-col items-end my-2 text-[#2F9B86] font-medium">
              <div className="flex flex-row flex-wrap">
                <span>SubTotal de ventas :</span>
                <input type="text" className="m-1 mx-2 bg-gray-200 border-none rounded-md" />
              </div>
              <div className="flex flex-row flex-wrap">
                <span> Descuentos :</span>
                <input type="text" className="m-1 mx-2 bg-gray-200 border-none rounded-md" />
              </div>
              <div className="flex flex-row flex-wrap">
                <span> IGV:</span>
                <input type="text" className="m-1 mx-2 bg-gray-200 border-none rounded-md" />
              </div>
              <div className="flex flex-row flex-wrap">
                <span>Otros cargos :</span>
                <input type="text" className="m-1 mx-2 bg-gray-200 border-none rounded-md" />
              </div>
              <div className="flex flex-row flex-wrap">
                <span>Importe Total :</span>
                <input type="text" className="m-1 mx-2 bg-gray-200 border-none rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid col-span-12 m-2">
        <button className=" m-auto py-4 px-8 bg-[#2F9B86] rounded-lg text-white font-extrabold">CONTINUAR</button>
      </div>
    </div>
  )
}

import { Input, Button } from '@material-tailwind/react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import DataTable from 'react-data-table-component'
import { AiFillEdit, AiOutlineMinusCircle } from 'react-icons/ai'
import { FiDelete } from 'react-icons/fi'
import { BsBox } from 'react-icons/bs'
export default function ProductosYServicios() {

  const columns = [
    {
      name: 'Código',
      selector: (row) => row.codigo,
      sortable: true,
    },
    {
      name: 'Nombre',
      selector: (row) => row.Nombre,
      sortable: true,
    },
    {
      name: 'Categoria',
      selector: (row) => row.categoria,
      sortable: true,
    },
    {
      name: 'Precio unitario',
      selector: (row) => row.precio_Unitario,
      sortable: true,
    },
    {
      name: 'Unidad de medida',
      selector: (row) => row.unidad_Medida,
      sortable: true,
    },
    {
      name: 'Stock',
      selector: (row) => row.stock,
      sortable: true,
    },
    {
      name: 'Fecha de registro',
      selector: (row) => row.fecha_Registro,
      sortable: true,
    },
    {
      name: 'Acciones',
      selector: (row) => row.Acciones,
    },
  ]

  const data = [
    {
      codigo: 'PRD-1',
      Nombre: 'Producto 1',
      categoria: 'Categoria 1',
      precio_Unitario: 100,
      unidad_Medida: 'kg',
      stock: 1000,
      fecha_Registro: "2012-04-23T18:25:43.511Z",
      Acciones: (
        <div className="flex gap-3">
          <AiFillEdit color="#7E56DA" className="cursor-pointer" size="25px" onClick={() => open('PRD-1')} />
          <AiOutlineMinusCircle color="#7E56DA" className="cursor-pointer" size="25px" />
          <FiDelete color="#DA5656" className="cursor-pointer" size="25px" />
        </div>
      ),
    }
  ]
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }
  let [isOpenUpdate, setIsOpenUpdate] = useState(false)
  function closeModalUpdate() {
    setIsOpenUpdate(false)
  }
  function openModalUpdate() {
    setIsOpenUpdate(true)
  }
  let [producto, setProducto] = useState({})
  function open(codigo) {
    data.map((producto) => {
      if (producto.codigo === codigo) {
        return setProducto(producto)
      }
      return {}
    })
    openModalUpdate()
  }
  return (
    <div className="p-4">
      <h1>Configuración - Empresa</h1>
      <div className="p-6">
        <div className="flex justify-between">
          <div className="w-2/4">
            <Input size="lg" label="Buscar Item" />
          </div>
          <div>
            <Button className="flex bg-[#2F9B86]" onClick={openModal}>
              <BsBox className="mr-2" /> Nuevo Producto o Servicio
            </Button>
          </div>
        </div>
        <div className="mt-6 border-2 border-gray-200 rounded-md">
          <DataTable columns={columns} data={data} pagination highlightOnHover />
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
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Nuevo Producto/Servicio
                  </Dialog.Title>
                  <hr className="h-px w-[100%] bg-gray-200" />
                  <form action="">
                    <div className="flex flex-col m-6 mt-2">
                      <div className="flex flex-wrap justify-between">
                        <div className="flex flex-col">
                          <span className="my-2">C&oacute;digo</span>
                          <input type="text" className="border border-gray-300 rounded-lg opacity-75" disabled />
                        </div>
                        <div className="flex flex-col">
                          <span className="my-2">Nombre</span>
                          <input type="text" className="border border-gray-300 rounded-lg" />
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-between">
                        <div className="flex flex-col">
                          <span className="my-2">Categor&iacute;a</span>
                          <input type="email" className="border border-gray-300 rounded-lg" />
                        </div>
                        <div className="flex flex-col">
                          <span className="my-2">Precio Unitario</span>
                          <input type="text" className="border border-gray-300 rounded-lg" />
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-between">
                        <div className="flex flex-col">
                          <span className="my-2">Unidad de Medida</span>
                          <input type="number" className="border border-gray-300 rounded-lg" min={0}/>
                        </div>
                        <div className="flex flex-col">
                          <span className="my-2">Stock</span>
                          <input type="number" className="border border-gray-300 rounded-lg" min={0}/>
                        </div>
                      </div>
                      <div className="flex items-center justify-center mt-4">
                        <div className="flex flex-col p-4 border border-purple-600 rounded-lg">
                          <span className="mt-4 text-lg text-gray-400">Perfil</span>
                          <span className="mx-2 text-xs text-gray-400">Tamaño maximo</span>
                          <span className="mx-2 text-xs text-gray-400">2MB</span>
                          <input type="file" className="m-1 rounded-lg" />
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
                        <button className="px-6 py-4 bg-[#2F9B86] text-white rounded-xl">Guardar</button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenUpdate} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModalUpdate}>
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
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Actualizar Item
                  </Dialog.Title>
                  <hr className="h-px w-[100%] bg-gray-200" />
                  <div className="flex flex-col m-6 mt-2 ">
                    <div className="flex flex-wrap justify-between">
                      <div className="flex flex-col">
                        <span className="my-2">Codigo</span>
                        <input type="text" className="border border-gray-300 rounded-lg opacity-75" disabled value={producto.codigo} />
                      </div>
                      <div className="flex flex-col">
                        <span className="my-2">Nombre</span>
                        <input type="text" className="border border-gray-300 rounded-lg" value={producto.Nombre} />
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between">
                      <div className="flex flex-col">
                        <span className="my-2">Categor&iacute;a</span>
                        <input type="email" className="border border-gray-300 rounded-lg" value={producto.categoria} />
                      </div>
                      <div className="flex flex-col">
                        <span className="my-2">Precio Unitario</span>
                        <input type="text" className="border border-gray-300 rounded-lg" value={producto.precio_Unitario} />
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between">
                      <div className="flex flex-col">
                        <span className="my-2">Unidad de Medida</span>
                        <input type="text" className="border border-gray-300 rounded-lg" value={producto.unidad_Medida} />
                      </div>
                      <div className="flex flex-col">
                        <span className="my-2">Stock</span>
                        <input type="text" className="border border-gray-300 rounded-lg opacity-75" disabled value={producto.stock} />
                      </div>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                      <div className="flex flex-col p-4 border border-purple-600 rounded-lg">
                        <span className="mt-4 text-lg text-gray-400">Perfil</span>
                        <span className="mx-2 text-xs text-gray-400">Tamaño maximo</span>
                        <span className="mx-2 text-xs text-gray-400">2MB</span>
                        <input type="file" className="m-1 rounded-lg" />
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-between mt-4">
                      <button
                        onClick={closeModalUpdate}
                        className="px-6 py-4 font-bold border border-gray-300 rounded-xl"
                      >
                        Cancelar
                      </button>
                      <button className="px-6 py-4 bg-[#2F9B86] text-white rounded-xl">Guardar</button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

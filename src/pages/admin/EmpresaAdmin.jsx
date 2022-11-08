import { Button, Input } from '@material-tailwind/react'
import { HiUserAdd } from 'react-icons/hi'
import { AiFillEdit, AiOutlineMinusCircle } from 'react-icons/ai'
import { FiDelete } from 'react-icons/fi'
import DataTable from 'react-data-table-component'
import { Dialog, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
export default function Empresa() {
  const columns = [
    {
      name: 'Código',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'RUC',
      selector: (row) => row.RUC,
      sortable: true,
    },
    {
      name: 'Razón social',
      selector: (row) => row.RazSoc,
      sortable: true,
    },
    {
      name: 'Estado',
      selector: (row) => row.Estado,
      sortable: true,
    },
    {
      name: 'Acciones',
      selector: (row) => row.Acciones,
      cell: () => [
        <>
          <AiFillEdit onClick={openModal} color="#7E56DA" className="cursor-pointer" size="25px"></AiFillEdit>

          <AiOutlineMinusCircle
            onClick={() => {
              alert('ocultar')
            }}
            color="#7E56DA" className="cursor-pointer" size="25px"
          ></AiOutlineMinusCircle>

          <FiDelete
            onClick={() => {
              alert('eliminado')
            }}
            color="#DA5656" className="cursor-pointer" size="25px"
          ></FiDelete>
        </>,
      ],
      sortable: true,
    },
  ]

  const data = [
    {
      id: 'EMP-1',
      RUC: '20515290142',
      RazSoc: 'Clinica Medica Cayetano Heredia',
      Estado: 'Activo',
    },
    {
      id: 'EMP-2',
      RUC: '20515290142',
      RazSoc: 'Clinica Medica Cayetano Heredia',
      Estado: 'Activo',
    },
    {
      id: 'EMP-3',
      RUC: '20515290142',
      RazSoc: 'Clinica Medica Cayetano Heredia',
      Estado: 'Activo',
    },
    {
      id: 'EMP-4',
      RUC: '20515290142',
      RazSoc: 'Clinica Medica Cayetano Heredia',
      Estado: 'Activo',
    },
  ]
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }
  return (
    <div className="p-4">
      <h1>Configuración - Empresa</h1>
      <div className="p-6">
        <div className="flex justify-between">
          <div className="w-2/4">
            <Input size="lg" label="Buscar por nombre de empresa" />
          </div>
          <div>
            <Button className="flex bg-[#2F9B86]" onClick={openModal}>
              <HiUserAdd className="mr-2" /> Nueva empresa
            </Button>
          </div>
        </div>
        <div className="mt-6 border-2 border-gray-200 rounded-md">
          <DataTable columns={columns} data={data} pagination highlightOnHover responsive />
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
                <Dialog.Panel className="w-1/2 p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title as="h3" className="mb-6 text-lg font-bold leading-6 text-gray-900">
                    Nueva empresa
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
                      <div className="grid grid-cols-3 gap-10 mt-6">
                        <div>
                          <label>RUC</label>
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
                        <div>
                          <label>Dirección</label>
                          <br />
                          <input
                            type="text"
                            className="w-full mt-1 transition-all rounded-lg border-blue-gray-100"
                            required="true"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-10 mt-6">
                        <div>
                          <label>Departamento</label>

                          <select
                            name=""
                            id=""
                            className="w-full mt-1 transition-all rounded-lg border-blue-gray-100"
                            required={true}
                          >
                            <option>Seleccione</option>
                            <option>Lima</option>
                            <option>Piura</option>
                            <option>Arequipa</option>
                            <option>Junin</option>
                          </select>
                        </div>
                        <div>
                          <label>Provincia</label>

                          <select
                            name=""
                            id=""
                            className="w-full mt-1 transition-all rounded-lg border-blue-gray-100"
                            required={true}
                          >
                            <option>Seleccione</option>
                            <option>prov-01</option>
                            <option>prov-02</option>
                            <option>prov-03</option>
                            <option>prov-04</option>
                          </select>
                        </div>
                        <div>
                          <label>Distrito</label>

                          <select
                            name=""
                            id=""
                            className="w-full mt-1 transition-all rounded-lg border-blue-gray-100"
                            required="true"
                          >
                            <option>Seleccione</option>
                            <option>distri-01</option>
                            <option>distri-02</option>
                            <option>distri-03</option>
                            <option>distri-04</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        <div>
                          <label>Certificado</label>
                          <br />
                          <input
                            type="file"
                            className="w-full mt-1 transition-all rounded-lg border-blue-gray-100"
                            required={true}
                          />
                        </div>
                        <div>
                          <label>Logo</label>
                          <br />
                          <input
                            type="file"
                            className="w-full mt-1 transition-all rounded-lg border-blue-gray-100"
                            required={true}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center gap-6 my-6">
                      <Button type="submit" className="bg-[#2F9B86] ">
                        Registrar Empresa
                      </Button>

                      <Button
                        type="button"
                        className="text-gray-900 border-2 border-gray-900 bg-blue-gray-50 hover:shadow-gray-300"
                        onClick={closeModal}
                      >
                        Cancelar
                      </Button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
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
                <Dialog.Panel className="w-1/2 p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title as="h3" className="mb-6 text-lg font-bold leading-6 text-gray-900">
                    Editar empresa
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
                      <div className="grid grid-cols-3 gap-10 mt-6">
                        <div>
                          <label>RUC</label>
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
                        <div>
                          <label>Dirección</label>
                          <br />
                          <input
                            type="text"
                            className="w-full mt-1 transition-all rounded-lg border-blue-gray-100"
                            required="true"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-10 mt-6">
                        <div>
                          <label>Departamento</label>

                          <select
                            name=""
                            id=""
                            className="w-full mt-1 transition-all rounded-lg border-blue-gray-100"
                            required={true}
                          >
                            <option>Seleccione</option>
                            <option>Lima</option>
                            <option>Piura</option>
                            <option>Arequipa</option>
                            <option>Junin</option>
                          </select>
                        </div>
                        <div>
                          <label>Provincia</label>

                          <select
                            name=""
                            id=""
                            className="w-full mt-1 transition-all rounded-lg border-blue-gray-100"
                            required={true}
                          >
                            <option>Seleccione</option>
                            <option>prov-01</option>
                            <option>prov-02</option>
                            <option>prov-03</option>
                            <option>prov-04</option>
                          </select>
                        </div>
                        <div>
                          <label>Distrito</label>

                          <select
                            name=""
                            id=""
                            className="w-full mt-1 transition-all rounded-lg border-blue-gray-100"
                            required="true"
                          >
                            <option>Seleccione</option>
                            <option>distri-01</option>
                            <option>distri-02</option>
                            <option>distri-03</option>
                            <option>distri-04</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-6">
                        <div>
                          <label>Certificado</label>
                          <br />
                          <input
                            type="file"
                            className="w-full mt-1 transition-all rounded-lg border-blue-gray-100"
                            required={true}
                          />
                        </div>
                        <div>
                          <label>Logo</label>
                          <br />
                          <input
                            type="file"
                            className="w-full mt-1 transition-all rounded-lg border-blue-gray-100"
                            required={true}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center gap-6 my-6">
                      <Button type="submit" className="bg-[#2F9B86] ">
                        Registrar Empresa
                      </Button>

                      <Button
                        type="button"
                        className="text-gray-900 border-2 border-gray-900 bg-blue-gray-50 hover:shadow-gray-300"
                        onClick={closeModal}
                      >
                        Cancelar
                      </Button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

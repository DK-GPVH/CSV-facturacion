import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import ImgLogo from '../assets/img/logo-sidebar.png'

/*inicio */
import { BsFileCodeFill, BsFillBookmarkStarFill, BsFillPieChartFill, BsBox } from 'react-icons/bs'

/* empresa*/
import { AiFillBank } from 'react-icons/ai'

/* usuarios*/
import { FaFileCsv, FaFontAwesome, FaTicketAlt, FaUserFriends } from 'react-icons/fa'

/* reportes*/
import { BsBarChartFill } from 'react-icons/bs'

/*configuracion */
import { BsFillGearFill } from 'react-icons/bs'
import SubMenu from './SubMenu'

/*comprobantes de pago */
import { HiOutlineClipboardList } from 'react-icons/hi'

/* guia de remision*/
import { HiTicket } from 'react-icons/hi'

/* reportes*/
import { BsFileBarGraphFill } from 'react-icons/bs'

import { BsFillCaretRightSquareFill } from 'react-icons/bs'

export default function Sidebar({ sidebarOpen, setSidebarOpen , rol}) {
  const [OpenSidebar, setOpenSidebar] = useState('-left-64')

  const location = useLocation()
  const { pathname } = location
  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  )

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded)
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded')
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded')
    }
  }, [sidebarExpanded])
  return (
    <>
      <Navbar OpenSidebar={OpenSidebar} setOpenSidebar={setOpenSidebar} onRol={rol} />

      <div className={`bg-[#151423] w-64 z-40 py-4 px-2 h-screen fixed top-0 md:left-0  ${OpenSidebar}    `}>
        <div className="h-screen overflow-y-auto">
          <div className="flex justify-center pb-8 ">
            <img src={ImgLogo} alt={ImgLogo} className="w-32 h-10" />
          </div>

          <div className="flex flex-col" onClick={() => setOpenSidebar('-left-64')}>
            {/*inicio */}
            <div className="flex-col mb-4">
              <NavLink to="/" className="flex px-2 py-3 text-white rounded-lg hover:text-black hover:bg-white">
                <BsFillBookmarkStarFill className="text-xl" />
                <span className="ml-4 text-sm font-semibold">Inicio</span>
              </NavLink>
            </div>

            {/*empresa */}
            <div className="flex-col mb-4 ">
              <NavLink to="/empresa" className="flex px-2 py-3 text-white rounded-lg hover:text-black hover:bg-white">
                <AiFillBank className="text-xl" />
                <span className="ml-4 text-sm font-semibold">Empresa</span>
              </NavLink>
            </div>

            {/*reporte */}
            <div className="flex-col mb-4 ">
              <NavLink to="/reportes" className="flex px-2 py-3 text-white rounded-lg hover:text-black hover:bg-white">
                <BsBarChartFill className="text-xl" />
                <span className="ml-4 text-sm font-semibold">Reportes</span>
              </NavLink>
            </div>

            {/*usuarios */}
            <div className="flex-col mb-4 ">
              <NavLink to="/usuario" className="flex px-2 py-3 text-white rounded-lg hover:text-black hover:bg-white">
                <FaUserFriends className="text-xl" />
                <span className="ml-4 text-sm font-semibold">Usuarios</span>
              </NavLink>
            </div>

            {/*productos y servicios*/}
            <div className="flex-col mb-4 ">
              <NavLink
                to="/productosYservicios"
                className="flex px-2 py-3 text-white rounded-lg hover:text-black hover:bg-white"
              >
                <BsBox className="text-xl" />
                <span className="ml-4 text-sm font-semibold">Productos y servicios</span>
              </NavLink>
            </div>

            {/*configuracion */}
            <div className="flex-col mb-4 ">
              <NavLink
                to="/configuracion"
                className="flex px-2 py-3 text-white rounded-lg hover:text-black hover:bg-white"
              >
                <BsFillGearFill className="text-xl" />
                <span className="ml-4 text-sm font-semibold">Configuración</span>
              </NavLink>
            </div>

            {/* comprobantes de pago */}
            <SubMenu activecondition={pathname.includes('comprobante')}>
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <a
                      href="#0"
                      className={`text-slate-200 text-white  hover:text-white truncate transition duration-150 ${
                        pathname.includes('comprobante') && 'hover:text-slate-200'
                      }`}
                      onClick={(e) => {
                        e.preventDefault()
                        sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                        console.log('haz dado click aqui')
                      }}
                    >
                      <div className="flex items-center px-2 py-3 mb-4 text-white rounded-lg hover:text-black hover:bg-white">
                        <div className="flex items-center">
                          <HiOutlineClipboardList className="text-xl" />
                          <span className="ml-4 text-sm font-semibold">Comprobantes de Pago</span>
                        </div>
                        {/* Icon */}
                        <div className="flex ml-2 shrink-0">
                          <BsFillCaretRightSquareFill
                            className={`w-3 h-3 shrink-0 ml-1  fill-current text-[#2ad341] mr-4 ${
                              open && 'transform rotate-90'
                            }`}
                          />
                        </div>
                      </div>
                    </a>

                    <div className="text-white bg-black rounded-lg lg:hidden lg:sidebar-expanded:block 2xl:block">
                      <ul className={`mt-1 ${!open && 'hidden'}`}>
                        <li className="mb-1 left-1 last:mb-0">
                          <NavLink
                            end
                            to="/factura"
                            className="block px-5 py-2 truncate transition duration-150 rounded-md hover:bg-red-50 hover:text-black text-slate-400 hover:text-slate-200"
                          >
                            <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                              Emitir Factura
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink
                            end
                            to="/boleta"
                            className="block px-5 py-2 truncate transition duration-150 rounded-md hover:bg-red-50 hover:text-black text-slate-400 hover:text-slate-200"
                          >
                            <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                              Emitir Boleta
                            </span>
                          </NavLink>
                        </li>

                        <li className="mb-1 last:mb-0">
                          <NavLink
                            end
                            to="/ncredito"
                            className="block px-5 py-2 truncate transition duration-150 rounded-md hover:bg-red-50 hover:text-black text-slate-400 hover:text-slate-200"
                          >
                            <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                              Emitir nota de Crédito
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink
                            end
                            to="/ndebito"
                            className="block px-5 py-2 truncate transition duration-150 rounded-md hover:bg-red-50 hover:text-black text-slate-400 hover:text-slate-200"
                          >
                            <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                              Emitir nota de Débito
                            </span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </React.Fragment>
                )
              }}
            </SubMenu>

            <SubMenu activecondition={pathname.includes('remision')}>
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <a
                      href="#0"
                      className={`text-slate-200 text-white  hover:text-white truncate transition duration-150 ${
                        pathname.includes('comprobante') && 'hover:text-slate-200'
                      }`}
                      onClick={(e) => {
                        e.preventDefault()
                        sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                      }}
                    >
                      <div className="flex items-center px-2 py-3 mb-4 text-white rounded-lg hover:text-black hover:bg-white">
                        <div className="flex items-center">
                          <BsFileBarGraphFill className="text-xl" />
                          <span className="ml-4 text-sm font-semibold">Reportes</span>
                        </div>
                        {/* Icon */}
                        <div className="flex ml-2 shrink-0">
                          <BsFillCaretRightSquareFill
                            className={`w-3 h-3 shrink-0 ml-1  fill-current text-[#2ad341] mr-4 ${
                              open && 'transform rotate-90'
                            }`}
                          />
                        </div>
                      </div>
                    </a>

                    <div className="text-white bg-black rounded-lg lg:hidden lg:sidebar-expanded:block 2xl:block">
                      <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                        <li className="mb-1 last:mb-0">
                          <NavLink
                            end
                            to="/"
                            className="block p-1 truncate transition duration-150 rounded-md hover:bg-red-50 hover:text-black text-slate-400 hover:text-slate-200"
                          >
                            <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                              Reporte 1
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink
                            end
                            to="/"
                            className="block p-1 truncate transition duration-150 rounded-md hover:bg-red-50 hover:text-black text-slate-400 hover:text-slate-200"
                          >
                            <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                              Reporte 2
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink
                            end
                            to="/"
                            className="block p-1 truncate transition duration-150 rounded-md hover:bg-red-50 hover:text-black text-slate-400 hover:text-slate-200"
                          >
                            <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expand:opacity-100 2xl:opacity-100">
                              Reporte 3
                            </span>
                          </NavLink>
                        </li>
                        <li className="mb-1 last:mb-0">
                          <NavLink
                            end
                            to="/"
                            className="block p-1 truncate transition duration-150 rounded-md hover:bg-red-50 hover:text-black text-slate-400 hover:text-slate-200"
                          >
                            <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expand:opacity-100 2xl:opacity-100">
                              Reporte 3
                            </span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </React.Fragment>
                )
              }}
            </SubMenu>
          </div>
        </div>
      </div>
    </>
  )
}

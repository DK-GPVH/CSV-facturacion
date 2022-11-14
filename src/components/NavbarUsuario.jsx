import React from 'react'
import { useState, useEffect } from 'react'
import SubMenu from './SubMenu'
import { FaClosedCaptioning, FaTicketAlt, FaUserAlt } from 'react-icons/fa'
import { BsFillCaretRightSquareFill } from 'react-icons/bs'
import { NavLink, useLocation } from 'react-router-dom'

export default function NavbarUsuario({rol , onLogout}) {
  const location = useLocation()
  const { pathname } = location
  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  )

  const logout = ()=>{
    onLogout({salir: true})
  }
  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded)
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded')
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded')
    }
  }, [sidebarExpanded])

  return (
    <SubMenu activecondition={pathname.includes('usuario')}>
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
                  <FaUserAlt className="text-xl" />
                  <span className="ml-4 text-sm font-semibold">{rol}</span>
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

            <div className="text-white bg-[#2F9B86] rounded-lg lg:hidden lg:sidebar-expanded:block 2xl:block">
              <ul className={`px-2 mt-1 ${!open && 'hidden'} z-30`}>
                <li
                  className="mb-1 last:mb-0"
                  onClick={(e) => {
                    e.preventDefault()
                    sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                  }}
                >
                  <NavLink
                    end
                    to="/perfil"
                    className="block p-1 truncate transition duration-150 rounded-md  hover:bg-red-50 hover:text-black text-slate-400 hover:text-slate-200"
                  >
                    <span className="font-medium duration-200  text-md lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                      Perfil
                    </span>
                  </NavLink>
                </li>
                <li
                  className="mb-1 last:mb-0"
                  onClick={(e) => {
                    e.preventDefault()
                    sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                  }}
                >
                  <NavLink
                    end
                    to="/"
                    className="block p-1 truncate transition duration-150 rounded-md  hover:bg-red-50 hover:text-black text-slate-400 hover:text-slate-200"
                  >
                    <span className="font-medium duration-200 text-md lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                      Configuracion
                    </span>
                  </NavLink>
                </li>
                <li
                  className="mb-1 last:mb-0"
                  onClick={(e) => {
                    e.preventDefault()
                    sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                  }}
                >
                  <NavLink
                    end
                    to="/"
                    className="block p-1 truncate transition duration-150 rounded-md  hover:bg-red-50 hover:text-black text-slate-400 hover:text-slate-200"
                    onClick={logout}
                  >
                    <span className="font-medium duration-200 text-md lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                      Salir
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </React.Fragment>
        )
      }}
    </SubMenu>
  )
}

import React from 'react'

import { Button } from '@material-tailwind/react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosCloseCircle } from 'react-icons/io'
import { IoNotificationsCircle } from 'react-icons/io5'
import NavbarUsuario from './NavbarUsuario'

export default function Navbar({ OpenSidebar, setOpenSidebar ,onRol,onLogout}) {
  const Logout=(data)=>{
    onLogout(data)
  }

  return (
    <header className="sticky top-0 bg-[#151423] border-none z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid justify-between h-16 grid-cols-2">
          <div className="col-span-1 md:hidden">
            <Button
              className="m-0 bg-transparent border border-none shadow-none"
              onClick={() => setOpenSidebar('left-0')}
            >
              <GiHamburgerMenu className="w-6 h-6 text-white" />
            </Button>
            <div
              className={`absolute -top-2 p-0 md:hidden ${
                OpenSidebar === 'left-0' ? 'left-64' : '-left-64'
              } z-30 transition-all duration-500`}
            >
              <Button
                className="bg-transparent border border-none shadow-none"
                size="lg"
                onClick={() => setOpenSidebar('-left-64')}
              >
                <IoIosCloseCircle className="w-8 h-8 text-gray-100" />
              </Button>
            </div>
          </div>
          <div className="flex justify-end col-span-1 md:col-start-2">
            <div className="flex px-2 mt-4">
              <button
                className={`w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-red-700 transition duration-150 rounded-full ml-3`}
              >
                <IoNotificationsCircle className="w-8 h-8 " />
              </button>
              <hr className="w-px h-8 mx-3 bg-gray-200 " />
            </div>
            <div className="mt-2">
              <NavbarUsuario rol={onRol} onLogout={(data)=>Logout(data)}></NavbarUsuario>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

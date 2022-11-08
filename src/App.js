import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar'

import Inicio from './pages/Inicio'

/*carpeta admin */
import EmpresaAdmin from './pages/admin/EmpresaAdmin'
import UsuariosAdmin from './pages/admin/UsuariosAdmin'
import ReportesAdmin from './pages/admin/ReportesAdmin'
import ConfiguracionAdmin from './pages/admin/ConfiguracionAdmin'

/*carpeta admin - Empresa */

import Factura from './pages/user/ComprobantesPagos/Factura'
import Boleta from './pages/user/ComprobantesPagos/Boleta'
import NotaDeCredito from './pages/user/ComprobantesPagos/NotaDeCredito'
import NotaDeDedito from './pages/user/ComprobantesPagos/NotaDeDebito'
import ProductosYServicios from './pages/user/ProductosYServicios'
import Perfil from './pages/user/Perfil/Perfil'
import Login from './pages/Login'

function App() {
    const [user,setUser] = useState(null);

    

  return (
    <>
      {
        user ?<div>
        <Sidebar rol={`${user.rol} : ${user.name}`} />
  
        <div>
          <main>
            <div className="bg-white md:ml-64 ">
              <Routes>
                <Route path="/" element={<Inicio />} />
  
                {/*admin paginas principales */}
                <Route path="/empresa" element={<EmpresaAdmin />} />
                <Route path="/usuario" element={<UsuariosAdmin />} />
                <Route path="/reportes" element={<ReportesAdmin />} />
                <Route path="/productosYservicios" element={<ProductosYServicios />} />
                <Route path="/configuracion" element={<ConfiguracionAdmin />} />
  
                {/*admin paginas secundarias*/}
                <Route path="/perfil" element={<Perfil/>} />
  
                {/*carpeta usuario */}
                <Route path="/factura" element={<Factura />} />
                <Route path="/boleta" element={<Boleta />} />
                <Route path="/ncredito" element={<NotaDeCredito />} />
                <Route path="/ndebito" element={<NotaDeDedito />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>:<><Login onUser={(data)=>{setUser(data)}}></Login></>
      }
    </>

  )
}

export default App

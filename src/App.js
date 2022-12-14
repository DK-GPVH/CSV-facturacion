import React, { useState,useEffect } from 'react'
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
import ConfiguracionEmpresa from './pages/admin/ConfiguracionEmpresa'
import { logoutLogin } from './components/helpers/logoutLogin'
import { cookieData } from './components/helpers/CookieDates'
import { refreshAccount } from './components/helpers/refreshAccount'

function App() {
    const [user,setUser] = useState(null);


    useEffect(() => {
      if(document.cookie){
        refreshAccount(cookieData("token"),cookieData("refresh")).then((data)=>{
          if(data.message === "sesion renovada"){
            document.cookie = `token=${data.access_token};path=/;samesite=strict`
            document.cookie = `refresh=${data.refresh_token};path=/;samesite=strict`
            console.log(data);
            setUser({
              name: cookieData("usuario"),
              rol: cookieData("rol"),
              email: cookieData("email")
            })
          }
        })
      } else{
        console.log("No existe una cookie")
      } 
    }, [])
    

    const Logout=(data)=>{
        const token = cookieData("token")
        data.salir&&logoutLogin(user.email,token).then((data)=>{
          if(data.message === "sesion cerrada"){
            console.log(data);
            setUser(null)
          }
        })
    }
    

  return (
    <>
      {
        user ?<div>
        <Sidebar rol={`${user.rol} : ${user.name}`} onLogoutAccount={(data)=>Logout(data)}/>
  
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
                <Route path='/configuracionempresa' element={<ConfiguracionEmpresa/>}/>
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

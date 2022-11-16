import React from 'react'
import logo from '../assets/img/logo.png'

import { Input } from '@material-tailwind/react'
import { Button } from '@material-tailwind/react'
import { useState } from 'react'
import { postLogin } from '../components/helpers/postLogin'
import { cookieData } from '../components/helpers/CookieDates'

export default function Login({onUser}) {

  const [error,setError] = useState(" ");



  const Logear = (dni,pass) =>{
    postLogin(dni,pass).then(data=>{
      if(data.exception){
        setError({error: "credenciales incorrectas verifique su informacion"})
      }else if(data.message==="El usuario ya tiene un token activo"){
        setError({error: "La cuenta ya ha sido iniciada en otro dispositivo, por favor cierre sesion"})
      }else{
        document.cookie = `token=${data.token.access_token};path=/;samesite=strict`
        document.cookie = `refresh=${data.token.refresh_token};path=/;samesite=strict`
        document.cookie = `usuario=${data.user.name};path=/;samesite=strict`
        document.cookie = `rol=${data.user.role};path=/;samesite=strict`
        document.cookie = `email=${data.user.email};path=/;samesite=strict`
        console.log(document.cookie);
        
        console.log(cookieData("refresh"))
        console.log(cookieData("usuario"))

        onUser({
          name: data.user.name,
          rol : data.user.role,
          email : data.user.email
        })
      }
    })
  }

  function submitHandler(e){
    e.preventDefault();
    const dni = e.target.elements.dniValue.value.trim();
    const password = e.target.elements.passValue.value.trim();


    if(dni.length !==8){
      setError({error : "Cantidad de digitos de dni incorrectos"})
    }else if(password.length < 8){
      setError({error: "La contraseña debe tener por lo menos 8 digitos"})
    }else{
      Logear(dni,password);
    }   
    console.log(typeof dni);
  }
  
  return (
    <div className="flex justify-center  h-screen bg-gradient-to-r  from-[#26306A] via-[#2B657F] to-[#2F9B86] overscroll-contain overflow-y-visible">
    
    <div className="flex items-center justify-center">
      <div className="flex justify-center backdrop-blur-sm bg-black/30 p-4 rounded-2xl">
        <div className="bg-white py-8 px-4 rounded-2xl">
          <div className="flex flex-col justify-center ">
            <div className="flex justify-center h-32 w-[100%] " >
              <img src={logo} alt="Logo" />
            </div>
            <h1 className="pt-4 font-sans text-4xl font-bold text-center">
              LOGIN
            </h1>
            <form  className="flex flex-col justify-center" onSubmit={submitHandler}>
              <div className="p-2">
                <Input color="teal" label="DNI" id="dniValue" maxLength={8} minLength={8} pattern="[1-9]{8}"/>
              </div>
              <div className="p-2">
                <Input
                  color="teal"
                  label="CONTRASEÑA"
                  type="password"
                  id="passValue"
                  minLength={8}
                />
              </div>
              <span className="text-right text-[#2F9B86]">
                Recuperar Acceso
              </span>
              <div className="flex justify-center p-2">
                <Button
                  className="w-[80%] bg-[#2F9B86]"
                  value="INGRESAR"
                  type="submit"
                  id="btnIngresar"
                >
                  Ingresar
                </Button>
              </div>
              {
                error.error&&<div
                className="flex justify-center p-3 m-2 text-red-700"
                id="loginMessage"
                >{`${error.error}`}</div>
              }  
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

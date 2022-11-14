export const postLogin = async(dni,password)=>{
    const formData = new FormData();
    formData.append('dni', dni);
    formData.append('password', password)
    const res = await fetch('https://facturacion.sirusoluciones.com/api-v1/auth/login',{
        method: 'POST',
        body: formData,
        mode : 'cors',
        headers:{
            'Accept': 'application/json'
        },
    })
    const data= await res.json();
    return data
}
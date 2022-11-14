export const logoutLogin = async(email,token)=>{
    const formData = new FormData();
    formData.append('email', email)
    const res = await fetch('https://facturacion.sirusoluciones.com/api-v1/auth/logout',{
        method: 'POST',
        body: formData,
        mode : 'cors',
        headers:{
            'Accept': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
    })
    const data= await res.json();
    return data
}
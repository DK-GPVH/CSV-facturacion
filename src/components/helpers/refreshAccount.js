export const refreshAccount = async(token,refresh_token)=>{
    const formData = new FormData();
    formData.append('refresh_token', refresh_token)
    const res = await fetch('https://facturacion.sirusoluciones.com/api-v1/auth/refresh',{
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
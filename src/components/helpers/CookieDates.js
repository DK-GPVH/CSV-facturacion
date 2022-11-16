  
  export const cookieData = (dato)=>{
  const name = dato+"=";
        const separate = document.cookie.split(';');
        for (let i = 0;i<separate.length;i++){
          var valor = separate[i];
          while(valor.charAt(0)=== ' ') valor=valor.substring(1);
          if(valor.indexOf(name)===0) return(valor.substring(name.length, valor.length))
        }
        return
  }
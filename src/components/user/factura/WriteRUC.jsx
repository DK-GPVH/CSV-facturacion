import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function WriteRUC({onRUC}) {
    const [Input, setInput] = useState(null);
    const onInputChange=({target})=>{ 
        setInput(target.value);
    }
    const writeValue=(event)=>{  
        event.preventDefault();
        const value = Input.trim();
        if(value.length<11)return;
        onRUC({numero:value});
    }   

    return (
        <div className="flex">
        <span className="inline-flex items-center px-3 text-sm text-white bg-[#2F9B86] rounded-l-md ">
        {/*boton para buscar el RUC */}
            <button onClick={writeValue}>
                <FaSearch />
            </button>
        </span>
        <input
            type="number"
            className="w-full rounded-r-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
            placeholder="Ingrese RUC"
            onChange={onInputChange}
            value={Input}
        />
        </div>
    )
}

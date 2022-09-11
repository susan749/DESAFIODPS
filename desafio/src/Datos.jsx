import React, { useState} from "react";
import Resultado from "./resultado";

export default function Datos(){

    const [dato, setDato]=useState()
    const [datos,setDatos] = useState([{
    }])


    const handleChange = e =>
    {
        let data = {};
        data[e.target.name]=e.target.value;
        setDato({...dato,...data})
    }
    const handleClick = e =>
    {
        if (Object.keys(dato.sexo).length === 0 || dato.sexo.trim() === '') {
        return;
        }
            setDatos([...datos, dato])
    }
    
    return  <>
    {/* <h1>
        Datos del paciente
    </h1> */}
    <form onSubmit={e=>e.preventDefault()}>
    <div className="App">
        <input type="text" placeholder="nombres" name="nombres" onChange={handleChange} />
        <input type="text"  placeholder="apellidos" name="apellidos" onChange={handleChange}/>
        <input type="text"  placeholder="sexo" name="sexo"  onChange={handleChange}/>
        <input type="text"  placeholder="dui" name="dui" onChange={handleChange}/>
        <input type="text"  placeholder="fecha nacimiento" name="fechaNacimiento" onChange={handleChange}/>
        <textarea type="text"  placeholder="direccion" name="direccion" onChange={handleChange}/>
        <input type="text"  placeholder="municipio" name="municipio" onChange={handleChange}/>
        <input type="text"  placeholder="departamento" name="departamento" onChange={handleChange}/>
        <div>
        <button  onClick={handleClick} >Guardar</button>
    </div>
    </div>
    
    </form>{datos.map((value)=> (<Resultado dato={value} />))}
</>
}
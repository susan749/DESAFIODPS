import React from "react";
import './App.css';
const Resultado =({dato})=>
{
    return(
<>   
     <div className="App">
            <h6>{dato.nombres}</h6>
             <h6>{dato.apellidos}</h6>
             <h6>{dato.sexo}</h6>
             <h6>{dato.dui}</h6>
             <h6>{dato.fechaNacimiento}</h6>
             <h6>{dato.direccion}</h6>
             <h6>{dato.municipio}</h6>
             <h6>{dato.departamento}</h6>

    </div>
</>
    );

}

export default Resultado
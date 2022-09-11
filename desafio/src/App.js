import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import Menu from './Menu';
import Datos from './Datos';
import Inicio from './Inicio';
import Conversiones from './Conversiones';

function App() {

  let com
  switch (window.location.pathname) {
    case "/":
      com = <Inicio/>
      break;
      case "/Datos":
        com = <Datos/>
        break;
      case "/Conversiones":
        com = <Conversiones/>
        break;
  }
  return(
    <div className="App">
      <Menu/>
      {com}
    </div>
  )

  // const [dato,setDato] = useState(0);
  // const [respuesta, SetRespuesta] = useState(0);
  // const [dato2,setDato2] = useState(0);
  // const [respuesta2, SetRespuesta2] = useState(0);
  // const [dato3,setDato3] = useState(0);
  // const [respuesta3, SetRespuesta3] = useState(0);

  // const onzas = () => {
           
  //   return (dato)/0.0625
  // }

  // const kilo = () => {
           
  //   return (dato)*0.453592
  // }

  // const gramo = () => {
           
  //   return (dato)/0.00220462
  // }

  // useEffect(()=> {
  //   SetRespuesta(onzas())
  // }, [dato,respuesta]);

  // useEffect(()=> {
  //   SetRespuesta2(kilo())
  // }, [dato2,respuesta2]);

  // useEffect(()=> {
  //   SetRespuesta3(gramo())
  // }, [dato3,respuesta3]);

  // return (
  //   <div className="App">
  //     <label>Libras:</label>
  //     <input type="text" value={dato} onChange={(e) => setDato(e.target.value)}></input>
  //     <label>a onzas: {respuesta}</label>
  //     <label>Libras:</label>
  //     <input type="text" value={dato2} onChange={(e) => setDato2(e.target.value)}></input>
  //     <label>a kilogramos = {respuesta2}</label>
  //     <label>Libras:</label>
  //     <input type="text" value={dato3} onChange={(e) => setDato3(e.target.value)}></input>
  //     <label>a Gramos = {respuesta3}</label>
  //   </div>
  // );
}

export default App;

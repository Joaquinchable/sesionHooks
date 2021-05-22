import React,{useState} from 'react';
import Usuarios from "./Usuarios"
import Profes from "./Profes"
import Tareas from "./Tareas"

const Aplic = () => {
  const [mostrarUsuarios, setMostrarUsuarios] = useState(false);
  const [mostrarProfes,  setMostrarProfes] = useState(false);
  const [mostrarTareas, setMostrarTareas] = useState(false);

  const rederizarUsuarios = () => {
     if(mostrarUsuarios){
         return <Usuarios />
     }

  }

    return (
        <div>
            <button  onClick={() => setMostrarUsuarios(!mostrarUsuarios)}>Usuarios</button>
            {rederizarUsuarios()}
             <br/>

            <button onClick={() => setMostrarProfes(!mostrarProfes)}>Profesores</button>
            {mostrarProfes ? <Profes /> : ''}
            <br/>

            <button onClick={() => setMostrarTareas(!mostrarTareas)}>Tareas</button>
            {mostrarTareas && <Tareas />}
             <br/>
       </div>
    )
}

export default Aplic;

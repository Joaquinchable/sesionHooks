import React, { useState } from "react";

const InputEscuela = () => {
  const [nombre, setNombre] = useState(" ");
  const [state, setState] = useState({
    profes: 0,
    alumnos: 0,
  });

  const editarNombre = (event) => setNombre(event.target.value);

//   const editarProfes = (event) =>
//     setState({
//       ...state,
//       profes: event.target.value,
//     });

// pasar todos mis atributos de mi estado en un objeto en una sola funcion
  const editarEstado = (atributo) => (event) =>
    setState({
      ...state,
      [atributo]: event.target.value,
    });

  return (
    <div>
      <input type="text"  onChange={editarNombre} />
      {nombre}
      <br /> <br />
      <input type="number" onChange={editarEstado('alumnos')}  />
      {state.alumnos}
      <br /> <br />
      <inputn type="number" onChange={editarEstado('profes')}  />  
      {state.profes}
      <br /> <br />
    </div>
  );
};

export default InputEscuela;

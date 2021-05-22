import React, {useState} from 'react';
const RenderizadoCondicional  = () => {

    const [mostrarUsuarios , setMostrarUsuarios] = useState(true)
    const componente = <span> Hola Mundo</span>
    const Vacio = "No hay nada"

    const renderizarUsuarios = () => {
    if(mostrarUsuarios) return componente;

      return Vacio;

    }

    return (
        <div>
        {/* Tipos de renderizado condicional  */}
        {/* Directa { mostrarUsuarios && componente  } */}
        {/* {condicionParaRevisar && componenteParaRenderizar} */}
        {/* {mostrarUsuarios ?  componente : Vacio } */}
        {/* Ternaria - puede ser usada para renderizar 2 componentes dependiendo la condición. */}
        {/* Por función - llamamos una función y retornamos lo que queramos imprimir. */}
        {renderizarUsuarios()}


        </div>
    )
}

export default RenderizadoCondicional ;

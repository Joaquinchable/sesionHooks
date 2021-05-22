import React, {useState} from 'react';

// Comparacion de Contador con componentes de clase  Vs Hooks.
// contador
const HookUseState = () => {

 // state incia mi estado  setState actualiza mi estado con el superpoder de mi hook useState()
//    const [state, setState ] = useState()

// ejemplo de lo que puede ser un estado y los tipos de datos que puede llevar

const [modal , setModal] = useState(true);

const [luz , setLuz] = useState(true);

const [fruta,setFruta]= useState([]);

const [user , setUser] = useState({

     nombre: "",
     edad:" ",
     nacimiento: " "

});

const [contador, setContador ] = useState(0);



    return (
        <div>
            Hola Mundo desde los Hooks;
        </div>
    )


}

export default HookUseState;

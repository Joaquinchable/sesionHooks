import React, { useState } from "react";
import Bottom from "./Bonton"
const Contador = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

 
  return (
    <div>
     <Bottom  
      texto={contador}
      handleClick={handleClick}/>
    </div>
  );
};

export default Contador;

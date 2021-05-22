import React,{useState} from 'react';


const HookRefactor = () => {
 const [ color , setColor  ] = useState("pink");


    return (
        <div style={{ backgroundColor: color }} className="luz" >
            
        </div>
    )
}

export default HookRefactor;
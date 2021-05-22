import React from 'react';
import PropTypes from 'prop-types';


const Boton = (props) => {
    return (
        <div>
             <button onClick={props.handleClick}>
               {props.texto}
             </button>

        </div>
    )
}

Boton.propTypes = {
    texto: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
 }

export default Boton;

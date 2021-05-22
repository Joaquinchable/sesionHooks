import React from 'react'

function Profes() {
const [profes, setProfes] = React.useState([]);

const didMount = () => {

    setTimeout( 
      ()=> setProfes(["Joaquin", "Betito", "Uriel", ]),

        5000);}

React.useEffect(didMount,[ ])

    return (
        <div>
            
            {

            profes.length ? profes.map((prfs) => `${prfs}-`) : "..."

            }



        </div>
    )
}

export default Profes;

import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
       <div className="smallcard-container">
        <img src={ props.imagem } />
        <div>
        <h4>{props.tipo}</h4>
        <p>{props.adicional}</p>
        </div>
    </div> 
    )
}

export default CardPequeno;
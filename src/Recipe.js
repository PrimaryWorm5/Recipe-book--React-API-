import React from 'react';

const Recipe = ({title,calories,image,cuisine}) =>{
    return(
        <div>
            <h1>{title} de la {cuisine}</h1>
            <p>{calories}</p>
            <img src={image} alt=""></img>
        </div>
    );
}
export default Recipe;
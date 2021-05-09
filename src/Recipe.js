import React from 'react';

const Recipe = ({title,calories,image,cuisine,ingredients}) =>{
    return(
        <div className="block">
            <h1>{title} de la {cuisine}</h1>
            <p>Calories:{calories}</p>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={image} alt=""></img>
        </div>
    );
}
export default Recipe;
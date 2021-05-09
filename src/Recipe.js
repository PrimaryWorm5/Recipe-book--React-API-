import React from 'react';
import style from './recipe.module.css'
const Recipe = ({title,calories,image,cuisine,ingredients}) =>{
    return(
        <div className={style.recipe}>
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
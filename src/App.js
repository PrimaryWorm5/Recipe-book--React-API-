import React,{useEffect, useState} from "react";
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = '5891c81b';
  const APP_KEY = '6f698fc451bd5741ff86d62e812945a5';
 
  const [recipes,setRecipes] = useState([]);
  useEffect(() =>{
    getRecipes();
  },[]);

const getRecipes = async()=>{
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data)
}
  return(
    <div className="App">
      <form className="">
        <input type="text"/>
        <button
         className="search-button"
         type="submit"
        >
        </button>
      </form>
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        cuisine={recipe.recipe.cuisineType}
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}/>
      ))};
    </div>
  )
}

export default App;

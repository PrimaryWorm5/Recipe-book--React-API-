import React,{useEffect, useState} from "react";
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = '5891c81b';
  const APP_KEY = '6f698fc451bd5741ff86d62e812945a5';
  
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken')

  useEffect(() =>{
    getRecipes();
  },[query]);

const getRecipes = async()=>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);

}

  const updateSearch = e =>{
    setSearch(e.target.value)
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button
         className="search-button"
         type="submit"
        >
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        cuisine={recipe.recipe.cuisineType}
        calories={Math.floor(recipe.recipe.calories)} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))};
    </div>
  </div>
  )
}

export default App;

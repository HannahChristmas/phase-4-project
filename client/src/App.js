import React, {useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css';
import NewRecipeForm from "./NewRecipeForm";
import NavBar from "./NavBar"
import RecipeList from "./RecipeList"

function App() {
  const [recipes, setRecipes] = useState([])
  console.log("recipes from app", recipes)
  useEffect(() => {
    fetch("/recipes")
      .then(r => r.json())
      .then(recipes => setRecipes(recipes));
      
  },[]);

  return (
    <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<RecipeList recipes={recipes}/>}/>
            <Route path="/recipes" element={<RecipeList recipes={recipes}/>}/>
            <Route path="/addrecipe" element={<NewRecipeForm/>}/> 
          </Routes>
    </div>
  );
}

export default App;

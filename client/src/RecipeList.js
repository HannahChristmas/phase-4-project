// import { useState } from "react";
import RecipeCard from "./RecipeCard"
function RecipeList({recipes}) {
    // const [recipes] = useState([])
    console.log("recipes from recipe card", recipes)

    return(
        <div>
            <h1>Here are all da recipes</h1>
            <RecipeCard recipes={recipes}/>
        </div>
    )
}

export default RecipeList;
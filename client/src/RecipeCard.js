function RecipeCard({recipes}){
console.log("hello", recipes)

const mappedRecipes = recipes.map((recipe) => (
    <div>
        <h1>Name: {recipe.title}</h1>
    </div>
))
    return(
            <div>
            {mappedRecipes}
        </div>
        
    )
}

export default RecipeCard;
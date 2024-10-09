import React from 'react'

 

export default function Recipe( { recipeData }: IRecipeProps ) {
  return (
    <div>
        <h2>{recipeData.name}</h2>

        <h3>Ingredients</h3>
        <ul>
        {recipeData.ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>))}
        </ul>

        <h3>Instructions</h3>
        <ol>
        {recipeData.instructions.map((instruction, index) => (<li key={index}>{instruction}</li>))}
        </ol>

    </div>
  )
}

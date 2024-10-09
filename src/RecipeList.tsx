import React from 'react'
import Recipe from './Recipe.tsx'

export default function RecipeList( { onBack, recipeData }: IRecipeProps ) {
  return (
    <div>
        <button onClick={onBack}>Back</button>

         {recipeData.map((recipe, index) => (<Recipe key={index} recipeData={recipe} />))}
    </div>
  )
}

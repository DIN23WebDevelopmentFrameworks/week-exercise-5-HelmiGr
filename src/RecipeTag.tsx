import React from 'react'

export default function RecipeTag( { tagName, onSelectTag }: IRecipeTagProps ) {
  return (
    <div>
        <button
         onClick={() => onSelectTag(tagName)}>{tagName}
        </button>
    </div>
  )
}

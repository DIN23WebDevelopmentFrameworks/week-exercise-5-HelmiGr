import React from 'react'
import RecipeTag from './RecipeTag'

export default function RecipeTagList( { tagList, onSelectTag }: IRecipeTagProps ) {
  return (
    <div>
        {tagList.map((tag) => (<RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />))}
    </div>
  )
}

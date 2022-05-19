import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({ recipes }) {
  return (
    <>
      <div>
        {recipes.map((recipe) => {
          //   Is a must to add an ID, so, react knows which components needs to be re-rendered.
          return <Recipe key={recipe.id} {...recipe} />
        })}
      </div>
      <button>Add recipe</button>
    </>
  )
}

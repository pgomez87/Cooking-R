import React, { useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'

export default function RecipeList({ recipes }) {
  const { handleRecipeAdd } = useContext(RecipeContext)
  return (
    <div className='recipe-list'>
      <div>
        {recipes.map((recipe) => {
          //   Is a must to add an ID, so, react knows which components needs to be re-rendered.
          return <Recipe key={recipe.id} {...recipe} />
        })}
      </div>
      <div className='recipe-list__add-recipe-btn-container'>
        <button className='btn btn--primary' onClick={handleRecipeAdd}>
          Add recipe
        </button>
      </div>
    </div>
  )
}

import './RecipeImgs.css';
import React from 'react' ;

function RecipeImgs({props}) {
  return (
    <div className='recipe-imgs-container'>
      <div className='recipe-card'>
        <p className='recipe-name'>{props['recipe']['label']}</p>
        <div className='recipe-details'>
          <img src= {props['recipe']['image']} alt={props['recipe']['label']}/>
          <div className='recipe-text'>
            <p className='diet-label'>{props['recipe']['dietLabels'].join(', ')}</p>
            <a href={props.recipe.url} target='_blank' rel="noreferrer">
              <div className='recipe-button'>Recipe</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeImgs;
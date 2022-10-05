function RandomRecipe ({props, random}) {
  const randomNum = random;
  
  return (
    <div className="item-container" data-testid="random-imgs">
      {props && <p className="recipe-label">{props[randomNum].recipe.label}</p>}
      <div className="img-box">
          {props && <img className="home-imgs" src={props[randomNum].recipe.image} alt={props[randomNum].recipe.label} />}
          <a href={props && props[randomNum].recipe.url} className="img-overlay" target='_blank' rel="noreferrer">
            {props && <p>{props[randomNum].recipe.dietLabels.join(',  ')}</p>}    
            {props && <p>{props[randomNum].recipe.dishType.join(',  ')}</p>}     
          </a>
      </div>
    </div>
  );
}

export default RandomRecipe;
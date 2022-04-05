function RandomRecipe1 ({props}) {

  const randomNum = Math.floor(Math.random() * 9);
  
  return (
    <div className="item-container">
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

export default RandomRecipe1;
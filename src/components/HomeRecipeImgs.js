function HomeRecipeImgs ({props, random}) {
  
  return (
    <div className="item-container" data-testid="random-imgs">
      {props && <p className="recipe-label">{props[random].recipe.label}</p>}
      <div className="img-box">
          {props && <img className="home-imgs" src={props[random].recipe.image} alt={props[random].recipe.label} />}
          <a href={props && props[random].recipe.url} className="img-overlay" target='_blank' rel="noreferrer">
            {props && <p>{props[random].recipe.dietLabels.join(',  ')}</p>}    
            {props && <p>{props[random].recipe.dishType.join(',  ')}</p>}     
          </a>
      </div>
    </div>
  );
}

export default HomeRecipeImgs;
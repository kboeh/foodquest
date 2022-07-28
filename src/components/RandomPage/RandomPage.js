import './RandomPage.css';
import {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import RecipeImgs from '../RecipeImgs/RecipeImgs.js';
import info from "../Nav/imgs/info.png";
import random from "../Nav/imgs/random.png";
import home from "../Nav/imgs/home.png";
import tomato from "../Nav/imgs/tomato.png";
import search from "../Nav/imgs/search.png";
import bowl from "../Nav/imgs/bowl.png";

function RandomPage() {
  //stores text entered into searchfield for use in IngredientResult
  const [storedQuery, setStoredQuery] = useState([]);
  localStorage.setItem("searchResults", storedQuery);

  const YOUR_APP_ID = '18ced154';
  const YOUR_APP_KEY = 'd6b34df41b0d12e9d59922fcd6c6aa3d';

  const [hits, setHits] = useState([]);
  const query = useRef(randomFood());
  const health = useRef(randomHealth());

  function randomFood() {
  const food = ['apple', 'edamame', 'banana', 'mango', 'peach', 'plum', 'almond', 'avocado', 'tomato', 'bean', 'spinach', 'broccoli', 'blueberry', 'strawberry', 'melon', 'grape', 'corn', 'pumpkin', 'cauliflower', 'carrot', 'cucumber', 'eggplant', 'mushroom', 'pea', 'zucchini'];
  const ranFoodNum = Math.floor(Math.random() * 25);
  return food[ranFoodNum];
  };

  function randomHealth() {
    const diet = ['dairy-free', 'gluten-free', 'peanut-free', 'tree-nut-free', 'wheat-free', 'soy-free', 'fish-free', 'shellfish-free', 'egg-free', 'low-sugar', 'vegan', 'vegetarian', 'paleo'];
    const ranDietNum = Math.floor(Math.random() * 13);
    return diet[ranDietNum];
  };

  //url used when searching recipes on another page, but rendering on this page
  const onLoadUrl = `https://api.edamam.com/search?q=${query.current}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${health.current}&to=30`;

  useEffect (()=>{
    async function recipes() {
      try {
        const request = await Axios.get(onLoadUrl);
        setHits(request.data.hits);
      } 
      catch (e) {
        alert ('Oh no! Only 10 searches per minute please. Try again in 60 seconds.');
        console.log(e);
      }
    }
    recipes();
  }, [onLoadUrl]);

  //reloads page to get new random search results
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <header className='nav-header'> 
          <Link to = "/foodquest/"><div className="nav-logo"><img  src={tomato} alt="tomato" /></div></Link>
        
        <form className="nav-form">
          <Link to = "/foodquest/ingredient">
              <button>
                  <img className='magnifier' src={search} alt="magnifier" />
              </button>
          </Link>
          <input value={storedQuery} onChange={(e)=> setStoredQuery(e.target.value)} required type="text" placeholder="Quick search by ingredients" />
        </form>

        <nav className="nav">
                <ul>
                    <li className="nav-home"><Link to="/foodquest/"><img src={home} alt="home icon" />Home</Link></li>
                    <li className="nav-search"><Link to="/foodquest/search"><img src={bowl} alt="bowl of food icon" />Search</Link></li>
                    <li onClick= {refreshPage}><button className='random-button'><img src={random} alt="dice icon" />Random</button></li>
                    <li><Link to="/foodquest/about"><img src={info} alt="exclamation point icon" />About</Link></li>
                </ul>
        </nav>
      </header>   
      
      <div className='random-results-container'>
        {hits.map((index) => {
          return <RecipeImgs props={index} key={index.recipe.uri} />
        })}
      </div>
    </div>
  );
}

export default RandomPage;
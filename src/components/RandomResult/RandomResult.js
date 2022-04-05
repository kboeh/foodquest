import './RandomResult.css';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import RecipeImgs from '../RecipeImgs/RecipeImgs.js';
import info from "../Nav/imgs/info.png";
import random from "../Nav/imgs/random.png";
import home from "../Nav/imgs/home.png";
import tomato from "../Nav/imgs/tomato.png";
import search from "../Nav/imgs/search.png";
import bowl from "../Nav/imgs/bowl.png";

function RandomResult() {
  //stores text entered into searchfield for use in IngredientResult
  const [storedQuery, setStoredQuery] = useState([]);
  localStorage.setItem("searchResults", storedQuery);

  const YOUR_APP_ID = '18ced154';
  const YOUR_APP_KEY = 'd6b34df41b0d12e9d59922fcd6c6aa3d';

  const [ingr] = useState(randomFood());
  function randomFood () {
      const food = {
        1: 'apple',
        2: 'potato',
        3: 'banana',
        4: 'mango',
        5: 'peach',
        6: 'plum',
        7: 'almond',
        8: 'avocado',
        9: 'tomato',
        10: 'bean',
        11: 'spinach',
        12: 'broccoli',
        13: 'blueberry',
        14: 'strawberry',
        15: 'melon',
        16: 'grape',
        17: 'corn',
        18: 'pumpkin',
        19: 'cauliflower',
        20: 'carrot',
        21: 'cucumber',
        22: 'eggplant',
        23: 'mushroom',
        24: 'pea',
        25: 'zucchini'
      }
      const randomNumb = Math.floor(Math.random() * 25) + 1;
      return food[randomNumb];
 }

  const [health] = useState(randomHealth());
  function randomHealth () {
    const healthLabel = {
      1: 'dairy-free',
      2: 'gluten-free',
      3: 'peanut-free',
      4: 'tree-nut-free',
      5: 'wheat-free',
      6: 'soy-free',
      7: 'fish-free',
      8: 'shellfish-free',
      9: 'egg-free',
      10: 'low-sugar',
      11: 'vegan',
      12: 'vegetarian',
      13: 'paleo'
    }
    const randomNumb = Math.floor(Math.random() * 13+1);
    return healthLabel[randomNumb];
  }

  //url used when searching recipes on another page, but rendering on this page
  const onLoadUrl = `https://api.edamam.com/search?q=${ingr}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${health}&to=30`;

  const [hits, setHits] = useState([]);
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

export default RandomResult;
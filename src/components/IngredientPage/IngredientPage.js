import './IngredientPage.css';
import {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import RecipeImgs from '../RecipeImgs/RecipeImgs.js';
import info from "../Nav/imgs/info.png";
import random from "../Nav/imgs/random.png";
import home from "../Nav/imgs/home.png";
import tomato from "../Nav/imgs/tomato.png";
import search from "../Nav/imgs/search.png";
import bowl from "../Nav/imgs/bowl.png";

function IngredientPage() {
  //string entered into 'quick search by ingredients'
  const stored = localStorage.getItem("searchResults");
  
  const [query, setQuery] = useState(stored);
  const [hits, setHits] = useState([]);
  const health = useRef(randomHealth());

  function randomHealth () {
    const diet = ['dairy-free', 'gluten-free', 'peanut-free', 'tree-nut-free', 'wheat-free', 'soy-free', 'fish-free', 'shellfish-free', 'egg-free', 'low-sugar', 'vegan', 'vegetarian', 'paleo'];
    const ranDietNum = Math.floor(Math.random() * 13);
    return diet[ranDietNum];
  };

  //api call when search was done on another page
  useEffect (()=>{
    async function recipes() {
      const storedUrl = `http://localhost:8000/food?q=${stored}&health=${health.current}`
      const request = await axios.get(storedUrl);
      if (request.data.hits === 0) {
        alert ('No results! Please try again.');
      }
      setHits(request.data.hits);
    }
    recipes();
  }, [stored]);

  //api call when search was done on this page
  const recipes = async () => {
    const url = `http://localhost:8000/food?q=${query}&health=${health.current}`
    try {
      const request = await axios.request(url);
      if (request.data.hits === 0) {
        alert ('No results! Please try again.');
      }
      setHits(request.data.hits);
    }
    catch (e) {
      alert ('Oh no! Only 10 searches per minute please. Try again in 60 seconds.');
      console.log(e);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    recipes();
  }

  return (
    <div>
      <header className='nav-header'> 
          <Link to = "/foodquest/"><div className="nav-logo"><img  src={tomato} alt="tomato" /></div></Link>
        
          <form className="nav-form" onSubmit={onSubmit}>     
            <button>
                <img className='magnifier ingredient-search-button' src={search} alt="magnifier" />
            </button>
          
            <input value={query} onChange={(e)=> setQuery(e.target.value)} type="text" placeholder="Quick search by ingredients" />
          </form> 
        
        <nav className="nav">
                <ul>
                    <li className="nav-home"><Link to="/foodquest/"><img src={home} alt="home icon" />Home</Link></li>
                    <li className="nav-search"><Link to="/foodquest/search"><img src={bowl} alt="bowl icon" />Search</Link></li>
                    <li><Link to="/foodquest/random"><img src={random} alt="dice-icon" />Random</Link></li>
                    <li><Link to="/foodquest/random"><img src={info} alt="info icon" />About</Link></li>
                </ul>
        </nav>
      </header>
      
      <div className='ingredient-results-container'>
      {hits.map((index) => {
          return <RecipeImgs props={index} key={index.recipe.uri} />
        })}
      </div>

    </div>
  );
}

export default IngredientPage;
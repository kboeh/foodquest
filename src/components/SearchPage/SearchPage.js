import './SearchPage.css';
import {useState, useRef} from 'react';
import axios from 'axios';
import RecipeImgs from '../RecipeImgs/RecipeImgs.js';
import info from "../Nav/imgs/info.png";
import random from "../Nav/imgs/random.png";
import home from "../Nav/imgs/home.png";
import tomato from "../Nav/imgs/tomato.png";
import bowl from "../Nav/imgs/bowl.png";
import {Link} from 'react-router-dom';

function SearchPage() {

  // value of search field
  const [query, setQuery] = useState([]);
  //API results
  const [hits, setHits] = useState([]);
  //checkboxes
  const [check, setCheck] = useState([]);
   //for scroll event after search results
  const scrollResults = useRef(null);
  
  // concats checkbox values to url
  let checkbox = () => {
    let boxes = document.forms[0];
    let str = "";
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].checked) {
        str = str + boxes[i].value;
      }
    }
    setCheck(str);
  };

  const recipes = async () => {
    const url = `https://yellow-tadpole-shoe.cyclic.app/food?q=${query}${check}`
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

  //when form is submitted
  const onSubmit = (e) => {
    //prevents the app from reloading upon every form submit
    e.preventDefault();
    recipes();
    //scrolls down to results
    setTimeout(function() {window.scrollTo({
      top: scrollResults.current.offsetTop,
      behavior: 'smooth'
    })}, 500);
  }

  return (
    <div className='search-container'>
      <div className='nav-header'>
        <Link to = "/foodquest/"><div className="nav-logo"><img src={tomato} alt="tomato" /></div></Link>
        <nav className="nav">
          <ul>
            <li className="nav-home"><Link to="/foodquest/"><img src={home} alt="home icon" />Home</Link></li>
            <li><Link to="/foodquest/search"><img src={bowl} alt="food icon" />Search</Link></li>
            <li><Link to="/foodquest/random"><img src={random} alt="dice icon" />Random</Link></li>
            <li><Link to="/foodquest/about"><img src={info} alt="info icon" />About</Link></li>
          </ul>
        </nav>
      </div>
      <div className='search-input-container'>
        <h1>Recipe Search</h1>
        <form className='search-form' onSubmit={onSubmit}>
          <input className='search-field' type='text' placeholder='Enter ingredients' 
          //target.value gets the value from a target event
          value={query} onChange={(e)=> setQuery(e.target.value)}/>
          <div className='checkbox-container'>
            <div className='checkboxes'>
              <label className='check-option'><input type="checkbox" value="&health=dairy-free" onChange={checkbox}/>dairy-free</label>
              <label className='check-option'><input type="checkbox" value="&health=gluten-free" onChange={checkbox}/>gluten-free</label>
              <label className='check-option'><input type="checkbox" value="&health=peanut-free" onChange={checkbox}/>peanut-free</label>
              <label className='check-option'><input type="checkbox" value="&health=tree-nut-free" onChange={checkbox}/>tree-nut-free</label>
              <label className='check-option'><input type="checkbox" value="&health=wheat-free" onChange={checkbox}/>wheat-free</label>
              <label className='check-option'><input type="checkbox" value="&health=soy-free" onChange={checkbox}/>soy-free</label>
            </div>
            <div className='checkboxes'>
            <label className='check-option'><input type="checkbox" value="&health=fish-free" onChange={checkbox}/>fish-free</label>
              <label className='check-option'><input type="checkbox" value="&health=shellfish-free" onChange={checkbox}/>shellfish-free</label>
              <label className='check-option'><input type="checkbox" value="&health=egg-free" onChange={checkbox}/>egg-free</label>
              <label className='check-option'><input type="checkbox" value="&health=vegan" onChange={checkbox}/>vegan</label>
              <label className='check-option'><input type="checkbox" value="&health=vegetarian" onChange={checkbox}/>vegetarian</label>
              <label className='check-option'><input type="checkbox" value="&health=paleo" onChange={checkbox}/>paleo</label>
            </div>
          </div>
          <button type='submit' ref={scrollResults}>Get Recipe</button>
        </form>
      </div>
      <div className='search-result-container'>
        {/* doesn't show until 'hits' object is called from api */}
        {hits.map((index) => {
          return <RecipeImgs props={index} key={index.recipe.uri} />
        })}
      </div>
    </div>
  );
}

export default SearchPage;
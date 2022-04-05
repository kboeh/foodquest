import './SearchResult.css';
import {useState} from 'react';
import Axios from 'axios'
import RecipeImgs from '../RecipeImgs/RecipeImgs.js'
import Nav from "../Nav/Nav.js";

function SearchResult() {
  // connects to API
  const YOUR_APP_ID = '18ced154';
  const YOUR_APP_KEY = 'd6b34df41b0d12e9d59922fcd6c6aa3d';
  // value of search field (set to empty array)
  const [query, setQuery] = useState([])
  
  const [check, setCheck] = useState([])
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}${check}&to=30`
  
  //concats checkbox values to url
  let checkbox = () => {
    let boxes = document.forms[1];
    let str = "";
    let i = 0;
    for (i = 0; i < boxes.length; i++) {
      if (boxes[i].checked) {
        str = str + boxes[i].value;
      }
    }
    setCheck(str)
  }
  
  const [hits, setHits] = useState([])
  const recipes = async () => {
    try {
      const request = await Axios.get(url);
      setHits(request.data.hits);
    }
    catch (e) {
      alert ('Oh no! Only 10 searches per minute please. Try again in 60 seconds.');
      console.log(e);
    };
  };
  
  //when form is submitted
  const onSubmit = (e) => {
    //prevents the app from reloading upon every form submit
    e.preventDefault();
    //gets recipe data
    recipes()
  }

  return (
    <div className='search-container'>
      <Nav />
      <div className='search-input-container'>
        <h1>Recipe Search</h1>
        <form className='search-form' onSubmit={onSubmit}>
          <input className='search-field' type='text' placeholder='Enter Ingredients' 
          //target.value gets the value from a target event
          //onChange executes when a user enters text
          value={query} onChange={(e)=> setQuery(e.target.value)}/>
          <div className='checkbox-container'>
            <div className='checkboxes'>
              <div className='check-option'><input type="checkbox" value="&health=dairy-free" onChange={checkbox}/>dairy-free</div>
              <div className='check-option'><input type="checkbox" value="&health=gluten-free" onChange={checkbox}/>gluten-free</div>
              <div className='check-option'><input type="checkbox" value="&health=peanut-free" onChange={checkbox}/>peanut-free</div>
              <div className='check-option'><input type="checkbox" value="&health=tree-nut-free" onChange={checkbox}/>tree-nut-free</div>
              <div className='check-option'><input type="checkbox" value="&health=wheat-free" onChange={checkbox}/>wheat-free</div>
              <div className='check-option'><input type="checkbox" value="&health=soy-free" onChange={checkbox}/>soy-free</div>
              <div className='check-option'><input type="checkbox" value="&health=fish-free" onChange={checkbox}/>fish-free</div>
            </div>
            <div className='checkboxes'>
              <div className='check-option'><input type="checkbox" value="&health=shellfish-free" onChange={checkbox}/>shellfish-free</div>
              <div className='check-option'><input type="checkbox" value="&health=egg-free" onChange={checkbox}/>egg-free</div>
              <div className='check-option'><input type="checkbox" value="&health=low-sugar" onChange={checkbox}/>low-sugar</div>
              <div className='check-option'><input type="checkbox" value="&health=vegan" onChange={checkbox}/>vegan</div>
              <div className='check-option'><input type="checkbox" value="&health=vegetarian" onChange={checkbox}/>vegetarian</div>
              <div className='check-option'><input type="checkbox" value="&health=paleo" onChange={checkbox}/>paleo</div>
            </div>
          </div>
          <button type='submit'>Get Recipe</button>
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

export default SearchResult;
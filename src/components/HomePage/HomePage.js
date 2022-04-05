import './HomePage.css';
import Nav from "../Nav/Nav.js";
import Foot from "../Foot/Foot.js";
import book from "./imgs/book.png";
import logo from "./imgs/logo.png";
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {useEffect, useState} from 'react';
import RandomRecipe1 from '../RandomRecipe1.js';
import RandomRecipe2 from '../RandomRecipe2.js';
import RandomRecipe3 from '../RandomRecipe3.js';

function HomePage() {
    const YOUR_APP_ID = '18ced154';
    const YOUR_APP_KEY = 'd6b34df41b0d12e9d59922fcd6c6aa3d';

    //   local variables will get reset every render upon mutation whereas state will update 
    const [ingr] = useState(randomFood())
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
        };
        const randomNumb = Math.floor(Math.random() * 25) + 1;
        return food[randomNumb]
   };

    const [health] = useState(randomHealth())
    function randomHealth () {
        const food = {
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
        return food[randomNumb];
    };

  const url = `https://api.edamam.com/search?q=${ingr}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${health}&to=30`;

  // set default value of hits to null, so that while we wait for the
  // request to complete, we don't attempt to render the image
  const [hits, setHits] = useState(null)

  useEffect (()=>{
        async function recipes() {
            try {
              const request = await Axios.get(url);
              setHits(request.data.hits);  
            }
            catch (e) {
                alert ('Woops! The recipes are being stubborn. Please refresh.');
                console.log(e);
            };
        }
        recipes();
    }, [url]);

  return (
    <div className="Homepage">
        <Nav />
        <header className="hero">
            <p>
                When you can't just eat anything,<br />
                You go on a<br/> <img src={logo} alt="Food Quest logo" /> <br/>Find food for a happy stomach.
            </p> 
        </header>

        <main className="main-container">
            <p className="img-title">{health} {ingr} RECIPES</p>
            <div className="img-container">
                <RandomRecipe1 props={hits}/>
                <RandomRecipe2 props={hits}/>  
                <RandomRecipe3 props={hits}/>
            </div>

            <p className="img-title">FIND RECIPES<br/>YOUR STOMACH NEEDS</p>
            <div className="img-container">
                <div className="item-container">
                    <p className='search-label'>SEARCH WITH OPTIONS</p>
                    <div className="img-box">
                        <img className='home-imgs search-img' src={book} alt="framed paintings" />
                        <Link to="/search">
                            <div className="img-overlay search-overlay">
                                <div className='search-overlay-button'>SEARCH</div>  
                            </div>
                        </Link>
                    </div>
                </div> 
            </div>
        </main>
        <div className="about-section-container">
        <h1>WHAT IS <br /> FOOD QUEST?</h1>
        <Link to="/about">Learn more about Food Quest <br />
            and its purpose.
        </Link>
      </div>
        <Foot />
    </div>
  );
}

export default HomePage;
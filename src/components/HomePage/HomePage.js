import './HomePage.css';
import Nav from "../Nav/Nav.js";
import Foot from "../Foot/Foot.js";
import book from "./imgs/book.png";
import logo from "./imgs/logo.png";
import {Link} from 'react-router-dom';
import Axios from 'axios';
import {useEffect, useState, useRef} from 'react';
import RandomRecipe from '../RandomRecipe.js';

function HomePage() {
    const YOUR_APP_ID = '18ced154';
    const YOUR_APP_KEY = 'd6b34df41b0d12e9d59922fcd6c6aa3d';

    // default of hits = null, so that while we wait for the request to complete, we don't attempt to render the image
    const [hits, setHits] = useState(null);
    const foodText = useRef(null);

    useEffect (()=>{
        //random food & diet for API queries & image title
        const food = ['apple', 'edamame', 'banana', 'mango', 'peach', 'plum', 'almond', 'avocado', 'tomato', 'bean', 'spinach', 'broccoli', 'blueberry', 'strawberry', 'melon', 'grape', 'corn', 'pumpkin', 'cauliflower', 'carrot', 'cucumber', 'eggplant', 'mushroom', 'pea', 'zucchini'];
        const ranFoodNum = Math.floor(Math.random() * 25);
        const randomFood = food[ranFoodNum];
        foodText.current = randomFood;

        const url = `https://api.edamam.com/search?q=${randomFood}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&to=30`;
        
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
    }, []);

    return (
        <div className="Homepage">
            <Nav />
            <header className="hero">
                <p>
                    If you can't just eat anything,<br />
                    Go on a<br/> <img src={logo} alt="Food Quest logo" /> <br/>Find food for a happy stomach.
                </p> 
            </header>

            <main className="main-container">
                <p className="img-title">{foodText.current} RECIPES</p>
                <div className="img-container">
                    <RandomRecipe props={hits} random = {Math.floor(Math.random() * 9)}/>
                    <RandomRecipe props={hits} random = {Math.floor(Math.random() * (19-10+1))+10}/>  
                    <RandomRecipe props={hits} random = {Math.floor(Math.random() * (29-20+1))+20}/>
                </div>

                <p className="img-title">FIND RECIPES<br/>YOUR STOMACH NEEDS</p>
                <div className="img-container">
                    <div className="item-container">
                        <p className='search-label'>SEARCH WITH DIETARY OPTIONS</p>
                        <div className="img-box">
                            <img className='home-imgs search-img' src={book} alt="framed paintings" />
                            <Link to="/foodquest/search">
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
            <Link to="/foodquest/about">Learn more about Food Quest <br />
                and its purpose.
            </Link>
        </div>
            <Foot />
        </div>
    );
}

export default HomePage;
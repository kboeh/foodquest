import './Nav.css';
import info from "./imgs/info.png";
import random from "./imgs/random.png";
import home from "./imgs/home.png";
import tomato from "./imgs/tomato.png";
import search from "./imgs/search.png";
import bowl from "./imgs/bowl.png";
import { useState } from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    //stores text entered into searchfield for use in IngredientResult
    const [query, setQuery] = useState([]);
    localStorage.setItem("searchResults", query);

    return (
        <div>
            <div className='nav-header'>
                <Link to = "/"><div className="nav-logo"><img src={tomato} alt="tomato" /></div></Link>

                <form className="nav-form">
                    <Link to = "/foodquest/ingredient">
                        <button>
                            <img className='magnifier' src={search} alt="magnifier" />
                        </button>
                    </Link>
                    <input value={query} onChange={(e)=> setQuery(e.target.value)} required type="text" placeholder="Quick search by ingredients" />
                </form>

                <nav className="nav">
                        <ul>
                            <li className="nav-home"><Link to="/foodquest/"><img src={home} alt="home icon" />Home</Link></li>
                            <li><Link to="/search"><img src={bowl} alt="food icon" />Search</Link></li>
                            <li><Link to="/random"><img src={random} alt="dice icon" />Random</Link></li>
                            <li><Link to="/about"><img src={info} alt="info icon" />About</Link></li>
                        </ul>
                </nav>

            </div>
        </div>
    );
}
export default Nav;
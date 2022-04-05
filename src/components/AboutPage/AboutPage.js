import './AboutPage.css';
import Nav from "../Nav/Nav.js";
import Foot from "../Foot/Foot.js";
import logo from "./imgs/logo.png";

function AboutPage() {
   
  return (
    <div className='about-container'>
      <Nav />
      <header className='about-header'>
        <h1>Welcome to</h1>
        <img src={logo} alt="Food Quest logo" />
      </header>
      <main className='about-main'>
        
        <div className='about-text-container'>
          <p>
            Everyone can’t eat everything. When on the search for recipes that will keep your stomach happy, Food Quest can help. Food Quest connects you to recipes all across the internet and will find matches for those who have food sensitivities, allergies, or are simply looking to eat healthier.  However, if you're looking to simply find a good recipe using ingredients you have on hand, you can do that too.
          </p>
          <h2>Food Quest Features</h2>
          <p>
            Food Quest allows you to search the internet using health conscious options to find the recipes your stomach needs. You can search for recipes that are allergy conscious, low sugar, vegan, etc. 
            <br/><br/>
            At the top of every page you can simply enter ingredients to quickly search for corresponding recipes.
            <br/><br/>
            The homepage features three random example dishes. Hovering over their images reveals health and nutrition information about the dish.  Clicking their image will take you to the recipe.
            <br/><br/>
            If you just like finding recipes and are feeling lucky, you can click the random button to get a random list of recipes.
          </p>
          <h2>Meet the Developer</h2>
          <p>
            If you would like to reach out and tell me what you think of Food Quest, click the link below to reach my portfolio site. I would love to hear from you.
          </p>
        </div>
      </main>
      <Foot />
    </div>
    
  );
}

export default AboutPage;
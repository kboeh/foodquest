import HomePage from "./components/HomePage/HomePage.js";
import AboutPage from "./components/AboutPage/AboutPage.js";
import IngredientPage from "./components/IngredientPage/IngredientPage.js";
import SearchPage from "./components/SearchPage/SearchPage.js";
import RandomPage from "./components/RandomPage/RandomPage.js";
import ErrorPage from "./components/ErrorPage/ErrorPage.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/foodquest/" element={<HomePage />}/>
        <Route path="/foodquest/about" element={<AboutPage />}/>
        <Route path="/foodquest/ingredient" element={<IngredientPage />}/>
        <Route path="/foodquest/search" element={<SearchPage />}/>
        <Route path="/foodquest/random" element={<RandomPage />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;

import HomePage from "./components/HomePage/HomePage.js";
import AboutPage from "./components/AboutPage/AboutPage.js";
import IngredientResult from "./components/IngredientResult/IngredientResult.js";
import SearchResult from "./components/SearchResult/SearchResult.js";
import RandomResult from "./components/RandomResult/RandomResult.js";
import ErrorPage from "./components/ErrorPage/ErrorPage.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/foodquest/" element={<HomePage />}/>
        <Route path="/foodquest/about" element={<AboutPage />}/>
        <Route path="/foodquest/ingredient" element={<IngredientResult />}/>
        <Route path="/foodquest/search" element={<SearchResult />}/>
        <Route path="/foodquest/random" element={<RandomResult />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;

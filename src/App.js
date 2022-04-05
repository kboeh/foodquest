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
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/ingredient" element={<IngredientResult />}/>
        <Route path="/search" element={<SearchResult />}/>
        <Route path="/random" element={<RandomResult />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;

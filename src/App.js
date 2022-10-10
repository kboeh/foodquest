import HomePage from "./components/HomePage/HomePage.js";
import AboutPage from "./components/AboutPage/AboutPage.js";
import IngredientPage from "./components/IngredientPage/IngredientPage.js";
import SearchPage from "./components/SearchPage/SearchPage.js";
import RandomPage from "./components/RandomPage/RandomPage.js";
import ErrorPage from "./components/ErrorPage/ErrorPage.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router basename="/foodquest">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/ingredient" element={<IngredientPage />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/random" element={<RandomPage />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;

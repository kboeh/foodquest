import RandomPage from "../RandomPage";
import {render, screen, waitFor} from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";

test('imgs render on RandomPage component', () => {
    render(
      <Router>
        <RandomPage />
      </Router>
    );
    const tomato = screen.getByAltText("tomato");
    const info = screen.getByAltText("info icon");
    const home = screen.getByAltText("home icon");
    const bowl = screen.getByAltText("bowl icon");
    const random = screen.getByAltText("dice icon");
      
    expect(tomato).toHaveAttribute('src', 'tomato.png')
    expect(info).toHaveAttribute('src', 'info.png')
    expect(home).toHaveAttribute('src', 'home.png')
    expect(bowl).toHaveAttribute('src', 'bowl.png')
    expect(random).toHaveAttribute('src', 'random.png')
  });

  test("render random recipes from API response on RandomPage component", async () => {
    render(
      <Router>
        <RandomPage />
      </Router>
    ) 
    const button = screen.getByText('Random')
    userEvent.click(button); 
  
    await waitFor(() =>
      expect(screen.getAllByText('Recipe')).toBeTruthy()
    )   
  });
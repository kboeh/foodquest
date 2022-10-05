import IngredientPage from "../IngredientPage";
import {render, screen, waitFor} from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";

test('imgs render on IngredientPage component', () => {
  render(
    <Router>
      <IngredientPage />
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

test("render recipes from API response on IngredientPage component", async () => {
  // render your component
  render(
    <Router>
      <IngredientPage />
    </Router>
  ) 
  // access input & button
  const query = screen.getByPlaceholderText('Quick search by ingredients') 
  const button = screen.getByRole('button')
  //simulate typing 'apple' into input
  userEvent.type(query, 'apple');
  //then click search button
  userEvent.click(button); 

  await waitFor(() =>
    expect(screen.getAllByText('Recipe')).toBeTruthy()
  )   
});
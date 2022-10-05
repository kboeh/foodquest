import HomePage from "../HomePage";
import {render, screen, waitFor} from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom';

test('Nav and footer components with imgs render on HomePage component', () => {
  render(
    <Router>
      <HomePage />
    </Router>
  );
  const tomato = screen.getByAltText("tomato");
  const info = screen.getByAltText("info icon");
  const home = screen.getByAltText("home icon");
  const bowl = screen.getByAltText("food icon");
  const random = screen.getByAltText("dice icon");
  const book = screen.getByAltText("framed paintings");
  const logo = screen.getByAltText("Food Quest logo");
  const foot = screen.getByText("Developed by Karl Boehringer");

  expect(tomato).toHaveAttribute('src', 'tomato.png');
  expect(info).toHaveAttribute('src', 'info.png');
  expect(home).toHaveAttribute('src', 'home.png');
  expect(bowl).toHaveAttribute('src', 'bowl.png');
  expect(random).toHaveAttribute('src', 'random.png');
  expect(book).toHaveAttribute('src', 'book.png');
  expect(logo).toHaveAttribute('src', 'logo.png');
  expect(foot).toHaveAttribute('href', 'https://kboeh.github.io/portfolio/');
});

test("render images from API response on HomePage component", async () => {
  render(
    <Router>
      <HomePage />
    </Router>
  ) 

  await waitFor(() =>
    expect(screen.getAllByTestId('random-imgs')).toBeTruthy()
  )   
});

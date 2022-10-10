import SearchPage from "../SearchPage";
import {render, screen, waitFor} from "@testing-library/react";
// import { renderHook, act } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import {BrowserRouter as Router} from 'react-router-dom';

test('imgs render on SearchPage component', () => {
  render(
    <Router>
      <SearchPage />
    </Router>
  );
  const tomato = screen.getByAltText("tomato");
  const info = screen.getByAltText("info icon");
  const home = screen.getByAltText("home icon");
  const bowl = screen.getByAltText("food icon");
  const random = screen.getByAltText("dice icon");

  expect(tomato).toHaveAttribute('src', 'tomato.png');
  expect(info).toHaveAttribute('src', 'info.png');
  expect(home).toHaveAttribute('src', 'home.png');
  expect(bowl).toHaveAttribute('src', 'bowl.png');
  expect(random).toHaveAttribute('src', 'random.png');
});

// test("Alert message renders if a query isn't entered into the search form on SearchPage component", async () => {
//   render(
//     <Router>
//       <SearchPage />
//     </Router>
//   ) 
//   const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
//   const button = screen.getByRole('button')

//   userEvent.click(button); 

//   await waitFor(() =>  
//     expect(alertMock).toHaveBeenCalledTimes(1)
//   )   
// });

test("render recipes from API response on SearchPage component", async () => {
  // render the component
  render(
    <Router>
      <SearchPage />
    </Router>
  ) 
  // access input & button
  const query = screen.getByPlaceholderText('Enter ingredients') 
  const button = screen.getByRole('button')
  //simulate typing 'apple' into input
  userEvent.type(query, 'apple');
  //then click search button
  userEvent.click(button); 

  await waitFor(() =>  
    expect(screen.getAllByText('Recipe')[0]).toBeInTheDocument()
  )   
});

// test("render recipes from API response on SearchPage component", async () => {
//   render(
//     <Router>
//       <SearchPage />
//     </Router>
//   ) 
//   // target input, checkbox, and search button
//   const query = screen.getByPlaceholderText('Enter ingredients') ;
//   const check = screen.getByText('dairy-free');
//   const button = screen.getByRole('button');
//   // simulate typing 'apple' into input and checking box
//   userEvent.type(query, 'apple');
//   userEvent.click(check);
//   // expect(ch).toBeChecked()

//   userEvent.click(button); 

//   await waitFor(() =>  
//     expect(screen.getAllByText('Recipe')[0]).toBeInTheDocument()
//   )   
// });

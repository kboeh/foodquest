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

// test("render recipes from API response on SearchPage component", async () => {
//   // render your component
//   render(
//     <Router>
//       <SearchPage />
//     </Router>
//   ) 
//   // access input & button
//   const query = screen.getByPlaceholderText('Enter ingredients') 
//   const button = screen.getByRole('button')
//   //simulate typing 'apple' into input
//   userEvent.type(query, 'apple');
//   //then click search button
//   userEvent.click(button); 

//   await waitFor(() =>  
//     expect(screen.getAllByText('Recipe')[0]).toBeInTheDocument()
//     // expect(screen.getAllByText('Recipe')).toBeTruthy()
//   )   
// });

test("render recipes from API response on SearchPage component", async () => {
  render(
    <Router>
      <SearchPage />
    </Router>
  ) 
  // target input, checkbox, and search button
  const query = screen.getByPlaceholderText('Enter ingredients') ;
  const check = screen.getByText('dairy-free');
  const button = screen.getByRole('button');
  // simulate typing 'apple' into input and checking box
  userEvent.type(query, 'apple');
  userEvent.click(check);
  // expect(ch).toBeChecked()

  userEvent.click(button); 

  await waitFor(() =>  
    expect(screen.getAllByText('Recipe')[0]).toBeInTheDocument()
  )   
});

//use enzyme?
// test.only('should update check state', async () => {
//   // const { result } = renderHook(() =>SearchPage());
//   // const user = userEvent.setup()
//   render(
//     <Router>
//       <SearchPage />
//     </Router>
//   );
//   // var renderedNode = TestUtils.renderIntoDocument(<SearchPage />);
//     // renderedNode.prototype.checkbox = jest.fn()
//   const ch = screen.getByText('dairy-free');
//   // userEvent.click(ch);
//   fireEvent.click(ch);
//   // await user.click(screen.getByText('dairy-free'))

//   // act(() => {
//   //   result.current.checkbox()
//   // })

  
//   // console.log('test'),
//   // console.log(result.current),
//   // let check = SearchPage.checkbox
//   // console.log(form[1])
//   expect(checked()).toBeCalled()
//   // expect(recipe.url).toBe("http://localhost:8000/food?q=apple&health=dairy-free")
//   // expect(renderedNode.prototype.checkbox).toBeCalled();
  
// })

# Food Quest Recipe App

Food Quest is a recipe search application that consumes the Edamam API. Utilizing React hooks, I delved into their data structure to develop a number of features for the application. Depending on which feature the user is accessing, algorithms alter API calls to produce varying results.

For instance, Food Quest allows the user to customize searches for recipes by inputting ingredients and selecting health conscious options via checkboxes.

At the top of every page the user can simply enter ingredients to quickly search for corresponding recipes. This feature stores the user’s queries in local storage and algorithms then use those queries to render recipes on another page.

In addition, the homepage features three example dishes which change on each render. The navigation bar includes a ‘random button’ that renders a random list of recipes in a new page.

In order to achieve varying levels of functionality from page to page while reducing redundancy, I built reusable components which I passed props into. I also used try/catch statements within Axios API calls to handle errors in order to provide users with a smoother experience.

# Food Quest Recipe App

Food Quest is a recipe search application that consumes the Edamam API. Utilizing React hooks, I developed a number of features for the application. Depending on which feature the user is accessing, functions alter API calls to produce varying results.

For instance, Food Quest allows the user to customize searches for recipes by inputting ingredients and selecting health conscious options via checkboxes. Users can run simpler searches by entering ingredients in the "Quick Search” bar. This feature stores the user’s queries in local storage and renders recipes on another page. In addition, the homepage features three example dishes which change on each render and the navigation bar includes a ‘random button’ that renders a random list of recipes in a new page.

In order to achieve varying levels of functionality from page to page while reducing redundancy, I built reusable components which I passed props into. I also used try/catch statements within Axios API calls to handle errors and display messages in order to provide users with a smoother experience.
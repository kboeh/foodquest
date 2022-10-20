# Food Quest Recipe App

The frontend of this application is built using React. The backend of the application, which is built using Node.js/Express, keeps API credentials secret while making third party API calls for the frontend. Axios is utilized to both pass parameters to the backend and make asynchronous calls from the server.

<a href="https://github.com/kboeh/foodquest-server" target='_blank' rel="noreferrer">Click here for the server repo</a>.

Food Quest is a recipe search application that consumes the Edamam API. The application allows the user to customize searches for recipes by inputting ingredients and selecting health conscious options via checkboxes. Simpler searches can be run by entering ingredients in the "Quick Search” bar. This feature stores the user’s queries in local storage and renders recipes on another page. In addition, the homepage features three example dishes which change on each visit and the navigation bar includes a button which opens a new page of random recipes.
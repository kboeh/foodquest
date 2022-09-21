const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();
const app = express();
app.use(cors())

//PORT = "/" (which is the path for .get())
app.get('/', (req, res) =>{
  res.json('hi')
});

app.get('/food', async (req, res) =>{
  const passedQuery = req.query.q
  const passedHealth = () => {
    const param = req.query.health;
    let array = [];
    if(!param) {return ''}
    if(typeof param === 'string') {return '&health=' + param}
    if(Array.isArray(param)) {
      for(let x of param) {
        array.push('&health=' + x)
      } 
      return array.join('');
    }
  };

  const url = `https://api.edamam.com/search?app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&to=30&q=${passedQuery}${passedHealth()}`
    try {
      const request = await axios.request(url);
      console.log(request)
      if (request.data.hits == 0) {
        console.log ('No results!');
      }
      res.json(request.data);
    }
    catch (e) {
      console.log(e);
    }
});

app.listen(8000, () => console.log(`Server running on port ${PORT}`));
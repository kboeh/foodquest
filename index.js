const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
// const { response } = require('express');
require('dotenv').config();

const app = express();
app.use(cors())
//PORT = "/" (which is the path for .get())
app.get('/', (req, res) =>{
    res.json('hi')
})

app.get('/food', async (req, res) =>{
    const passedQuery = req.query.q
    const options = {
        method: 'GET',
        url: 'https://api.edamam.com/search?app_id=18ced154&app_key=d6b34df41b0d12e9d59922fcd6c6aa3d&to=30',
        params: {q:passedQuery},
      }
      try {
        const request = await axios.request(options);
        if (request.data.hits == 0) {
          console.log ('No results!');
        }
        res.json(request.data);
      }
      catch (e) {
        console.log(e);
      }
})

//works
// app.get('/food', (req, res) =>{
//     const passedQuery = req.query.q
//     const options = {
//         method: 'GET',
//         url: 'https://api.edamam.com/search?app_id=18ced154&app_key=d6b34df41b0d12e9d59922fcd6c6aa3d&to=1',
//         params: {q:passedQuery},
//       }
//       axios.request(options).then((response) => {
//         console.log(response.data)
//         res.json(response.data)
  
//     })
// })

app.listen(8000, () => console.log(`Server running on port ${PORT}`));
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5001;

//axios import
const axios = require('axios');

// Route includes
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

// Routes
app.use('/api/favorite', favoriteRouter);
app.use('/api/category', categoryRouter);

//Giphy route
const giphy_api_key = "4e7rTkfZgyilJuVKQhZChcVSyLbBW92V"
const search_query = "cheese";
// THis has to be a post route for it to work
app.post('/gifs', (req,res) => {
    axios.post(`https://api.giphy.com/v1/gifs/search?api_key=${giphy_api_key}&q=${search_query}&limit=25&offset=0&rating=pg&lang=en&bundle=messaging_non_clips`)
    .then((response) => {
        res.send(response.data)
    }).catch((error) => {
        console.log('get /gifs fail: ', error);
        res.sendStatus(500)
    })
});

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
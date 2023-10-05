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

//Giphy Post route
app.post('/api/search', (req, res) => {
    const { search } = req.body;
    const giphy_api_key = "4e7rTkfZgyilJuVKQhZChcVSyLbBW92V";
    console.log('search term', search);
    axios
      .get(`https://api.giphy.com/v1/gifs/search?api_key=${giphy_api_key}&q=${search}&limit=25&offset=0&rating=pg&lang=en&bundle=messaging_non_clips`)
      .then((response) => {
        console.log(response.data);
        const gifs = response.data.data;
        // Send the fetched GIFs as a response
        res.json(gifs);
      })
      .catch((error) => {
        console.error('Error fetching GIFs:', error);
        res.status(500).json({ error: 'Error fetching GIFs' });
      });
  });
  

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
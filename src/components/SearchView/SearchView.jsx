import { useState } from 'react';
import axios from 'axios';
import './SeachView.css';



function SearchView() {
    
    const [theGifs, setTheGifs] = useState([]);
    const [newSearch, setNewSearch] = useState('');

    const handleSearch = (event) => {
      event.preventDefault();
    
      axios.post('/api/search', { search: newSearch })
        .then((response) => {
          const gifs = response.data;
          console.log('GIFS response data', gifs);
          setTheGifs(gifs);
        })
        .catch((error) => {
          console.error('Error fetching GIFs:', error);
        });
    };

    const handleFavorite= (gifId, gifUrl) => {
      axios.post('/api/favorite', { gifId, gifUrl })
      .then(response => 
        console.log('Favorited GIF: ', response.data)
      )
      .catch(error => {
        console.error(error);
        alert('Something went wrong.');
      });
    }
    

    return (
      <div>
        {/* Search bar */}
        <div className='search-bar'>
          <input
            type="text"
            placeholder='Are you looking for something'
            onChange={event => setNewSearch(event.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
  
        {/* Displays the gifs */}
        <div className='gif-container'>
          <div className="gif-grid">
            {theGifs.map((gif) => (
              <div className="gif-item" key={gif.id}>
                <img src={gif.images.fixed_height.url} />
                <br />
                <button
                  className="favorite-button"
                  onClick={() => handleFavorite(gif.id, gif.images.fixed_height.url)}
                >
                  Favorite
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
    
};


export default SearchView;
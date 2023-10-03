import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


function SearchView() {
    
    const [theGifs, setTheGifs] = useState([]);
    const [newSearch, setNewSearch] = useState('');

    const handleSearch = (event) => {
      event.preventDefault();
    
      axios
        .post('/api/search', { search: newSearch })
        .then((response) => {
          const gifs = response.data;
          setTheGifs(gifs);
        })
        .catch((error) => {
          console.error('Error fetching GIFs:', error);
        });
    };
    

      return (
        <div>
            {/* Search bar */}
            <div className='search-bar'>
                <input 
                type="text" 
                placeholder='are ya looking for something' 
                onChange={event => setNewSearch(event.target.value)}
                />
                <button 
                  onClick={handleSearch} 
                >Search</button>
            </div>

            {/* displays the gifs */}
            <div className='gif-container'>
                <div className="gif-grid">
                    {theGifs.map((gif) => (
                    <div className="gif-item" key={gif.id}>
                        <img src={gif.images.fixed_height.url} alt={gif.title} />
                        {/* <button onClick={() => handleFavorite(gif)}>Favorite</button> */}
                    </div>
                    ))}
                </div>
            </div>
        

        </div>
        
      );
    
};


export default SearchView;
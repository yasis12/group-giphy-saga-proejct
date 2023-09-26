import { useEffect, useState } from 'react';
import axios from 'axios';
import './SearchView.css'


function SearchView() {
    // SEARCH BAR

    const [newSearchQuery, setNewSearchQuery] = useState('');

    const serachInput = (event) => {
    setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        try {
            const response = {}
        } catch {
            console.log('THIS IS NOT CORRECT YET',error);
        }
    };

    //GIPHY API
    const [theGifs, setTheGifs] = useState([]);

    useEffect(() => {
      fetchGifs()
    }, [])
  
      const fetchGifs = () => {
        console.log('running fetch');
        axios.get('/gifs')
        .then((response) => {
          const apiResponse = response.data
          console.log('API Response', apiResponse);
          setTheGifs(apiResponse.data)
        }).catch((error) => {
          console.log('error', error);
        })
      }
  
      return (
        <div>
            {/* Search bar */}
            <div className='search-bar'>
                <input type="text" placeholder='are ya looking for something' />
                <button onClick={handleSearch} value={newSearchQuery} onChange={serachInput}>Search</button>
            </div>

            {/* displays the gifs */}
            <div className='gif-container'>
                <div className="gif-grid">
                    {theGifs.map((gif) => (
                    <div className="gif-item" key={gif.id}>
                        <img src={gif.images.fixed_height.url} alt={gif.title} />
                        <button onClick={() => handleFavorite(gif)}>Favorite</button>
                    </div>
                    ))}
                </div>
            </div>
        

        </div>
        
      );
    
};


export default SearchView;
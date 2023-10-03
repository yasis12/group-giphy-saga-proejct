import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch} from 'react-redux';


function SearchView() {

    const dispatch = useDispatch();
    
    const [theGifs, setTheGifs] = useState([]);
    const [newSearch, setNewSearch] = useState('');

    const handleSearch = (event) => {
      event.preventDefault();
      dispatch({
          type: 'SET_SEARCH',
          payload: newSearch
      })
    };

  
      const fetchGifs = () => {
        console.log('running fetch');
        axios.post('/gifs')
        .then((response) => {
          const apiResponse = response.data
          console.log('API Response', apiResponse);
          setTheGifs(apiResponse.data)
        }).catch((error) => {
          console.log('error', error);
        })
      }

      // useEffect
      useEffect(() => {
        fetchGifs()
      }, [])
  
      return (
        <div>
            {/* Search bar */}
            <div className='search-bar'>
                <input type="text" placeholder='are ya looking for something' />
                <button 
                  onClick={handleSearch} 
                  value={newSearch} 
                  onChange={event => setNewSearch(event.target.value)}
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
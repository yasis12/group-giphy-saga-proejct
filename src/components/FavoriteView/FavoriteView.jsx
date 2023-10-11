import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./FavoriteView.css";

function FavoriteView() {
  const [favoriteList, setFavoriteList] = useState([]);

  const fetchFavorite = () => {
    axios
      .get("/api/favorite")
      .then((response) => {
        setFavoriteList(response.data);
        console.log('Fav list data: ', response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong.");
      });
  };

  const addCategory = (value, gifId) => {
    console.log('value', value);
    console.log('gifId', gifId);
    axios
      .put(`/api/favorite/${gifId}`, { category: value }) // Assuming "/api/favorite" is the correct endpoint
      .then((response) => {
        console.log('Favorited GIF: ', response.data);
        fetchFavorite(); // Refresh the favorite list after adding a category
      })
      .catch((error) => {
        console.error(error);
        alert('Something went wrong.');
      });
  }

  useEffect(() => {
    fetchFavorite();
  }, []);

  return (
<div className="gif-container">
  <div className="gif-grid">
    {favoriteList.map((favorite) => (
      <div className="gif-item" key={favorite['gif-id']}>
        <img src={favorite['gif-url']} alt={`Favorite GIF ${favorite['gif-id']}`} />
        <br />
        <div className="category-container">
          <h5>category:</h5>
          <h5>{favorite['category_name']}</h5>
        </div>
      

  

        <form onSubmit={(event) => {
            event.preventDefault();
            const value = event.target.genre.value;
            addCategory(value, favorite['gif-id']);
            className='categoryForm'
          }}>
            <select name="genre" id="gifs">
              <option value="1">funny</option>
              <option value="2">cohort</option>
              <option value="3">cartoon</option>
              <option value="4">nsfw</option>
              <option value="5">Meme</option>
            </select>
            <button type="submit">add category</button>
          </form>
      </div>
      
    ))}
  
  </div>
</div> 
  )
}

export default FavoriteView;

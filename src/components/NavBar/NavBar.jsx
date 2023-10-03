import React from "react"
import './NavBar.css'
import { useHistory } from 'react-router-dom';


function NavBar() {

    const history = useHistory()

    const handleSearchClick = () => {
        history.push('/search')
    }

    const handleFavoriteClick = () => {
        history.push('/favorite')
    }

    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'> Giphy Search Project </h1>

                <button onClick={handleSearchClick}> Home </button>
                <button onClick={handleFavoriteClick}> Favorites </button>

            </header>

        </>
        
    );
};

export default NavBar
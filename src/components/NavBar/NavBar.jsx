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
                <div className="button-div">
                    <button onClick={handleSearchClick} className="nav-button"> Search </button>
                    <button onClick={handleFavoriteClick} className="nav-button"> Favorites </button>
                </div>
                
            </header>

        </>
        
    );
};

export default NavBar
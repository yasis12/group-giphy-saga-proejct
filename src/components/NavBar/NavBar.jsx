import React from "react"
import { Link } from "react-router-dom"
import './NavBar.css'


//Material UI dialog box 
import Button from '@mui/material/Button';

function NavBar() {


    return (
        <>
            <header className='App-header'>
                <h1 className='App-title'> Giphy Project </h1>

                <Button
                    component={Link}
                    to={"/"}
                    variant="contained"
                    color="primary"
                > Home </Button>

                <Button
                    component={Link}
                    to={"/FavoriteView"}
                    variant="contained"
                    color="primary"
                > Favorites </Button>

            </header>

        </>
        
    );
};

export default NavBar
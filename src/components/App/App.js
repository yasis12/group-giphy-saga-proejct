import React from 'react';
import FavoriteView from '../FavoriteView/FavoriteView';
import SearchView from '../SearchView/SearchView';
import NavBar from '../NavBar/NavBar';
import './styles.css'

import { HashRouter as Router, Route, Switch } from "react-router-dom";


function App() {

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <SearchView />
          </Route>
          <Route path='/favorite'>
            <FavoriteView />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
import React from 'react';
import FavoriteView from '../FavoriteView/FavoriteView';
import SearchView from '../SearchView/SearchView';
import NavBar from '../NavBar/NavBar';

import { HashRouter as Router, Route, Switch } from "react-router-dom";


function App(props) {







  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/search'>
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
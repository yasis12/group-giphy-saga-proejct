import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
//Redux Imports
import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const search = (state = [], action) => {
    if (action.type === 'SET_SEARCH') {
        return action.payload
    }
    return state;
};

const reduxStore = createStore(
    combineReducers({
        search
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
         <Provider store={reduxStore}>
            <App />
         </Provider>  
    </React.StrictMode>
);

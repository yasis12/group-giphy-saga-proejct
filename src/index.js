import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

// add in the redux store first to store the searched values
// enter the sagas later

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

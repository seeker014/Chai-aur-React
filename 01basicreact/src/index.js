import React from 'react'; 
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // react makes a dom for itself using .createRoot
root.render(
    <App />     // we can make custom HTML tags in JS
);

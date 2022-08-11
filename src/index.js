// Importing Built-in Modules
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing Custom Modules
import App from './App';

// Importing Stylesheet
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

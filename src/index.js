import React from 'react';
import axios from "axios";
import ReactDOM from 'react-dom/client';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Weather from './Weather';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Weather />
    <App />
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { DarkModeContextProvider } from "./context/darkModeContext";
import './index.css';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </BrowserRouter>
   
  </React.StrictMode>
);






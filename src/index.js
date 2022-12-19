import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { DataContextFile } from './ContextApi';
import './input.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <DataContextFile >
  <BrowserRouter>
 
    <App />
  
  </BrowserRouter>
  </DataContextFile>
  </React.StrictMode>
);



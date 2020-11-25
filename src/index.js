import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import Footer from './Footer';


ReactDOM.render(
    <BrowserRouter>
        <App />
        <Footer />
    </BrowserRouter>
   
    
    
    
    ,document.getElementById("root"));
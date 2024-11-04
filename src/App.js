// src/App.js
import React from 'react';
import NavBar from './compoments/navbar/NavBar';
import './App.css';
import Footer from './compoments/footer/Footer';
import Home from './compoments/home/Home';

const App = () => {
    return (
        <div className='container-main'>
            <div className='navbar-main'>
            <NavBar />
            </div>
            <div className='home-main'>
            <Home />
            </div>
            <div className='footer-main'>
            <Footer /> 
            </div>
            
        </div>
    );
};

export default App;

// src/App.js
import React from 'react';
import NavBar from './compoments/navbar/NavBar';
import './App.css';
import Footer from './compoments/footer/Footer';
import Home from './compoments/home/Home';

const App = () => {
    return (
        <div className='container-main'>
            <NavBar />
            <Home />
            <Footer /> 
        </div>
    );
};

export default App;

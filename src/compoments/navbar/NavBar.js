import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../styles/logo.png'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo"><img src={Logo} alt="Descrição da imagem" width="70px" height="50px"></img>
                </div>
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    &#9776;
                </div>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#clientes">Contatos</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;

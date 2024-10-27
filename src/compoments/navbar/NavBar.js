import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../styles/logo.png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false); // Fecha o menu
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={Logo} alt="Descrição da imagem" width="70px" height="50px" />
                </div>
                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    &#9776;
                </div>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="/" onClick={closeMenu}>Home</a></li>
                    <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
                    <li><a href="#produtos" onClick={closeMenu}>Produtos</a></li>
                    <li><a href="#contato" onClick={closeMenu}>Contatos</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;

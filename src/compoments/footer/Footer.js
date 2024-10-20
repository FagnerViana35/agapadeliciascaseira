
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Ágape Delícias Caseiras</h3>
          <p>Feito com amor e carinho para você!</p>
        </div>
        <div className="footer-middle">
          <h4>Links Úteis</h4>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/sobre">Sobre Nós</a></li>
            <li><a href="/produtos">Produtos</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h4 className='uteis'>Informações para contato</h4>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> São Carlos - SP</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> agapedeliciascaseirass@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhoneAlt} /> (16) 99146-9079</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Ágape Delícias Caseiras. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

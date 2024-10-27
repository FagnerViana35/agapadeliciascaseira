
import React from 'react';
import './Contato.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 

const Contato = () => {
    return (
        <section id="contato" className="contato">
            <h2 className="contato-title">Entre em Contato</h2>
            <div className="contato-container">
                <div className="contato-mensagem">
                    <p>
                        Para mercados interessados em adquirir nossos produtos, por favor entre em contato conosco! Estamos aqui para ajudar e fornecer mais informações.
                    </p>
                </div>
                <div className="whatsapp-container">
                    <p>Fale conosco pelo WhatsApp:</p>
                    <a 
                        href="https://wa.me/5516991469079" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="whatsapp-link"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} size="3x" />
                        <span className="whatsapp-number"> 55 16 99146-9079</span>
                    </a>
                </div>
            </div>
            <div className="whatsapp-icon">
                <a 
                    href="https://wa.me/5516991469079" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faWhatsapp} size="3x" />
                </a>
            </div>
        </section>
    );
};

export default Contato;

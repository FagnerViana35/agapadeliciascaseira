import React, { useState } from 'react';
import './Contato.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import emailjs from 'emailjs-com';

const Contato = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Logando os dados para verificação
        console.log(nome, email, mensagem);
    
        emailjs.send('service_0wmcn7h', 'template_14h3ikl', {
            to_name: "Ágape Delícias Caseiras",
            from_name: nome,        // Verifique se este nome de campo está correto no template
            from_email: email,      // Este campo deve estar presente e correto
            message: mensagem,      // Verifique o placeholder no template
            reply_to: email,  // Opcional, mas deve ser válido
            email_empresa:'agapedeliciascaseirass@gmail.com'  // Deve ser válido e presente no template
        }, 'bxZvZQt5sFhze-0eC') // Public Key   
             
        .then((response) => {
            console.log('Email enviado com sucesso!', response.status, response.text);
            // Resetando os campos após o envio
            setNome('');
            setEmail('');
            setMensagem('');
        })
        .catch((error) => {
            console.error('Erro ao enviar email:', error);
        });
    };
       

    return (
        <section id="contato" className="contato">
            <h2 className="contato-title">Entre em Contato</h2>
            <div className="contato-container">
                <div className="contato-mensagem">
                    <p>
                        Para mercados interessados em adquirir nossos produtos, por favor entre em contato conosco! Estamos aqui para ajudar e fornecer mais informações.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="contato-form">
                    <input 
                        type="text" 
                        placeholder="Seu Nome" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder="Seu Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <textarea 
                        placeholder="Sua Mensagem" 
                        value={mensagem} 
                        onChange={(e) => setMensagem(e.target.value)} 
                        required 
                    />
                    <button type="submit">Enviar</button>
                </form>
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

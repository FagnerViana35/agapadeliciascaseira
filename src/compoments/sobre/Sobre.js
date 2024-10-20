import React from 'react';
import './Sobre.css';
import Agape from'../styles/sobre-imagem.webp'

const SobreNos = () => {
  return (
    <section className="sobre-nos">
      <div className="container">
      <img className='imagem-agape-sobre' src={Agape} alt="descrição da imagem" />
        <p className="paragraph">
          Bem-vindo à <strong>Ágape Delícias Caseiras</strong>, onde o carinho e a tradição se encontram em cada fornada. Somos uma empresa familiar dedicada a criar biscoitos caseiros irresistíveis, feitos com ingredientes selecionados e uma pitada de amor em cada receita.
        </p>
      </div>
    </section>
  );
};

export default SobreNos;
import React from "react";
import './Home.css';
import SobreNos from "../sobre/Sobre";
import Produtos from "../produtos/Produtos";
import Clientes from "../carrocel/Carrossel";
import Contato from "../contato/Contato"; // Importando o novo componente
import Agape from'../styles/sobre-imagem.webp';

const Home = () => {
    return (
            <div className="container-home">
                <div className="title-agape">
                    <h1 className="title">Ágape Delícias Caseiras</h1>
                    <h2 className="subtitle">Sabor que aquece o coração, feito com amor e dedicação!</h2>
                </div>
                
                <div className="imagem-container">
                    <img className="imagem-agape" src={Agape} alt="descrição da imagem" />
                </div>
                <div className="main-container">
                    <section id="sobre">
                        <SobreNos />
                    </section>
                    <section id="produtos">
                        <Produtos />
                    </section>
                    <Clientes />
                    <section id="contato">
                        <Contato />
                    </section>
                </div>
            </div>
    );
};

export default Home;

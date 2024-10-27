import React from "react";
import './Home.css';
import SobreNos from "../sobre/Sobre";
import Produtos from "../produtos/Produtos";
import Clientes from "../carrocel/Carrossel";
import Contato from "../contato/Contato"; // Importando o novo componente
import AgapeVideo from "../styles/video/video-agape.mp4";
import Video from "../video/Video";

const Home = () => {
    return (
            <div className="container-home">
                <Video />
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

import React from 'react';
import './Video.css'
const Video = () => {
    return (
        <div className="video-background">
        <video className="imagem-agape" autoPlay muted loop preload="auto">
            <source src={require('../styles/video/video-agape.mp4')} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
        </video>
            <div className="overlay">
                <div className="title-agape">
                    <h1 className="title">Ágape Delícias Caseiras</h1>
                    <p className="subtitle">Sabor que aquece o coração, feito com amor e dedicação!</p>
                </div>
            </div>
        </div>
    );
}

export default Video;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import './Carrossel.css';
import Merceria3m from'../styles/3m.jpg'
import ArcoIris from'../styles/arco-iris.png'
import Passarinho from'../styles/passarinho.jpg'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const clientes = [
  { nome: 'Mercearia 3M', logo: Merceria3m, link: 'https://www.mercearia3m.com.br' },
  { nome: 'Supermercado Arco Íris', logo: ArcoIris, link: 'https://www.facebook.com/people/Supermercados-Arco-%C3%8Dris/100089706281183/' },
  { nome: 'Hortifruti Passarinho', logo: Passarinho , link: 'https://passarinhohortifruti.com.br/' },
  { nome: 'Cliente 4', logo: 'link-para-logo-4.jpg', link: 'https://www.cliente4.com' },
  { nome: 'Cliente 5', logo: 'link-para-logo-5.jpg', link: 'https://www.cliente5.com' }
];


const Carrossel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 40 },
        1024: { slidesPerView: 3, spaceBetween: 50 },
      }}
    >
      {clientes.map((cliente, index) => (
        <SwiperSlide key={index}>
          <div className="card">
            <img src={cliente.logo} alt={cliente.nome} className="cliente-logo" />
            <h3>
              <a href={cliente.link} target="_blank" rel="noopener noreferrer">
                {cliente.nome}
              </a>
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrossel;

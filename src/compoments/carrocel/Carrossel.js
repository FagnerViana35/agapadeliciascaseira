import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import './Carrossel.css';
import Merceria3m from '../styles/3m.jpg';
import ArcoIris from '../styles/arco-iris.png';
import Passarinho from '../styles/passarinho.jpg';
import VarejaoFartura from '../styles/varejao-fartura.jpg';
import VarejaoQualidade from '../styles/vareja-qualidade.jpg';
import Ruscito from '../styles/ruscito.png';
import Miami from '../styles/miami.jpg';
import TioJoao from '../styles/feirao-tio-joao.jpg';
import EmporioCampo from '../styles/emporio-do-campo.jpg';
import PadariaVovoLucia from '../styles/padaria-vovo-lucia.jpg';
import PadariaToninho from '../styles/padaria-toninho.png';
import PadariaPedrasLua from '../styles/padaria.png';
import MercadoToninhoServ from '../styles/mercado.png';
import SupermercadoBuenoServ from '../styles/bueno-serv.jpg';


import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const clientes = [
  { nome: 'Hortifruti Passarinho', logo: Passarinho, link: 'https://passarinhohortifruti.com.br/' },
  { nome: 'Mercearia 3M', logo: Merceria3m, link: 'https://www.mercearia3m.com.br' },
  { nome: 'Supermercado Arco Íris', logo: ArcoIris, link: 'https://www.facebook.com/people/Supermercados-Arco-%C3%8Dris/100089706281183/' },
  { nome: 'Varejão da Fartura', logo: VarejaoFartura, link: 'https://pedidos.ovarejaodafartura.com.br/' },
  { nome: 'Varejão da Qualidade', logo: VarejaoQualidade, link: 'https://www.instagram.com/varejaodaqualidade/' },
  { nome: 'Supermercados Ruscito', logo: Ruscito, link: 'https://supermercadosruscito.com.br/' },
  { nome: 'Supermercado Miami', logo: Miami, link: 'https://www.instagram.com/supermercadomiami/' },
  { nome: 'Padaria Vovo Lucia', logo: PadariaVovoLucia, link: 'https://www.instagram.com/padariavovolucia/' },
  { nome: 'Feirão Tio João', logo: TioJoao, link: 'https://www.facebook.com/p/Feir%C3%A3o-Tio-Jo%C3%A3o-100057561095181/' },
  { nome: 'Empório do Campo Hortifruti', logo: EmporioCampo, link: 'https://www.facebook.com/emporiodocampohortifruti/' },
  { nome: 'Padaria do Toninho', logo: PadariaToninho, link: 'https://www.facebook.com/padariaeconfeitariatoninho/' },
  { nome: 'Supermercados Bueno Serve', logo: SupermercadoBuenoServ, link: 'https://www.instagram.com/buenoserve.supermercados/' },

  { nome: 'Padaria Pedras da Lua', logo: PadariaPedrasLua, link: '' },
  { nome: 'Mercado Toninho Serv', logo: MercadoToninhoServ, link: '' },
  
];

const Carrossel = () => {
  return (
    <div className="carrossel-container">
      <h2 className="carrossel-title">Clientes</h2>
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
    </div>
  );
};

export default Carrossel;

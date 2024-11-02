import React from 'react';
import './Produtos.css'; // Importando o arquivo CSS

import Amanteigados from '../styles/amanteigados.png'
import Coco from '../styles/coco.png'
import Nata from '../styles/nata.png'
import Castanha from '../styles/castanha.png'
import Canela from '../styles/canela.png'
import Beliscao from '../styles/beliscao.png'
import Casadinho from '../styles/casadinho.png'
import Chocolate from '../styles/chocolate.png'
import Pdf from '../arquivoPdf/Pdf';

const produtos = [
  {
    nome: 'Biscoito Amanteigado',
    descricao: 'Clássico irresistível, leve e crocante.',
    imagem: Amanteigados
  },
  {
    nome: 'Biscoito de Nata',
    descricao: 'Delicado sabor de nata com um toque especial.',
    imagem: Nata
  },
  {
    nome: 'Biscoito de Castanha de Caju',
    descricao: 'Sabor rico da castanha em um biscoito crocante.',
    imagem: Castanha
  },
  {
    nome: 'Biscoito de Canela',
    descricao: 'Aqueça o dia com o toque suave da canela.',
    imagem: Canela
  },
  {
    nome: 'Biscoito de Coco',
    descricao: 'Sabor refrescante e tropical do coco.',
    imagem: Coco
  },
  {
    nome: 'Biscoito Beliscão de Goiaba',
    descricao: 'Delicioso biscoito recheado com goiaba.',
    imagem: Beliscao
  },
  {
    nome: 'Biscoito Casadinho de Doce de Leite',
    descricao: 'Doçura irresistível com recheio de doce de leite.',
    imagem: Casadinho
  },
  {
    nome: 'Biscoito Amanteigado com Cobertura de Chocolate',
    descricao: 'Amanteigado clássico com cobertura de chocolate.',
    imagem: Chocolate
  }
];


const Produtos = () => {
  return (
    <section className="produtos">
      <h2 className="produtos-title">Produtos</h2>
      <div className="produtos-grid">
        {produtos.map((produto, index) => (
          <div key={index} className="produto-card">
            <div className="produto-imagem-container">
              <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
            
            </div>
            <h3 className="produto-nome">{produto.nome}</h3>
            <p className="produto-descricao">{produto.descricao}</p>
          </div>
        ))}
      </div>
      <Pdf />
    </section>
  );
};

export default Produtos;

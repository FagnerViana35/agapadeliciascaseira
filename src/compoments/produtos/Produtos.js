import React from 'react';
import './Produtos.css'; // Importando o arquivo CSS

const produtos = [
  {
    nome: 'Biscoito Amanteigado',
    descricao: 'Clássico irresistível, leve e crocante.',
    imagem: '/imagens/biscoito-amanteigado.jpg'
  },
  {
    nome: 'Biscoito de Nata',
    descricao: 'Delicado sabor de nata com um toque especial.',
    imagem: '/imagens/biscoito-nata.jpg'
  },
  {
    nome: 'Biscoito de Castanha de Caju',
    descricao: 'Sabor rico da castanha em um biscoito crocante.',
    imagem: '/imagens/biscoito-castanha-caju.jpg'
  },
  {
    nome: 'Biscoito de Canela',
    descricao: 'Aqueça o dia com o toque suave da canela.',
    imagem: '/imagens/biscoito-canela.jpg'
  },
  {
    nome: 'Biscoito de Coco',
    descricao: 'Sabor refrescante e tropical do coco.',
    imagem: '/imagens/biscoito-coco.jpg'
  },
  {
    nome: 'Biscoito Beliscão de Goiaba',
    descricao: 'Delicioso biscoito recheado com goiaba.',
    imagem: '/imagens/biscoito-beliscao-goiaba.jpg'
  },
  {
    nome: 'Biscoito Casadinho de Doce de Leite',
    descricao: 'Doçura irresistível com recheio de doce de leite.',
    imagem: '/imagens/biscoito-casadinho-doce-leite.jpg'
  },
  {
    nome: 'Biscoito Amanteigado com Cobertura de Chocolate',
    descricao: 'Amanteigado clássico com cobertura de chocolate.',
    imagem: '/imagens/biscoito-amanteigado-chocolate.jpg'
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
    </section>
  );
};

export default Produtos;

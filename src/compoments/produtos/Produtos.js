import React from 'react';
import './Produtos.css'; // Importando o arquivo CSS

const produtos = [
  {
    nome: 'Biscoito de Manteiga',
    descricao: 'Um clássico irresistível com textura leve e crocante.',
    preco: 'R$ 15,00',
    imagem: '/imagens/biscoito-manteiga.jpg' // Ajuste o caminho da imagem conforme necessário
  },
  {
    nome: 'Biscoito de Gengibre',
    descricao: 'Sabor marcante com um toque de especiarias.',
    preco: 'R$ 18,00',
    imagem: '/imagens/biscoito-gengibre.jpg'
  },
  {
    nome: 'Biscoito de Chocolate',
    descricao: 'Para os amantes de chocolate, uma delícia cremosa.',
    preco: 'R$ 20,00',
    imagem: '/imagens/biscoito-chocolate.jpg'
  },
  {
    nome: 'Biscoito de Canela',
    descricao: 'Adoce o seu dia com o sabor suave da canela.',
    preco: 'R$ 16,00',
    imagem: '/imagens/biscoito-canela.jpg'
  },
  {
    nome: 'Biscoito de Limão',
    descricao: 'Refrescante e cítrico, uma combinação perfeita.',
    preco: 'R$ 17,00',
    imagem: '/imagens/biscoito-limao.jpg'
  },
  {
    nome: 'Biscoito Integral',
    descricao: 'Uma opção saudável e deliciosa para o seu lanche.',
    preco: 'R$ 19,00',
    imagem: '/imagens/biscoito-integral.jpg'
  },
  {
    nome: 'Biscoito de Coco',
    descricao: 'Sabor tropical com a leveza do coco.',
    preco: 'R$ 21,00',
    imagem: '/imagens/biscoito-coco.jpg'
  },
  {
    nome: 'Biscoito de Nozes',
    descricao: 'Uma combinação crocante e saborosa de nozes.',
    preco: 'R$ 22,00',
    imagem: '/imagens/biscoito-nozes.jpg'
  }
];

const Produtos = () => {
  return (
    <section className="produtos">
      <h2 className="produtos-title">Nossos Produtos</h2>
      <div className="produtos-grid">
        {produtos.map((produto, index) => (
          <div key={index} className="produto-card">
            <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
            <h3 className="produto-nome">{produto.nome}</h3>
            <p className="produto-descricao">{produto.descricao}</p>
            <p className="produto-preco">{produto.preco}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Produtos;

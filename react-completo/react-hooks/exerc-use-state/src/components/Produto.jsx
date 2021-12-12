import React from 'react'

const Produto = ({ stateApp }) => {
  return (
    <div>
        <h2>{stateApp.nome}</h2>
        <img style={{width: "200px"}} src={stateApp.fotos[0].src} alt={ stateApp.nome } />
        <p>R$ <span style={{fontSize: "1.4rem"}}> {stateApp.preco} </span></p>
        <p>Descrição: {stateApp.descricao}</p>
      </div>
  );
};

export default Produto

import data from "../data.js";

const Lista = () => {
  const arrayData = data();

  const listProdutos = (lista) => {
    const arrayFinal = lista.map((produto, index) => {
      return (
        <div key={index}>
          <p>{produto.nome}</p>
          <ul>
            <li>{produto.propriedades[0]}</li>
            <li>{produto.propriedades[1]}</li>
          </ul>
        </div>
      );
    });
    return arrayFinal;
  };

  return (
    <div>
      <h2>Produtos</h2>
      {listProdutos(arrayData)}
    </div>
  );
};

export default Lista;

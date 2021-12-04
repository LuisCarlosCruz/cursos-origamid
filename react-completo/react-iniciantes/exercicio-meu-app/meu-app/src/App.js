import React from "react";

const App = () => {
  const luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
    ],
    ativa: true,
  };

  const mario = {
    cliente: "Mario",
    idade: 31,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
      { nome: "Guitarra", preco: "R$ 3500" },
    ],
    ativa: false,
  };

  const statusStyle = (cliente) => {
    return cliente.ativa ? { color: "green" } : { color: "red" };
  };

  const somaCompra = ({compras}) => {
    let preco = []
    compras.map((compra) => {
      const valor = +(compra.preco.replace("R$", ''))
      return preco.push(valor)
    });
    const valorTotal = preco.reduce((acc, cur) => acc + cur);
    console.log('luis');
    return "R$ " + valorTotal;
  }

  const cliente = (cliente) => {
    return (
      <section>
        <p>Nome: {cliente.cliente}</p>
        <p>idade: {cliente.idade}</p>
        <p>
          Status:
          <span style={statusStyle(cliente)}>
            {cliente.ativa ? " ativo" : " inativo"}
          </span>
        </p>
        <p>Total: {somaCompra(cliente)}</p>
      </section>
    );
  };

  return (
    <div>
      {cliente(luana)}
    </div>
  );
};

export default App;
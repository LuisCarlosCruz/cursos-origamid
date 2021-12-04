function App() {
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  const show = (produtos) => {
    return produtos.map(({nome, preco, cores}) => {
      const precoNumber = Number(preco.replace('R$', ''));
      const [pri, seg, ter] = cores;
      if (precoNumber > 1500) {
        return (
          <div>
            <h3>{nome}</h3>
            <p>R$: {precoNumber}</p>
            <ul>
              <li style={{background:pri}}>{pri}</li>
              <li style={{background:seg}}>{seg}</li>
              <li style={{background:ter}}>{ter}</li>
            </ul>
          </div>
        )
      }
    });
  }
  
 
  return (
    <div className="App">
      <h1>{show(produtos)}</h1>
    </div>
  );
}

export default App;

import React from 'react'

function App() {
  const [state, setState] = React.useState('luis');

  return (
    <div className="App">
      <h1>TESTE</h1>
      <h3>{state}</h3>
    </div>
  );
}

export default App;

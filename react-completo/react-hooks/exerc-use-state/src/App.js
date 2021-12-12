import React, { useState } from "react";
import Produto from "./components/Produto";

function App() {

  const [stateApp, setStateApp] = useState();
  const [load, setLoad ] = useState(true);

  const handleOnClick = async ({ target }) => {
    
      const URL = `https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`;
      const get = await fetch(URL);
      const getJSON = await get.json();
      setStateApp(getJSON);
      setLoad(false);
  };

  return (
    <div style={{fontFamily: "sans-serif"}}>
      { stateApp ? 
        <p>Usuário: <span style={{fontWeight: "600"}}> {stateApp.usuario_id}  </span></p> : null }
      <h1>PRODUTOS</h1>
      { load ? <p>qual o produto ...</p> : null }
      <button onClick={handleOnClick}>tablet</button>
      <button onClick={handleOnClick}>smartphone</button>
      <button onClick={handleOnClick}>notebook</button>
      { load === false && stateApp  ? <Produto stateApp={ stateApp } /> : null }
    </div>
  );
}

export default App;

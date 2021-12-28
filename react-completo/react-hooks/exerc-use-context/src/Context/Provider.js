import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";

const Provider = ({ children }) => {

  // busca produtos e seta no estado assim que monta
  useEffect(() => {
    const URL = "https://ranekapi.origamid.dev/json/api/produto/";
    fetch(URL)
      .then((resp) => resp.json())
      .then((resp) => setState(resp));
    return null;
  }, []);

  // função para limpar o estado
  const limpaEstado = () => {
    setState(null);
  }

  // estado
  const [state, setState] = useState(null);

  // estado obj para provider
  const contextValue = {
    state,
    setState,
    limpaEstado
  }

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;
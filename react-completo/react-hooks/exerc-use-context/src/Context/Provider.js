import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";

const Provider = ({ children }) => {

  const [state, setState] = useState(null);

  const contextValue = {
    state,
    setState
  }

  useEffect(() => {
    const URL = "https://ranekapi.origamid.dev/json/api/produto/";
    fetch(URL)
      .then((resp) => resp.json())
      .then((resp) => setState(resp));
    return null;
  }, []);

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
};

export default Provider;
import React, { useState, useEffect } from 'react';

const Buttons = () => {

  const [state, setState] = useState(null);

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('produto'));
    setState(getLocalStorage);
  }, []);

  const handleOnClick = async ({ target }) => {
    const URL = `https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`;
    const fetchApi = await fetch(URL);
    const fetchJSON = await fetchApi.json();
    setState(fetchJSON);
    localStorage.setItem('produto', JSON.stringify(fetchJSON));
  }

  return (
    <div>
      <button onClick={handleOnClick}>smartphone</button>
      <button onClick={handleOnClick}>notebook</button>
      {
        state ?
        <div>
          <p style={{fontSize: '1.2rem'}}>{state? state.nome : null}</p>
          <p>R$ <span style={{fontSize: '1.3rem', color: '#7FFF00'}}> { state.preco } </span></p>
          <img src={ state.fotos[0].src } alt={ state.nome } style={{width: '250px'}} />
          <p></p>
        </div> : null
      }
    </div>
  )
}

export default Buttons

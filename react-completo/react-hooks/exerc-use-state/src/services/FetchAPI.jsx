import React, { useState } from 'react';

const FetchAPI = async () => {

  const [stateFetch, setStateFetch] = useState({});

  const URL = `https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`
  const get = await fetch(URL);
  const getJSON = await get.json();
  setStateFetch(getJSON);

  return (
    <div>
      <h2> luis </h2>
    </div>
  );
}
export default FetchAPI;

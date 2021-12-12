import React from 'react'

const fetch = () => {

  const handleFetch = () => {
    const get = fetch('https://ranekapi.origamid.dev/json/api/produto/tablet')
      .then((response) => response.json())
      .then((data) => console.log(data));
      return get;
  }

  return (
    <div>
      {handleFetch()}
    </div>
  )
}

export default fetch

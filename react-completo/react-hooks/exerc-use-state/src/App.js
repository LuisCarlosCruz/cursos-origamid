import React, { useState } from 'react';

function App() {
  const [state, setState] = useState(false);

  const handleOnClick = () => {
    setState(!state);
  }

  return (
    <div className="App">
      <button onClick={handleOnClick}>TESTE</button>
      {console.log(state)}
    </div>
  );
}

export default App;

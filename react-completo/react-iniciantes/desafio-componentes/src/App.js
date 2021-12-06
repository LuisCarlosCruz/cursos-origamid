import Produtos from "./components/Produtos.jsx";
import Home from "./components/Home.jsx";
import Lista from "./components/Lista.jsx";

function App() {
  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        <li>
          <Home />
        </li>
        <li>
          <Produtos />
        </li>
      </ul>
      { window.location.pathname === "/" ? (<h3>luis</h3>) : <Lista /> }
    </div>
  );
}

export default App;

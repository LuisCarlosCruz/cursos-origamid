import Produtos from "./components/Produtos.jsx";
import Home from "./components/Home.jsx";
import Lista from "./components/Lista.jsx";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Home />
        </li>
        <li>
          <Produtos />
        </li>
      </ul>
      { window.location.pathname === "/" ?
       (<h3>Página principal</h3>) : <Lista /> }
    </div>
  );
}

export default App;

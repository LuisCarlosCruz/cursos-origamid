import data from "../data.js";

const Lista = () => {
  const arrayData = data();
  const [primeiro, segundo] = arrayData;

  return (
    <div>
      <ul>
        <li>{primeiro.nome + ' - ' + primeiro.propriedades[0]}</li>
        <li></li>
      </ul>
    </div>
  )
}

export default Lista

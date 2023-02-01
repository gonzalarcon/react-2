import Boton from './components/Boton';
import {useState} from "react";


function App() {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [showButton, setShowButton] = useState (false);

  const setButton = () => {
    const user = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if (user.length>0 && password.length>0)
    {setShowButton(true);
    } else setShowButton(false);
  }

  const validarInputs = () => {
    if (Name==="ADL" && Password ==="252525") {
      alert("¡Bienvenido!")
    } else {
      alert("Los datos no son correctos, inténtalo de nuevo")
    }
    setName('')
    setPassword('')
  }

  return (
    <div className="App">
      <h1>Desafío 'Estado de los componentes y eventos'</h1>
      <div className="main" onChange={setButton}>
        <input type="name" id="name" placeholder="Nombre" value={Name} onChange={(e)=> setName(e.target.value)}/>
        <input type="password" id ="password" value={Password} placeholder="Contraseña" onChange={(e)=> setPassword(e.target.value)}/>
        {showButton && <Boton onClick={() => validarInputs()}>Iniciar Sesión</Boton>}
      </div>
    </div>
  );

}

export default App;

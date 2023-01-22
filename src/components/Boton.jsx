import { useState } from "react"



const Boton = (prop) =>{
    const title = prop;
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
            return alert("¡Bienvenido!")
        } else {
            return alert("Los datos no son correctos, inténtalo de nuevo")
        };
    }
    return(
        <div className="main" onChange={setButton}>
            <input type="name" id ="name" placeholder="Nombre" onChange={(e)=> setName(e.target.value)}/>
            <input type="password" id ="password" placeholder="Contraseña" onChange={(e)=> setPassword(e.target.value)}/>
            {showButton &&<button className="Boton" type="submit" onClick={() => validarInputs()}> {prop.title}</button>}
        </div>
    )

}





export default Boton
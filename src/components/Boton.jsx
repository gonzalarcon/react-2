const Boton = (props) =>{
    return(
      <>
       <button type="submit" className="Boton" onClick={props.onClick}>{props.children}</button>
      </>
    )

}

export default Boton

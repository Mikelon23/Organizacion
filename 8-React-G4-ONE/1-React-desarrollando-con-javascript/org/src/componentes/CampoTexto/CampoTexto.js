import React, { useState } from "react";
import "./CampoTexto.css"
const Campo = (props) => {
    //const [valor, actualizarValor] = useState("");
    //console.log("Datos ", props);
    const placeholdermodificador = `${props.placeholder}...`

    //Desstructuracion
    const { type = "text" } = props;
    //console.log(type);

    const manejarCambio = (e) => {
      //  console.log("Cambio en el campo de texto", e.target.value);
        props.actualizarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={placeholdermodificador}
         required = {props.required} 
         value={props.valor}
         onChange = {manejarCambio}
         type = {type}
         />
    </div>;
}

export default Campo;
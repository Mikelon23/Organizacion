import {useState} from "react";
import "./MiOrg.css"
const MiOrg = (props) => {
    //Estado - Hooks
    //useState
    //useState()
    //console.log();
    /*la forma en la que se usa un componente en hook
    const [nombreVariable, FuncionActualizada] = useState(valorInicial) */
    //const [nombre, actualizarNombre] = useState("Miguel");
    
    /*const [mostrar, actualizarMostrar] = useState(true);
    const manejarClick = () => {
        console.log("Click en la imagen", !mostrar);
        actualizarMostrar(!mostrar);
    }*/
    return <section className="organizacion">
        <h3 className = 'title'>Mi Organización {/*nombre*/}</h3>
        <img src='/img/add.png' alt="Mi organización" onClick = {props.cambiarMostrar} />
    </section> 
}

export default MiOrg;
        
import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Button"
const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarpuesto] = useState("")
    const [foto, actualizarfoto] = useState("")
    const [equipo, actualizarequipo] = useState("")

    const [titulo, actualizartitulo] = useState("")
    const [color, actualizarcolor] = useState("")

    const {registrarColaborador, crearEquipo} = props;

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio") /*, e*/

        let datosAenviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAenviar);
    };

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    };

    return <section className="Formulario"> 
        <form onSubmit = {manejarEnvio}>  
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto titulo = "Nombre" 
            placeholder = "Ingrese nombre" 
            required = {true}
            valor = {nombre}
            actualizarValor = {actualizarNombre}
            />
            <CampoTexto titulo = "Puesto" 
            placeholder = "Ingrese puesto" 
            required
            valor = {puesto}
            actualizarValor = {actualizarpuesto}
            />
            <CampoTexto titulo = "Foto" 
            placeholder = "Ingrese enlace de foto" 
            required
            valor = {foto}
            actualizarValor = {actualizarfoto}
            />
            <ListaOpciones 
            valor = {equipo}
            actualizarequipo = {actualizarequipo}    
            equipos = {props.equipos}
            />
            <Boton texto = "Crear"/>
        </form>
        <form onSubmit = {manejarNuevoEquipo}>  
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
            titulo = "Titulo" 
            placeholder = "Ingrese Titulo" 
            required
            valor = {titulo}
            actualizarValor = {actualizartitulo}
            />
            <CampoTexto 
            titulo = "Color" 
            placeholder = "Ingrese color en hexadecimal" 
            required
            valor = {color}
            actualizarValor = {actualizarcolor}
            type = "color"
            />
            <Boton texto = "Registrar equipo"/>
        </form>
         </section>
}

export default Formulario;
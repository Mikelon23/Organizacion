import "./Equipo.css"
import Colaborador from "../Colaboradores/Colaborador"
import hexToRgba from "hex-to-rgba"
const Equipo = (props) => {
    const {colorPrimario, colorSecundario, nombre, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    //console.log(colaboradores.length > 0);

    const estiloNombre = {
        borderColor: colorPrimario
    }           

    return <>
    {   colaboradores.length > 0 &&
        <section className = "Equipo" style = {obj}>
            <input 
            type="color"
            className = "Equipo__color"
            value = {hexToRgba(colorPrimario, 0.6)}
            onChange={(evento) => {
                actualizarColor(evento.target.value, id);
                //props.cambiarColor(e.target.value, nombre)
            }
            }
            />
            <h3 style  = {estiloNombre}>{nombre/*props.Equipo*/}</h3>
                <div className = "Colaboradores"></div>
                    {
                        colaboradores.map((colaborador, index) => {
                            return <Colaborador 
                            datos = {colaborador} 
                            key = {index}
                            colorPrimario = {colorPrimario}
                            eliminarColaborador = {eliminarColaborador}
                            like = {like}
                            />
                        })
                    }
        </section>
    }
    </>
}

export default Equipo;
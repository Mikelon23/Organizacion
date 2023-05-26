import "./Colaborador.css"
import { AiOutlineCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, favorito } = props.datos;
    const { colorPrimario, eliminarColaborador, like } = props;
    return <div className="Colaborador">
        <AiOutlineCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="Encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="Colaborador__info">
            <h4> {nombre} </h4>
            <h5> {puesto} </h5>
            {
                favorito ? <AiFillHeart color="red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />
            }
        </div>
    </div>
}

export default Colaborador;
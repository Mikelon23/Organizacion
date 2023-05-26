import "../Boton/Button.css";
const Boton = (props) => {
    return <button className = "boton">
        {props.texto}
        </button>
    }

export default Boton;

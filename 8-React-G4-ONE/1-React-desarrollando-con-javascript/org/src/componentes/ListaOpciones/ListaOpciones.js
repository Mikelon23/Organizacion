import "../ListaOpciones/ListaOpciones.css"
const ListaOpciones = (props) => {
    /*Metodo map -> arreglo.map((equipo, index) = () =>{
        return <option> {equipo} </option>
    }) */

    /*const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ];*/

    const manejarCambio = (e) => {
        console.log("Cambio en el campo de texto", e.target.value);
        props.actualizarequipo(e.target.value);
    }

    return <div className = "Lista-opciones">
        <label> Equipos </label>
        <select value = {props.valor} onChange={manejarCambio}>
            <option value='' disabled defaultValue='' hidden> Selecciona un equipo </option>
            {props.equipos.map((equipo, index) => <option key = {index} value={equipo}> {equipo} </option>)
            /*=> {
                return <option key = {index}> {equipo} </option>
            }) */}
        </select>
    </div>
}
 export default ListaOpciones;

 /*<select>
          <option> Programación </option>
            <option> Front End </option>
            <option> Data Science </option>
            <option> Devops </option>
            <option> UX y Diseño </option>
            <option> Móvil </option>
            <option> Innovación y Gestión </option>
        </select> */
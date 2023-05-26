import { useState } from 'react';
import {v4 as uuidv4} from "uuid";
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuidv4(),
      nombre: "Migue", 
    puesto: "CFO", 
    foto: "https://github.com/christianpva.png", 
    equipo: "Devops", 
    favorito: false
  },
    { 
      id: uuidv4(),
      nombre: "Miguelon", 
    puesto: "CEO", 
    foto: "https://github.com/christianpva.png", 
    equipo: "Programación",
    favorito: true
  },
    { 
      id: uuidv4(),
      nombre: "Mike", 
    puesto: "CBO", 
    foto: "https://github.com/christianpva.png", 
    equipo: "Innovación y Gestión",
    favorito: false
  }
  ]);  
  const [equipos, actualizarEquipos] = useState([
      {
        id: uuidv4(),
        nombre: "Programación",
        colorPrimario: "#57C278 ",
        colorSecundario: "#D9F7E9",
      },
      {
        id: uuidv4(),
        nombre: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF",
      },
      {
        id: uuidv4(),
        nombre: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2",
      },
      {
        id: uuidv4(),
        nombre: "Devops", 
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8",
      },
      {
        id: uuidv4(),
        nombre: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5",
      },
      {
        id: uuidv4(),
        nombre: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9",
      },
      {
        id: uuidv4(),
        nombre: "Innovación y Gestión", 
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF",
      },
  ]);
  
  //Ternario --> condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("El colaborador es", colaborador);
    //Spread operator ...colaboradores, colaborador
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    //filter debe recibir una arrow funcion
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  };

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar color: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  };

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log("Crear equipo", nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }]);
  };

  //reaccionar a favorito
  const like = (id) => {
    console.log("Like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresActualizados);
  };


  return (
    <div>
     {/*Header()
     <Header> </Header>*/
     }
      <Header /> 
      
      {/*mostrarFormulario === true ? <Formulario 
      equipos = {equipos.map((equipo) => equipo.nombre)}
      registrarColaborador = {registrarColaborador}
      /> : <> </><div> </div>*/
      mostrarFormulario && <Formulario 
      equipos = {equipos.map((equipo) => equipo.nombre)}
      registrarColaborador = {registrarColaborador}
      crearEquipo = {crearEquipo}
      />
      }
      {/*Metodo corto circuito --> condicion && seMuestra
      mostrarFormulario && <Formulario />*/};

      <MiOrg cambiarMostrar = {cambiarMostrar} />

      {
      equipos.map((equipo) => {
        //console.log("el equipo",equipo);
        return <Equipo 
        datos = {equipo} 
        key = {equipo.nombre}
        colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.nombre)}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor = {actualizarColor}
        like = {like}
        />
      })
      }
      
      <Footer />
      
    </div>
  );
}

export default App;

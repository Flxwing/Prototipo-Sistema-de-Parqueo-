import { useEffect, useState } from "react";
import parqueosIniciales from "./data/parqueos";
import Buscador from "./components/Buscador";
import FiltroEstado from "./components/FiltroEstado";
import FiltroTipo from "./components/FiltroTipo";
import ListaParqueos from "./components/ListaParqueos";
import DetalleParqueo from "./components/DetalleParqueo";
import NavegacionVistas from "./components/NavegacionVistas";
import VistaMunicipalidad from "./components/VistaMunicipalidad";
import VistaAdministrador from "./components/VistaAdministrador";
//import MapaMock from "./MapaMock";

const STORAGE_KEY = "parqueos_app_datos";
function cargarParqueosIniciales() {
  const datosGuardados = localStorage.getItem(STORAGE_KEY);

  if (datosGuardados) {
    try {
      return JSON.parse(datosGuardados);
    } catch (error) {
      console.error("Error al leer localStorage:", error);
    }
  }

  return parqueosIniciales;
}

function App() {
  const [vistaActual, setVistaActual] = useState("conductor");
  const [destino, setDestino] = useState("");
  const [parqueos, setParqueos] = useState(cargarParqueosIniciales);
  const [resultados, setResultados] = useState([]);
  const [parqueoSeleccionado, setParqueoSeleccionado] = useState(null);
  const [filtroEstado, setFiltroEstado] = useState("todos");
  const [filtroTipo, setFiltroTipo] = useState("todos");
  const [detalleAbierto, setDetalleAbierto] = useState(false);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(parqueos));
  }, [parqueos]);

  const reiniciarDatos = () => {
    localStorage.removeItem(STORAGE_KEY);
    setParqueos(parqueosIniciales);
    setResultados([]);
    setParqueoSeleccionado(null);
  };

  const buscarParqueos = () => {
    const texto = destino.trim().toLowerCase();

    const filtrados = parqueos.filter((parqueo) =>
      parqueo.destinoCercano.toLowerCase().includes(texto)
    );

    setResultados(filtrados);
    setParqueoSeleccionado(null);
    setDetalleAbierto(false);
  };

  const actualizarEstadoParqueo = (id, nuevoEstado) => {
    const parqueosActualizados = parqueos.map((parqueo) =>
      parqueo.id === id ? { ...parqueo, estado: nuevoEstado } : parqueo
    );

    const resultadosActualizados = resultados.map((parqueo) =>
      parqueo.id === id ? { ...parqueo, estado: nuevoEstado } : parqueo
    );

    setParqueos(parqueosActualizados);
    setResultados(resultadosActualizados);

    if (parqueoSeleccionado && parqueoSeleccionado.id === id) {
      setParqueoSeleccionado({
        ...parqueoSeleccionado,
        estado: nuevoEstado,
      });
    }
  };

  const registrarOcupacion = () => {
    if (!parqueoSeleccionado) return;
    actualizarEstadoParqueo(parqueoSeleccionado.id, "ocupado");
  };

  const reservarEspacio = () => {
    if (!parqueoSeleccionado) return;
    actualizarEstadoParqueo(parqueoSeleccionado.id, "reservado");
  };

  const agregarEspacioZonaPublica = (nuevoEspacio) => {
    const nuevo = {
      id: Date.now(),
      nombre: nuevoEspacio.nombre,
      destinoCercano: nuevoEspacio.destinoCercano,
      tipo: "Zona pública",
      ubicacion: nuevoEspacio.ubicacion,
      estado: nuevoEspacio.estado,
      techado: nuevoEspacio.techado,
      pavimentado: nuevoEspacio.pavimentado,
      espaciosMarcados: nuevoEspacio.espaciosMarcados,
      imagen: "Espacio de zona pública registrado por municipalidad",
      referenciaLlegada:
        nuevoEspacio.referenciaLlegada || "Referencia generada por municipalidad para este espacio.",
      vistaVisual:
        nuevoEspacio.vistaVisual || "Espacio de zona pública registrado en el sistema.",
      foto: nuevoEspacio.foto || "",
    };

    setParqueos((prev) => [...prev, nuevo]);
  };

  const guardarParqueoAdministrador = (datosParqueo) => {
    if (datosParqueo.id) {
      const parqueosActualizados = parqueos.map((parqueo) =>
        parqueo.id === datosParqueo.id
          ? {
              ...parqueo,
              nombre: datosParqueo.nombre,
              destinoCercano: datosParqueo.destinoCercano,
              ubicacion: datosParqueo.ubicacion,
              estado: datosParqueo.estado,
              techado: datosParqueo.techado,
              pavimentado: datosParqueo.pavimentado,
              espaciosMarcados: datosParqueo.espaciosMarcados,
              referenciaLlegada: datosParqueo.referenciaLlegada,
              vistaVisual: datosParqueo.vistaVisual,
              foto: datosParqueo.foto || "",
            }
          : parqueo
      );

      setParqueos(parqueosActualizados);
      return;
    }

    const nuevo = {
      id: Date.now(),
      nombre: datosParqueo.nombre,
      destinoCercano: datosParqueo.destinoCercano,
      tipo: "Parqueo de acceso público",
      ubicacion: datosParqueo.ubicacion,
      estado: datosParqueo.estado,
      techado: datosParqueo.techado,
      pavimentado: datosParqueo.pavimentado,
      espaciosMarcados: datosParqueo.espaciosMarcados,
      imagen: "Parqueo de acceso público registrado por administrador",
      referenciaLlegada:
        datosParqueo.referenciaLlegada || "Referencia visual registrada por el administrador.",
      vistaVisual:
        datosParqueo.vistaVisual || "Parqueo de acceso público registrado en el sistema.",
      foto: datosParqueo.foto || "",
    };

    setParqueos((prev) => [...prev, nuevo]);
  };

  const resultadosFiltrados = resultados.filter((parqueo) => {
    const cumpleEstado =
      filtroEstado === "todos" || parqueo.estado === filtroEstado;

    const cumpleTipo =
      filtroTipo === "todos" || parqueo.tipo === filtroTipo;

    return cumpleEstado && cumpleTipo;
  });

  const seleccionarParqueo = (parqueo) => {
    setParqueoSeleccionado(parqueo);
    setDetalleAbierto(true);
  };

  const cerrarDetalle = () => {
    setDetalleAbierto(false);
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>Plataforma de Gestión de Espacios de Parqueo Urbano</h1>
        <p>
          Prototipo funcional para consultar parqueos disponibles cerca del destino.
        </p>
      </div>

      <button className="boton-secundario" onClick={reiniciarDatos}>
        Reiniciar datos de prueba
      </button>

      <NavegacionVistas
        vistaActual={vistaActual}
        setVistaActual={setVistaActual}
      />

      {vistaActual === "conductor" && (
        <>
          <Buscador
            destino={destino}
            setDestino={setDestino}
            buscarParqueos={buscarParqueos}
          />

          <FiltroEstado
            filtroEstado={filtroEstado}
            setFiltroEstado={setFiltroEstado}
          />

          <FiltroTipo
            filtroTipo={filtroTipo}
            setFiltroTipo={setFiltroTipo}
          />

          <div className="layout">
            <ListaParqueos
              resultados={resultadosFiltrados}
              seleccionarParqueo={seleccionarParqueo}
            />

            <DetalleParqueo
              parqueoSeleccionado={parqueoSeleccionado}
              registrarOcupacion={registrarOcupacion}
              reservarEspacio={reservarEspacio}
              detalleAbierto={detalleAbierto}
              cerrarDetalle={cerrarDetalle}
            />
          </div>
        </>
      )}

      {vistaActual === "municipalidad" && (
        <VistaMunicipalidad
          parqueos={parqueos}
          agregarEspacioZonaPublica={agregarEspacioZonaPublica}
          actualizarEstadoParqueo={actualizarEstadoParqueo}
        />
      )}

      {vistaActual === "administrador" && (
        <VistaAdministrador
          parqueos={parqueos}
          guardarParqueoAdministrador={guardarParqueoAdministrador}
          actualizarEstadoParqueo={actualizarEstadoParqueo}
        />
      )}
    </div>
  );
}

export default App;
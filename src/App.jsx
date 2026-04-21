import { useState } from "react";
import parqueosIniciales from "./data/parqueos";
import Buscador from "./components/Buscador";
import FiltroEstado from "./components/FiltroEstado";
import FiltroTipo from "./components/FiltroTipo";
import ListaParqueos from "./components/ListaParqueos";
import DetalleParqueo from "./components/DetalleParqueo";

function App() {
  const [destino, setDestino] = useState("");
  const [parqueos, setParqueos] = useState(parqueosIniciales);
  const [resultados, setResultados] = useState([]);
  const [parqueoSeleccionado, setParqueoSeleccionado] = useState(null);
  const [filtroEstado, setFiltroEstado] = useState("todos");
  const [filtroTipo, setFiltroTipo] = useState("todos");

  const buscarParqueos = () => {
    const texto = destino.trim().toLowerCase();

    const filtrados = parqueos.filter((parqueo) =>
      parqueo.destinoCercano.toLowerCase().includes(texto)
    );

    setResultados(filtrados);
    setParqueoSeleccionado(null);
  };

  const actualizarParqueo = (id, nuevoEstado) => {
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
    actualizarParqueo(parqueoSeleccionado.id, "ocupado");
  };

  const reservarEspacio = () => {
    if (!parqueoSeleccionado) return;
    actualizarParqueo(parqueoSeleccionado.id, "reservado");
  };

  const resultadosFiltrados = resultados.filter((parqueo) => {
    const cumpleEstado =
      filtroEstado === "todos" || parqueo.estado === filtroEstado;

    const cumpleTipo =
      filtroTipo === "todos" || parqueo.tipo === filtroTipo;

    return cumpleEstado && cumpleTipo;
  });

  return (
    <div className="app">
      <div className="app-header">
        <h1>Plataforma de Gestión de Espacios de Parqueo Urbano</h1>
        <p>
          Prototipo funcional para consultar parqueos disponibles cerca del destino.
        </p>
      </div>

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
          setParqueoSeleccionado={setParqueoSeleccionado}
        />

        <DetalleParqueo
          parqueoSeleccionado={parqueoSeleccionado}
          registrarOcupacion={registrarOcupacion}
          reservarEspacio={reservarEspacio}
        />
      </div>
    </div>
  );
}

export default App;
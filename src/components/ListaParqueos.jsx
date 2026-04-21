function ListaParqueos({ resultados, setParqueoSeleccionado }) {
  const textoEstado = (estado) => {
    if (estado === "disponible") return "Disponible";
    if (estado === "ocupado") return "Ocupado";
    if (estado === "reservado") return "Reservado";
    return estado;
  };

  const claseEstado = (estado) => {
    if (estado === "disponible") return "estado estado-disponible";
    if (estado === "ocupado") return "estado estado-ocupado";
    if (estado === "reservado") return "estado estado-reservado";
    return "estado";
  };

  return (
    <div className="panel">
      <h2>Resultados</h2>

      {resultados.length === 0 ? (
        <div className="lista-vacia">
          No hay resultados todavía. Haz una búsqueda para ver opciones de parqueo.
        </div>
      ) : (
        <div className="lista-parqueos">
          {resultados.map((parqueo) => (
            <div className="card-parqueo" key={parqueo.id}>
              <div className="card-parqueo-top">
                <div>
                  <h3>{parqueo.nombre}</h3>
                  <p>{parqueo.tipo}</p>
                </div>

                <span className={claseEstado(parqueo.estado)}>
                  {textoEstado(parqueo.estado)}
                </span>
              </div>

              <p><strong>Ubicación:</strong> {parqueo.ubicacion}</p>
              <p><strong>Destino cercano:</strong> {parqueo.destinoCercano}</p>

              <button
                className="boton-secundario"
                onClick={() => setParqueoSeleccionado(parqueo)}
              >
                Ver detalle
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaParqueos;
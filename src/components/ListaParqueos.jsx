function ListaParqueos({ resultados, seleccionarParqueo }) {
  const textoEstado = (estado) => {
    if (estado === "disponible") return "Disponible";
    if (estado === "ocupado") return "Ocupado";
    if (estado === "reservado") return "Reservado";
    if (estado === "irregular") return "Irregular";
    return estado;
  };

  const claseEstado = (estado) => {
    if (estado === "disponible") return "estado estado-disponible";
    if (estado === "ocupado") return "estado estado-ocupado";
    if (estado === "reservado") return "estado estado-reservado";
    if (estado === "irregular") return "estado estado-irregular";
    return "estado";
  };

  return (
    <div className="panel">
      <h2>Resultados</h2>

      {resultados.length === 0 ? (
        <div className="lista-vacia">
          No hay resultados todavía. Haz una búsqueda para ver opciones de
          parqueo.
        </div>
      ) : (
        <div className="lista-parqueos">
          {resultados.map((parqueo) => (
            <div className="card-parqueo card-parqueo-visual" key={parqueo.id}>
              <div className="mini-preview">
                {parqueo.foto ? (
                  <img
                    src={parqueo.foto}
                    alt={`Vista de ${parqueo.nombre}`}
                    className="mini-preview-img"
                  />
                ) : (
                  <div className="mini-preview-placeholder">
                    <span>{parqueo.tipo}</span>
                  </div>
                )}
              </div>

              <div className="card-parqueo-contenido">
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

                <div className="chips-info">
                  <span className="chip-info">
                    {parqueo.techado ? "Techado" : "No techado"}
                  </span>
                  <span className="chip-info">
                    {parqueo.pavimentado ? "Pavimentado" : "Sin pavimentar"}
                  </span>
                  <span className="chip-info">
                    {parqueo.espaciosMarcados ? "Marcado" : "Sin marcar"}
                  </span>
                </div>

                <button
                  className="boton-secundario boton-ver-detalle"
                  onClick={() => seleccionarParqueo(parqueo)}
                >
                  Ver detalle
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaParqueos;
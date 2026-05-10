import MapaMock from "./MapaMock";

function DetalleParqueo({
  parqueoSeleccionado,
  registrarOcupacion,
  reservarEspacio,
  detalleAbierto,
  cerrarDetalle,
}) {
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
    <div
      className={`panel panel-detalle-mobile ${
        detalleAbierto ? "detalle-abierto" : ""
      }`}
    >
      <div className="detalle-mobile-top">
        <span className="detalle-handle"></span>
        <button className="cerrar-detalle" onClick={cerrarDetalle}>
          Cerrar
        </button>
      </div>

      {!parqueoSeleccionado ? (
        <>
          <h2>Detalle del parqueo</h2>
          <div className="lista-vacia">
            Selecciona un parqueo de la lista para ver su información.
          </div>
        </>
      ) : (
        <>
          <h2>Detalle del parqueo</h2>

          <div className="card-parqueo-top">
            <div>
              <h3>{parqueoSeleccionado.nombre}</h3>
              <p>{parqueoSeleccionado.tipo}</p>
            </div>

            <span className={claseEstado(parqueoSeleccionado.estado)}>
              {textoEstado(parqueoSeleccionado.estado)}
            </span>
          </div>

          <div className="detalle-grid">
            <div className="detalle-item">
              <strong>Destino cercano</strong>
              {parqueoSeleccionado.destinoCercano}
            </div>

            <div className="detalle-item">
              <strong>Ubicación</strong>
              {parqueoSeleccionado.ubicacion}
            </div>

            <div className="detalle-item">
              <strong>Techado</strong>
              {parqueoSeleccionado.techado ? "Sí" : "No"}
            </div>

            <div className="detalle-item">
              <strong>Pavimentado</strong>
              {parqueoSeleccionado.pavimentado ? "Sí" : "No"}
            </div>

            <div className="detalle-item">
              <strong>Espacios marcados</strong>
              {parqueoSeleccionado.espaciosMarcados ? "Sí" : "No"}
            </div>

            <div className="detalle-item">
              <strong>Estado actual</strong>
              {textoEstado(parqueoSeleccionado.estado)}
            </div>
          </div>

          <div className="bloque-visual">

            <div className="visual-simple-card">
              <h3>Vista del parqueo</h3>

              {parqueoSeleccionado.foto ? (
                <img
                  src={parqueoSeleccionado.foto}
                  alt="Prueba"
                  className="foto-parqueo"
                />
              ) : (
                <div className="visual-preview">
                  <div className="visual-badge">
                    {parqueoSeleccionado.tipo}
                  </div>
                  <p>{parqueoSeleccionado.vistaVisual || parqueoSeleccionado.foto}</p>
                </div>
              )}
            </div>

          </div>

          <div className="panel-mapa">
            <h3>Ubicación aproximada</h3>
            <MapaMock parqueo={parqueoSeleccionado} />
          </div>

          <div className="referencia-visual">
            <strong>Referencia visual:</strong> {parqueoSeleccionado.imagen}
          </div>

          <div className="detalle-acciones">
            <button
              className={
                parqueoSeleccionado.estado !== "disponible" &&
                parqueoSeleccionado.estado !== "reservado"
                  ? "boton-deshabilitado"
                  : "boton-primario"
              }
              onClick={registrarOcupacion}
              disabled={
                parqueoSeleccionado.estado !== "disponible" &&
                parqueoSeleccionado.estado !== "reservado"
              }
            >
              Registrar ocupación
            </button>

            <button
              className={
                parqueoSeleccionado.estado !== "disponible"
                  ? "boton-deshabilitado"
                  : "boton-secundario"
              }
              onClick={reservarEspacio}
              disabled={parqueoSeleccionado.estado !== "disponible"}
            >
              Reservar temporalmente
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default DetalleParqueo;
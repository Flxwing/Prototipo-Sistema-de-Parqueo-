function VistaInspector({ parqueos, actualizarEstadoParqueo, mostrarNotificacion }) {
  const espaciosIrregulares = parqueos.filter(
    (parqueo) => parqueo.estado === "irregular"
  );

  return (
    <div className="panel">
      <h2>Vista Inspector municipal</h2>

      {espaciosIrregulares.length === 0 ? (
        <div className="lista-vacia">
          No hay espacios marcados como irregulares en este momento.
        </div>
      ) : (
        <div className="lista-parqueos">
          {espaciosIrregulares.map((espacio) => (
            <div className="card-parqueo" key={espacio.id}>
              <div className="card-parqueo-top">
                <div>
                  <h3>{espacio.nombre}</h3>
                  <p>{espacio.tipo}</p>
                </div>

                <span className="estado estado-irregular">Irregular</span>
              </div>

              <p><strong>Destino cercano:</strong> {espacio.destinoCercano}</p>
              <p><strong>Ubicación:</strong> {espacio.ubicacion}</p>
              <p>
                <strong>Referencia visual:</strong>{" "}
                {espacio.vistaVisual || espacio.imagen || "Sin referencia visual."}
              </p>
              <p>
                <strong>Cómo llegar:</strong>{" "}
                {espacio.referenciaLlegada || "Sin referencia de llegada."}
              </p>

              <div className="acciones-admin">
                <button
                  className="boton-secundario"
                  onClick={() => {
                    actualizarEstadoParqueo(espacio.id, "disponible");
                    mostrarNotificacion("Espacio marcado como disponible.");
                  }}
                >
                  Marcar como disponible
                </button>

                <button
                  className="boton-primario"
                  onClick={() => {
                    actualizarEstadoParqueo(espacio.id, "ocupado");
                    mostrarNotificacion("Ocupación confirmada.");
                  }}
                >
                  Confirmar ocupación
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VistaInspector;
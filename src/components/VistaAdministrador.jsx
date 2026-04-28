import { useMemo, useState } from "react";

function VistaAdministrador({
  parqueos,
  guardarParqueoAdministrador,
  actualizarEstadoParqueo,
}) {
  const [formulario, setFormulario] = useState({
    id: null,
    nombre: "",
    destinoCercano: "",
    ubicacion: "",
    estado: "disponible",
    techado: false,
    pavimentado: true,
    espaciosMarcados: true,
  });

  const parqueosAdministrador = useMemo(
    () =>
      parqueos.filter(
        (parqueo) => parqueo.tipo === "Parqueo de acceso público"
      ),
    [parqueos]
  );

  const reservasActivas = useMemo(
    () =>
      parqueosAdministrador.filter(
        (parqueo) => parqueo.estado === "reservado"
      ),
    [parqueosAdministrador]
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormulario((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const limpiarFormulario = () => {
    setFormulario({
      id: null,
      nombre: "",
      destinoCercano: "",
      ubicacion: "",
      estado: "disponible",
      techado: false,
      pavimentado: true,
      espaciosMarcados: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formulario.nombre.trim() ||
      !formulario.destinoCercano.trim() ||
      !formulario.ubicacion.trim()
    ) {
      alert("Completa nombre, destino cercano y ubicación.");
      return;
    }

    guardarParqueoAdministrador(formulario);
    limpiarFormulario();
  };

  const cargarParaEditar = (parqueo) => {
    setFormulario({
      id: parqueo.id,
      nombre: parqueo.nombre,
      destinoCercano: parqueo.destinoCercano,
      ubicacion: parqueo.ubicacion,
      estado: parqueo.estado,
      techado: parqueo.techado,
      pavimentado: parqueo.pavimentado,
      espaciosMarcados: parqueo.espaciosMarcados,
    });
  };

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
    <div className="layout-admin">
      <div className="panel">
        <h2>
          {formulario.id ? "Editar parqueo de acceso público" : "Registrar parqueo de acceso público"}
        </h2>

        <form className="form-admin" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del parqueo"
            value={formulario.nombre}
            onChange={handleChange}
          />

          <input
            type="text"
            name="destinoCercano"
            placeholder="Destino cercano"
            value={formulario.destinoCercano}
            onChange={handleChange}
          />

          <input
            type="text"
            name="ubicacion"
            placeholder="Ubicación"
            value={formulario.ubicacion}
            onChange={handleChange}
          />

          <select
            name="estado"
            value={formulario.estado}
            onChange={handleChange}
          >
            <option value="disponible">Disponible</option>
            <option value="ocupado">Ocupado</option>
            <option value="reservado">Reservado</option>
          </select>

          <label className="check-admin">
            <input
              type="checkbox"
              name="techado"
              checked={formulario.techado}
              onChange={handleChange}
            />
            Techado
          </label>

          <label className="check-admin">
            <input
              type="checkbox"
              name="pavimentado"
              checked={formulario.pavimentado}
              onChange={handleChange}
            />
            Pavimentado
          </label>

          <label className="check-admin">
            <input
              type="checkbox"
              name="espaciosMarcados"
              checked={formulario.espaciosMarcados}
              onChange={handleChange}
            />
            Espacios marcados
          </label>

          <div className="acciones-admin">
            <button className="boton-primario" type="submit">
              {formulario.id ? "Guardar cambios" : "Registrar parqueo"}
            </button>

            {formulario.id && (
              <button
                type="button"
                className="boton-secundario"
                onClick={limpiarFormulario}
              >
                Cancelar edición
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="panel">
        <h2>Parqueos registrados</h2>

        {parqueosAdministrador.length === 0 ? (
          <div className="lista-vacia">
            No hay parqueos de acceso público registrados.
          </div>
        ) : (
          <div className="lista-parqueos">
            {parqueosAdministrador.map((parqueo) => (
              <div className="card-parqueo" key={parqueo.id}>
                <div className="card-parqueo-top">
                  <div>
                    <h3>{parqueo.nombre}</h3>
                    <p>{parqueo.ubicacion}</p>
                  </div>

                  <span className={claseEstado(parqueo.estado)}>
                    {textoEstado(parqueo.estado)}
                  </span>
                </div>

                <p><strong>Destino cercano:</strong> {parqueo.destinoCercano}</p>

                <div className="acciones-admin">
                  <button
                    className="boton-secundario"
                    onClick={() => cargarParaEditar(parqueo)}
                  >
                    Editar
                  </button>

                  <button
                    className="boton-secundario"
                    onClick={() => actualizarEstadoParqueo(parqueo.id, "disponible")}
                  >
                    Disponible
                  </button>

                  <button
                    className="boton-secundario"
                    onClick={() => actualizarEstadoParqueo(parqueo.id, "reservado")}
                  >
                    Reservado
                  </button>

                  <button
                    className="boton-secundario"
                    onClick={() => actualizarEstadoParqueo(parqueo.id, "ocupado")}
                  >
                    Ocupado
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="panel panel-full">
        <h2>Reservas activas</h2>

        {reservasActivas.length === 0 ? (
          <div className="lista-vacia">
            No hay reservas temporales activas en este momento.
          </div>
        ) : (
          <div className="lista-parqueos">
            {reservasActivas.map((parqueo) => (
              <div className="card-parqueo" key={parqueo.id}>
                <div className="card-parqueo-top">
                  <div>
                    <h3>{parqueo.nombre}</h3>
                    <p>{parqueo.ubicacion}</p>
                  </div>

                  <span className="estado estado-reservado">Reservado</span>
                </div>

                <p><strong>Destino cercano:</strong> {parqueo.destinoCercano}</p>

                <div className="acciones-admin">
                  <button
                    className="boton-secundario"
                    onClick={() => actualizarEstadoParqueo(parqueo.id, "disponible")}
                  >
                    Liberar reserva
                  </button>

                  <button
                    className="boton-primario"
                    onClick={() => actualizarEstadoParqueo(parqueo.id, "ocupado")}
                  >
                    Confirmar ocupación
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default VistaAdministrador;
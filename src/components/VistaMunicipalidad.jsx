import { useState } from "react";

function VistaMunicipalidad({ parqueos, agregarEspacioZonaPublica, actualizarEstadoParqueo }) {
  const [nuevoEspacio, setNuevoEspacio] = useState({
    nombre: "",
    destinoCercano: "",
    ubicacion: "",
    estado: "disponible",
    techado: false,
    pavimentado: true,
    espaciosMarcados: true,
  });

  const espaciosZonaPublica = parqueos.filter(
    (parqueo) => parqueo.tipo === "Zona pública"
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNuevoEspacio({
      ...nuevoEspacio,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nuevoEspacio.nombre.trim() ||
      !nuevoEspacio.destinoCercano.trim() ||
      !nuevoEspacio.ubicacion.trim()
    ) {
      alert("Completa nombre, destino cercano y ubicación.");
      return;
    }

    agregarEspacioZonaPublica(nuevoEspacio);

    setNuevoEspacio({
      nombre: "",
      destinoCercano: "",
      ubicacion: "",
      estado: "disponible",
      techado: false,
      pavimentado: true,
      espaciosMarcados: true,
    });
  };

  return (
    <div className="layout-admin">
      <div className="panel">
        <h2>Registrar espacio de zona pública</h2>

        <form className="form-admin" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre del espacio o zona"
            value={nuevoEspacio.nombre}
            onChange={handleChange}
          />

          <input
            type="text"
            name="destinoCercano"
            placeholder="Destino cercano"
            value={nuevoEspacio.destinoCercano}
            onChange={handleChange}
          />

          <input
            type="text"
            name="ubicacion"
            placeholder="Ubicación"
            value={nuevoEspacio.ubicacion}
            onChange={handleChange}
          />

          <select
            name="estado"
            value={nuevoEspacio.estado}
            onChange={handleChange}
          >
            <option value="disponible">Disponible</option>
            <option value="ocupado">Ocupado</option>
            <option value="irregular">Irregular</option>
          </select>

          <label className="check-admin">
            <input
              type="checkbox"
              name="techado"
              checked={nuevoEspacio.techado}
              onChange={handleChange}
            />
            Techado
          </label>

          <label className="check-admin">
            <input
              type="checkbox"
              name="pavimentado"
              checked={nuevoEspacio.pavimentado}
              onChange={handleChange}
            />
            Pavimentado
          </label>

          <label className="check-admin">
            <input
              type="checkbox"
              name="espaciosMarcados"
              checked={nuevoEspacio.espaciosMarcados}
              onChange={handleChange}
            />
            Espacios marcados
          </label>

          <button className="boton-primario" type="submit">
            Registrar espacio
          </button>
        </form>
      </div>

      <div className="panel">
        <h2>Espacios de zona pública</h2>

        {espaciosZonaPublica.length === 0 ? (
          <div className="lista-vacia">No hay espacios de zona pública registrados.</div>
        ) : (
          <div className="lista-parqueos">
            {espaciosZonaPublica.map((espacio) => (
              <div className="card-parqueo" key={espacio.id}>
                <div className="card-parqueo-top">
                  <div>
                    <h3>{espacio.nombre}</h3>
                    <p>{espacio.ubicacion}</p>
                  </div>

                  <span
                    className={`estado ${
                      espacio.estado === "disponible"
                        ? "estado-disponible"
                        : espacio.estado === "ocupado"
                        ? "estado-ocupado"
                        : "estado-reservado"
                    }`}
                  >
                    {espacio.estado}
                  </span>
                </div>

                <p><strong>Destino cercano:</strong> {espacio.destinoCercano}</p>

                <div className="acciones-admin">
                  <button
                    className="boton-secundario"
                    onClick={() => actualizarEstadoParqueo(espacio.id, "disponible")}
                  >
                    Disponible
                  </button>

                  <button
                    className="boton-secundario"
                    onClick={() => actualizarEstadoParqueo(espacio.id, "ocupado")}
                  >
                    Ocupado
                  </button>

                  <button
                    className="boton-secundario"
                    onClick={() => actualizarEstadoParqueo(espacio.id, "irregular")}
                  >
                    Irregular
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

export default VistaMunicipalidad;
function NavegacionVistas({ vistaActual, setVistaActual }) {
  return (
    <div className="panel nav-vistas">
      <button
        className={vistaActual === "conductor" ? "boton-primario" : "boton-secundario"}
        onClick={() => setVistaActual("conductor")}
      >
        Conductor
      </button>

      <button
        className={vistaActual === "municipalidad" ? "boton-primario" : "boton-secundario"}
        onClick={() => setVistaActual("municipalidad")}
      >
        Municipalidad
      </button>

      <button
        className={vistaActual === "administrador" ? "boton-primario" : "boton-secundario"}
        onClick={() => setVistaActual("administrador")}
      >
        Administrador
      </button>
    </div>
  );
}

export default NavegacionVistas;
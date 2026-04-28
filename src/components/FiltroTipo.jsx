function FiltroTipo({ filtroTipo, setFiltroTipo }) {
  return (
    <div className="panel panel-filtro">
      <h2>Tipo</h2>

      <div className="filtros-row">
        <button
          className={filtroTipo === "todos" ? "boton-primario" : "boton-secundario"}
          onClick={() => setFiltroTipo("todos")}
        >
          Todos
        </button>

        <button
          className={
            filtroTipo === "Parqueo de acceso público"
              ? "boton-primario"
              : "boton-secundario"
          }
          onClick={() => setFiltroTipo("Parqueo de acceso público")}
        >
          Acceso público
        </button>

        <button
          className={
            filtroTipo === "Zona pública"
              ? "boton-primario"
              : "boton-secundario"
          }
          onClick={() => setFiltroTipo("Zona pública")}
        >
          Zona pública
        </button>
      </div>
    </div>
  );
}

export default FiltroTipo;
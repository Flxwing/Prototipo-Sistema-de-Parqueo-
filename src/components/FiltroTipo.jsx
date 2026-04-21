function FiltroTipo({ filtroTipo, setFiltroTipo }) {
  return (
    <div className="panel" style={{ marginBottom: "24px" }}>
      <h2>Filtrar por tipo</h2>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
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
          Parqueo de acceso público
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
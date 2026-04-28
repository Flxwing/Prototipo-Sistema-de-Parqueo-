function FiltroEstado({ filtroEstado, setFiltroEstado }) {
  return (
    <div className="panel panel-filtro">
      <h2>Estado</h2>

      <div className="filtros-row">
        <button
          className={filtroEstado === "todos" ? "boton-primario" : "boton-secundario"}
          onClick={() => setFiltroEstado("todos")}
        >
          Todos
        </button>

        <button
          className={filtroEstado === "disponible" ? "boton-primario" : "boton-secundario"}
          onClick={() => setFiltroEstado("disponible")}
        >
          Disponibles
        </button>

        <button
          className={filtroEstado === "reservado" ? "boton-primario" : "boton-secundario"}
          onClick={() => setFiltroEstado("reservado")}
        >
          Reservados
        </button>

        <button
          className={filtroEstado === "ocupado" ? "boton-primario" : "boton-secundario"}
          onClick={() => setFiltroEstado("ocupado")}
        >
          Ocupados
        </button>
      </div>
    </div>
  );
}

export default FiltroEstado;
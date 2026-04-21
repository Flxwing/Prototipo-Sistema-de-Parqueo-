function Buscador({ destino, setDestino, buscarParqueos }) {
  return (
    <div className="buscador">
      <div className="buscador-fila">
        <input
          type="text"
          placeholder="Ingrese un destino, por ejemplo: Hospital San Carlos"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
        />
        <button className="boton-primario" onClick={buscarParqueos}>
          Buscar
        </button>
      </div>
    </div>
  );
}

export default Buscador;
function MapaMock({ parqueo }) {
  if (!parqueo) return null;

  return (
    <div className="mapa-mock">
      <div className="mapa-calle horizontal"></div>
      <div className="mapa-calle vertical"></div>

      <div className="mapa-destino">
        <span className="mapa-punto destino"></span>
        <div className="mapa-label">
          <strong>Destino</strong>
          <span>{parqueo.destinoCercano}</span>
        </div>
      </div>

      <div className="mapa-parqueo">
        <span className="mapa-punto parqueo"></span>
        <div className="mapa-label">
          <strong>Parqueo</strong>
          <span>{parqueo.nombre}</span>
        </div>
      </div>

      <div className="mapa-ruta"></div>
    </div>
  );
}

export default MapaMock;
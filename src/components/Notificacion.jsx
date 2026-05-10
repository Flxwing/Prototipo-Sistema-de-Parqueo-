function Notificacion({ mensaje, tipo = "exito" }) {
  if (!mensaje) return null;

  return (
    <div className={`notificacion notificacion-${tipo}`}>
      {mensaje}
    </div>
  );
}

export default Notificacion;
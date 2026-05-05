const parqueos = [
  {
    id: 1,
    nombre: "Parqueo Central SC",
    destinoCercano: "Hospital San Carlos",
    tipo: "Parqueo de acceso público",
    ubicacion: "100 metros norte del Hospital San Carlos",
    estado: "disponible",
    techado: true,
    pavimentado: true,
    espaciosMarcados: true,
    imagen: "Parqueo con entrada amplia y rótulo visible",
    referenciaLlegada:
      "Desde el Hospital San Carlos, avanzar 100 metros al norte. La entrada está al lado derecho con rótulo visible.",
    vistaVisual:
      "Entrada amplia, caseta al frente y espacios claramente marcados.",
    foto: "/images/parqueo-el-roble.jpg"
  },
  {
    id: 2,
    nombre: "Zona Pública Avenida 1",
    destinoCercano: "Municipalidad de San Carlos",
    tipo: "Zona pública",
    ubicacion: "Frente a la Municipalidad de San Carlos",
    estado: "ocupado",
    techado: false,
    pavimentado: true,
    espaciosMarcados: true,
    imagen: "Espacios en vía pública junto a la acera",
    referenciaLlegada:
      "Ubicada frente al edificio municipal, en la acera principal.",
    vistaVisual:
      "Espacios sobre vía pública, sin techo y con marcación lateral.",
    foto: "/images/parqueo-el-roble.jpg"
  },
  {
    id: 3,
    nombre: "Parqueo El Encuentro",
    destinoCercano: "Hospital San Carlos",
    tipo: "Parqueo de acceso público",
    ubicacion: "50 metros este del Hospital San Carlos",
    estado: "disponible",
    techado: false,
    pavimentado: false,
    espaciosMarcados: true,
    imagen: "Lote abierto con acceso por portón",
    referenciaLlegada:
      "Desde el hospital, avanzar 50 metros al este. La entrada se reconoce por un portón metálico.",
    vistaVisual:
      "Lote abierto, acceso por portón y superficie sin pavimentar.",
    foto: "/images/parqueo-el-roble.jpg"
  }
];

export default parqueos;
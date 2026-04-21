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
    imagen: "Parqueo con entrada amplia y rótulo visible"
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
    imagen: "Espacios en vía pública junto a la acera"
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
    imagen: "Lote abierto con acceso por portón"
  }
];

export default parqueos;
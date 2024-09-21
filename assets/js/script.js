const propiedadEnVenta = [
  {
    nombre: "Apartamento en el centro",
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/537600613.jpg?k=50c6f1e6242a08ba49f375138a5f9593a7aaa02e5a0121af5ecd6ff136fc7a88&o=&hp=1",
    descripcion: "Moderno apartamento de 2 habitaciones con vista a la ciudad.",
    ubicacion: "Centro de la ciudad",
    habitaciones: 2,
    costo: 1200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa de playa",
    src: "https://images.adsttc.com/media/images/54ee/ac81/e58e/ce7e/1000/0066/large_jpg/PORTADA_E04.jpg?1424927863",
    descripcion: "Casa acogedora a pocos pasos de la playa con jardín privado.",
    ubicacion: "Playa del Sol",
    habitaciones: 3,
    costo: 1800,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Estudio en el barrio antiguo",
    src: "https://img-cl-1.trovit.com/1MN1BN1Zg416/1MN1BN1Zg416.14_11.jpg",
    descripcion:
      "Estudio encantador en una zona histórica con fácil acceso al transporte.",
    ubicacion: "Barrio Antiguo",
    habitaciones: 1,
    costo: 900,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Dúplex",
    src: "https://images.adsttc.com/media/images/5671/dc8c/e58e/ce10/1800/0079/newsletter/featured_image.jpg?1450302588",
    descripcion: "Dúplex espacioso con terraza y piscina comunitaria.",
    ubicacion: "Las Afueras de la ciudad",
    habitaciones: 4,
    costo: 1500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Cabaña en la montaña",
    src: "https://hips.hearstapps.com/hmg-prod/images/caban-a-disen-o-actual-1535369712.jpg",
    descripcion: "Cabaña rústica perfecta para escapadas a la naturaleza.",
    ubicacion: "Montañas de Sierra Verde",
    habitaciones: 2,
    costo: 1100,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse con jacuzzi",
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/257987739.jpg?k=1ab3224ea72b8528626db2662c49d36f70c2f61969636a7cf255322d5fba7332&o=&hp=1",
    descripcion: "Exclusivo penthouse con jacuzzi y vistas panorámicas.",
    ubicacion: "Zona Exclusiva",
    habitaciones: 3,
    costo: 2500,
    smoke: false,
    pets: false,
  },
];

const propiedadEnAlquiler = [
  {
    nombre: "Apartamento moderno",
    src: "https://img.freepik.com/fotos-premium/interior-moderno-loft-estilo-moderno-casa-apartamentos_324757-1036.jpg",
    descripcion: "Luminoso apartamento con acabados de lujo y cocina equipada.",
    ubicacion: "Zona Empresarial",
    habitaciones: 2,
    costo: 1300,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa familiar",
    src: "https://arquine.com/wp-content/uploads/2021/04/family_10.jpg",
    descripcion: "Amplia casa con jardín y espacio para mascotas.",
    ubicacion: "Barrio Residencial",
    habitaciones: 4,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Loft industrial",
    src: "https://i.pinimg.com/736x/a3/02/4c/a3024c3f405fb4c592e0d750e60281d7.jpg",
    descripcion: "Loft con estilo industrial, ideal para parejas o solteros.",
    ubicacion: "Zona Creativa",
    habitaciones: 1,
    costo: 950,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Casa rural",
    src: "https://images.costasur.com/images/upload/turismo-rural-5247-H-600.jpg",
    descripcion: "Encantadora casa en el campo, perfecta para desconectar.",
    ubicacion: "Campo de Flores",
    habitaciones: 3,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Estudio minimalista",
    src: "https://png.pngtree.com/background/20230617/original/pngtree-contemporary-minimalist-studio-with-wooden-accents-3d-render-picture-image_3695676.jpg",
    descripcion: "Estudio con diseño minimalista y acceso a servicios.",
    ubicacion: "Cerca de la Universidad",
    habitaciones: 1,
    costo: 800,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Departamento estilo nórdico",
    src: "https://sodimac.decolovers.cl/blog/wp-content/uploads/2021/03/900-F-23-4.jpg",
    descripcion: "Increíble departamento diseñado al más puro estilo nórdico",
    ubicacion: "Colinas Altas",
    habitaciones: 3,
    costo: 1700,
    smoke: false,
    pets: true,
  },
];

function crearPropiedad(propiedad) {
  return `
  <div class="card">
      <img
        src="${propiedad.src}"
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
         ${propiedad.nombre}
        </h5>
        <p class="card-text">
          ${propiedad.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${propiedad.habitaciones} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
        <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
          <i class="fas ${
            propiedad.smoke ? "fa-smoking" : "fa-smoking-ban"
          }"></i> ${
    propiedad.smoke ? "Se permite fumar" : "No se permite fumar"
  }
         </p>
        <p class="${propiedad.pets ? "text-success" : "text-danger"}">
          <i class="fa-solid ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i> ${
    propiedad.pets ? "Se permiten Mascotas" : "No se permiten mascotas"
  }
        </p>
      </div>
    </div>
`;
}

function propiedadesEnVenta(propiedades) {
  const propiedadesVenta = document.getElementById("propiedades-en-venta");

  for (const propiedad of propiedades) {
    const lineasDiv = document.createElement("div");
    lineasDiv.className = "col-md-4 mb-4";
    lineasDiv.innerHTML = crearPropiedad(propiedad);
    propiedadesVenta.appendChild(lineasDiv);
  }
}

function propiedadesEnAlquiler(propiedades) {
  const propiedadesAlquiler = document.getElementById(
    "propiedades-en-alquiler"
  );

  for (const propiedad of propiedades) {
    const lineasDiv = document.createElement("div");
    lineasDiv.className = "col-md-4 mb-4";
    lineasDiv.innerHTML = crearPropiedad(propiedad);
    propiedadesAlquiler.appendChild(lineasDiv);
  }
}

if (window.location.pathname === "/index.html") {
  propiedadesEnVenta(propiedadEnVenta.slice(0, 3));
  propiedadesEnAlquiler(propiedadEnAlquiler.slice(0, 3));
}

if (window.location.pathname === "/propiedades_en_alquiler.html") {
  propiedadesEnAlquiler(propiedadEnAlquiler);
}

if (window.location.pathname === "/propiedades_en_venta.html") {
  propiedadesEnVenta(propiedadEnVenta);
}

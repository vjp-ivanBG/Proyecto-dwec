const eventos = [
  {
    id: 1,
    nombre: "Concierto de Jazz en la Plaza",
    fecha: "2026-05-12",
    lugar: "Plaza Mayor",
    categoria: "Música",
    precio: 15,
    plazas: 120
  },
  {
    id: 2,
    nombre: "Mercado Artesanal Local",
    fecha: "2026-05-18",
    lugar: "Parque Central",
    categoria: "Cultura",
    precio: 0,
    plazas: 200
  },
  {
    id: 3,
    nombre: "Carrera Solidaria 5K",
    fecha: "2026-06-02",
    lugar: "Avenida de la Constitución",
    categoria: "Deporte",
    precio: 8,
    plazas: 300
  },
  {
    id: 4,
    nombre: "Taller de Fotografía",
    fecha: "2026-06-10",
    lugar: "Casa de la Cultura",
    categoria: "Formación",
    precio: 25,
    plazas: 30
  },
  {
    id: 5,
    nombre: "Festival Gastronómico",
    fecha: "2026-06-21",
    lugar: "Paseo del Río",
    categoria: "Cultura",
    precio: 10,
    plazas: 150
  }
];


const PRECIO_BAJO = 10;
const PLAZAS_MUCHAS = 100;

console.log("--- LISTADO DE EVENTOS ---");

for (const evento of eventos) {

    const etiqueta = evento.precio <= PRECIO_BAJO
        ? "económico"
        : "premium";

    console.log(`${evento.id}. ${evento.nombre} - ${etiqueta}`);
}

console.log("\n--- EVENTOS ECONÓMICOS Y CON MUCHAS PLAZAS ---");

let encontrados = 0;

for (let i = 0; i < eventos.length; i++) {

    const evento = eventos[i];

    if (
        evento.precio <= PRECIO_BAJO &&
        evento.plazas >= PLAZAS_MUCHAS
    ) {

        console.log(
            `${evento.nombre} - ${evento.precio}€ - ${evento.plazas} plazas`
        );

        encontrados++;
    }
}

console.log(`${encontrados} de ${eventos.length} eventos`);
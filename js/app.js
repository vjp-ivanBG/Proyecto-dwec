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

// 1. Listar todos
function listarTodos(coleccion) {

    console.log("--- LISTADO DE EVENTOS ---");

    for (const evento of coleccion) {

        const etiqueta =
            evento.precio <= PRECIO_BAJO
                ? "económico"
                : "premium";

        console.log(`${evento.id}. ${evento.nombre} - ${etiqueta}`);
    }
}

// 2. Filtrar
function filtrarEventos(coleccion, limite) {

    let encontrados = 0;

    console.log(`--- EVENTOS CON PRECIO <= ${limite}€ ---`);

    for (let i = 0; i < coleccion.length; i++) {

        const evento = coleccion[i];

        if (
            evento.precio <= limite &&
            evento.plazas >= 100
        ) {
            console.log(
                `${evento.nombre} - ${evento.precio}€ - ${evento.plazas} plazas`
            );

            encontrados++;
        }
    }

    return encontrados;
}

// 3. Contar por categoría
function contarPorCategoria(coleccion) {

    let musica = 0;
    let cultura = 0;
    let deporte = 0;
    let formacion = 0;

    for (const evento of coleccion) {

        switch (evento.categoria) {

            case "Música":
                musica++;
                break;

            case "Cultura":
                cultura++;
                break;

            case "Deporte":
                deporte++;
                break;

            case "Formación":
                formacion++;
                break;

            default:
                console.log(`Categoría inesperada: ${evento.categoria}`);
        }
    }

    console.log(`Música: ${musica}`);
    console.log(`Cultura: ${cultura}`);
    console.log(`Deporte: ${deporte}`);
    console.log(`Formación: ${formacion}`);
}

listarTodos(eventos);

const resultado1 = filtrarEventos(eventos, 10);
console.log(`Encontrados: ${resultado1}`);

const resultado2 = filtrarEventos(eventos, 20);
console.log(`Encontrados: ${resultado2}`);

contarPorCategoria(eventos);

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

//Sesión 8

//listar
function listar(lista) {

    for (const evento of lista) {
        console.log(
            `${evento.id} - ${evento.nombre} - ${evento.categoria}`
        );
    }

}

//buscar por texto
function buscarPorTexto(lista, texto) {

    const resultado = [];

    for (const evento of lista) {

        if (
            evento.nombre.toLowerCase()
            .includes(texto.toLowerCase())
        ) {
            resultado.push(evento);
        }

    }

    return resultado;
}

console.table(buscarPorTexto(eventos, "jazz"));
console.table(buscarPorTexto(eventos, "festival"));
console.table(buscarPorTexto(eventos, "fotografía"));

//añadir
function anadir(lista, elemento) {

    let mayorId = 0;

    for (const evento of lista) {

        if (evento.id > mayorId) {
            mayorId = evento.id;
        }

    }

    elemento.id = mayorId + 1;

    lista.push(elemento);

    return elemento.id;
}

anadir(eventos, {
    nombre: "Feria del Libro",
    fecha: "2026-07-01",
    lugar: "Plaza Mayor",
    categoria: "Cultura",
    precio: 0,
    plazas: 500
});

//eliminar por ID
function eliminarPorId(lista, id) {

    for (let i = 0; i < lista.length; i++) {

        if (lista[i].id === id) {

            lista.splice(i, 1);

            return true;
        }

    }

    return false;
}
``
console.log(eliminarPorId(eventos, 3)); // true
console.log(eliminarPorId(eventos, 99)); // false

//Sesion 9 estadísticas
function estadisticas(lista) {

    if (lista.length === 0) {
        console.warn("No hay eventos");
        return;
    }

    let suma = 0;
    let maximo = lista[0];

    for (const evento of lista) {

        suma += evento.plazas;

        if (evento.plazas > maximo.plazas) {
            maximo = evento;
        }
    }

    const media = suma / lista.length;

    console.log(`Eventos: ${lista.length}`);
    console.log(`Plazas totales: ${suma}`);
    console.log(`Media de plazas: ${media.toFixed(1)}`);
    console.log(`El evento con más plazas es "${maximo.nombre}" con ${maximo.plazas} plazas`);
}

//Sesión 10
//Crear tarjeta
const listado = document.querySelector("#listado");
const resumen = document.querySelector("#resumen");
function crearTarjeta(evento) {

    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";

    const titulo = document.createElement("h3");
    titulo.textContent = evento.nombre;

    const categoria = document.createElement("p");
    categoria.textContent = "Categoría: " + evento.categoria;

    const lugar = document.createElement("p");
    lugar.textContent = "Lugar: " + evento.lugar;

    const fecha = document.createElement("p");
    fecha.textContent = "Fecha: " + evento.fecha;

    const precio = document.createElement("p");
    precio.textContent = "Precio: " + evento.precio + " €";

    tarjeta.append(titulo);
    tarjeta.append(categoria);
    tarjeta.append(lugar);
    tarjeta.append(fecha);
    tarjeta.append(precio);

    return tarjeta;
}

//pintar tarjetas
function pintar(lista) {

    listado.replaceChildren();

    for (const evento of lista) {
        listado.append(crearTarjeta(evento));
    }

    resumen.textContent = lista.length + " eventos";
}



//Sesión 11
//reutilizar buscarporTexto

    let textoBuscado = "";
    let criterio = "ninguno";

    document.querySelector("#buscador")
    .addEventListener("input", (e) => {

        textoBuscado = e.target.value;

        actualizar();

    });

//Función ordenar
function ordenar(lista, criterio) {
    const copia = [...lista];

    if (criterio === "nombre") {
        copia.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    return copia;
}

function actualizar() {

    let resultado = buscarPorTexto(eventos, textoBuscado);

    resultado = ordenar(resultado, criterio);

    pintar(resultado);

}


//Sesión 12

//Cookies

function guardarCookie(nombre, valor, dias) {

    const segundos = dias * 24 * 60 * 60;
    const texto = encodeURIComponent(valor);

    document.cookie =
        `${nombre}=${texto}; max-age=${segundos}; path=/`;
}

function leerCookie(nombre) {

    const partes = document.cookie.split("; ");

    for (const parte of partes) {

        const [clave, valor] = parte.split("=");

        if (clave === nombre) {
            return decodeURIComponent(valor);
        }
    }

    return null;
}

function elegirOrden(nuevo) {
    criterio = nuevo;
    guardarCookie("criterio", criterio, 30);
    actualizar();
}

document.querySelector("#ordenNombre").addEventListener("click", () => elegirOrden("nombre"));
document.querySelector("#ordenNumero").addEventListener("click", () => elegirOrden("tiempo"));

criterio = leerCookie("criterio") || "ninguno";


actualizar();




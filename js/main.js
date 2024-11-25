/*  Instrucciones del TPO2
    - Respondan a las preguntas por orden
    - Se valorará un código limpio, bien comentado, separado por comentarios en bloques, etc 
*/

///////////////////////
//Apartado de variables globales//
let cuadriculaProductos = document.querySelector(".product-grid");
let barraBusqueda = document.querySelector(".search-bar");

let botonesCarrito = document.querySelectorAll(".add-to-cart");
let objetosCarrito = document.getElementById("cart-items");
let precioCarrito = document.getElementById("total-prize");
let contadorCarrito = document.getElementById("cart-count");
// let nombreGrupo = document.querySelector("");
let carrito = [];

/*  PREGUNTA 1_____________
    En este TPO2 tendremos que crear un frontend de una tienda de frutas* 

    *pueden modificarlo o cambiar la temática o hacer lo que quieran libremente
    
    Para ello disponemos ya del HTML y el CSS prearmado. Entonces desde JavaScript deberemos:

    DONE 1. Almacenar nuestros datos en un objeto e imprimir el nombre del grupo en la consola y en el nav

    DONE 2. Crear un array de objetos a partir de las frutas de la carpeta img (o de los elementos que prefieran, temática libre)

    DONE 3. Imprimir esos objetos por pantalla, deberemos agregar esa funcion a la funcion inicializadora

    4. OPCIONAL 1 / Realizar una función filtro que mediante un evento como keyup recoja los datos del input y filtre los productos que contengan esos valores

    DONE 5. OPCIONAL 2 / Realizar la funcionalidad de carrito

    DONE 6. OPCIONAL 3 / Hacer que esa memoria sea persistente guardando los elementos del carrito en localStorage


    Como un mapa mental, escriban con sus palabras el razonamiento con el tienen pensado elaborar cada pregunta
    Qué tienen pensado hacer en cada uno de estos pasos, qué métodos van a elegir y por qué.


    ______________________

    Escriban acá su razonamiento y explicación de todo tu proceso
*/

/*  DONE ---- PREGUNTA 1 _____________
    Almacenar nuestros datos en un objeto e imprimir el nombre del grupo en la consola y en el nav:

    - Para resolver esta tarea agregamos al html un div que alojará el nombre del grupo, le asignamos 
    la clase .nombreGrupo, luego desde este mismo archivo js le damos un valor al nombre y lo asignamos al div.
        <div class="nombreGrupo"></div>
*/

/*  DONE  ---- PREGUNTA 2_____________
    Elaboren un array de objetos con las 10 frutas de la carpeta imágenes (o el producto que hayamos colocado ahí)
    Deben tener como claves: id, nombre, precio y la ruta de la imagen.

    - Declaramos un array al que llamamos prodFruteria, en el cargamos cada tipo de fruta disponible en la carpeta img
    - Cada fruta cargada cuenta con su respectivo id, nombre y la ruta de la imagen para poder visualizarla en la página
*/

//Array de productos////
let prodFruteria = [
  { id: 1, nombre: "anana", precio: 5000, img: "img/anana.jpg" },
  { id: 2, nombre: "arandano", precio: 1000, img: "img/arandano.jpg" },
  { id: 3, nombre: "banana", precio: 3000, img: "img/banana.jpg" },
  { id: 4, nombre: "frambuesa", precio: 2000, img: "img/frambuesa.png" },
  { id: 5, nombre: "frutilla", precio: 9000, img: "img/frutilla.jpg" },
  { id: 6, nombre: "kiwi", precio: 10000, img: "img/kiwi.jpg" },
  { id: 7, nombre: "mandarina", precio: 3000, img: "img/mandarina.jpg" },
  { id: 8, nombre: "manzana", precio: 2000, img: "img/manzana.jpg" },
  { id: 9, nombre: "naranja", precio: 1000, img: "img/naranja.jpg" },
  { id: 10, nombre: "pera", precio: 4000, img: "img/pera.jpg" },
  { id: 11, nombre: "pomelo amarillo", precio: 8000, img: "img/pomelo-amarillo.jpg"},
  { id: 12, nombre: "pomelo rojo", precio: 6000, img: "img/pomelo-rojo.jpg" },
  { id: 13, nombre: "sandia", precio: 3000, img: "img/sandia.jpg" },
];

/*  DONE  ---- PREGUNTA 3_____________ 
    Creen una función para imprimir en pantalla los productos del array de objetos y agreguenla a la funcion inicializadora
    El html que deben agregar debe tener el siguiente esquema (para que se apliquen los estilos)

        <div class="product-card">
            <img src="" alt="">
            <h3></h3>
            <p>$</p>
            <button class="add-to-cart">Agregar a carrito</button>
        </div>
*/
//Funcion de mostrar productos//
function mostrarProductos(array) {
  let cartaProducto = ""; // tenemos que llenar nuestro string con los productos

  for (let i = 0; i < array.length; i++) {
    cartaProducto += `
        <div class="product-card">
            <img src="${array[i].img}" alt="${array[i].nombre}">
            <h3>${array[i].nombre}</h3>
            <p>$ ${array[i].precio}</p>
            <button class="add-to-cart" onclick="agregarCarrito(${array[i].id})">Agregar a carrito</button>
        </div>
    `;
  }
  cuadriculaProductos.innerHTML = cartaProducto;
}

/*  DONE OPCIONAL 1 / Pregunta 4__________
    Escriban una función filtro, por ejemplo, asociada a un evento keyup, que recoja los valores del campo input y ejecute 
    con cada evento un filtro que actualice los productos

    - Primero generamos un div que aloje todos los elemntos necesarios para el filtrado, en este caso, nombre y precios
    - Luego accedemos a la información ingresada por el usuario y con la función filtrarProductos realizamos la lógica
    del filtrado de los productos
    -finalmente llamamos a mostrarProductos y le pasamos el array de productos que cumplen con los filtros solicitados

*/

// Función para filtrar productos
function filtrarProductos() {
  const nombreFiltro = document.getElementById("filter-name").value.toLowerCase();
  const precioMin = parseInt(document.getElementById("filter-min-price").value) || 0;
  const precioMax = parseInt(document.getElementById("filter-max-price").value) || Infinity;

  // Filtrar por nombre y rango de precios
  const productosFiltrados = prodFruteria.filter(producto => {
    const nombreCoincide = producto.nombre.toLowerCase().includes(nombreFiltro);
    const precioCoincide = producto.precio >= precioMin && producto.precio <= precioMax;
    return nombreCoincide && precioCoincide;
  });

  // Mostrar productos filtrados
  mostrarProductos(productosFiltrados);
}


/* DONE  ----  OPCIONAL 2 / PREGUNTAS 5_____________

    1. Elaboren la funcionalidad de carrito. Agreguen funcionalidad al boton de cada producto para introducir ese elemento en un contenedor de carrito e imprimirlo en el listado con id "cart-items"" del HTML

    El HTML que deben agregar debe seguir el siguiente esquema (para que se apliquen los estilos)

    <li class="item-block">
        <p class="item-name">nombreproducto - $precioproducto</p>
        <button class="delete-button">Eliminar</button>
    </li>

*/

//Función agregar al carrito//
function agregarCarrito(id) {
  console.log(`id del prod: ${id}`);
  let frutaSeleccionada = prodFruteria.find((fruta) => fruta.id === id);
  console.log("fruta para agregar", frutaSeleccionada);
  carrito.push(frutaSeleccionada);
  console.log("carrito actualizado", carrito);

  mostrarCarrito();
}


//Función mostrar carrito de compras//
function mostrarCarrito() {
  let carritoCompra = "";
  let precioTotal = 0;

  carrito.forEach((producto, indice) => {
    carritoCompra += `
    <li class="item-block">
        <p class="item-name">${producto.nombre} - ${producto.precio}</p>
        <button class="delete-button">Eliminar</button>
    </li>
    `;
  });

  objetosCarrito.innerHTML = carritoCompra;
}

/*  OPCIONAL 3 / Pregunta 6____________
    Hacer que esa memoria sea persistente guardando los elementos del carrito en localStorage

*/

// Funcion inicializadora//
function init() {
  // Acá irían las funciones de arranque de la aplicación. No se olviden de invocar esta app
  console.log(prodFruteria.length);
  console.table(prodFruteria);
  console.log(prodFruteria);
  mostrarProductos(prodFruteria);

  //Insertar nombre del grupo en el nav//
  const nombreGrupo = document.querySelector(".nombreGrupo");
  const grupo = "Maria Soledad Escobar y Kevin Matsuda";
  console.log("El nombre del grupo es: ", grupo);
  nombreGrupo.innerHTML = `<p>${grupo}</p>`;

  // Escuchar el botón de filtrar
  document.getElementById("apply-filters").addEventListener("click", filtrarProductos);  
}

//Correr la aplicación
init();

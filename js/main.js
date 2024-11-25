/*  Instrucciones del TPO2
    - Respondan a las preguntas por orden
    - Se valorará un código limpio, bien comentado, separado por comentarios en bloques, etc 
*/

/////////////////////////
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
  {
    id: 11,
    nombre: "pomelo amarillo",
    precio: 8000,
    img: "img/pomelo-amarillo.jpg",
  },
  { id: 12, nombre: "pomelo rojo", precio: 6000, img: "img/pomelo-rojo.jpg" },
  { id: 13, nombre: "sandia", precio: 3000, img: "img/sandia.jpg" },
];
///////////////////////
//variables globales//
let cuadriculaProductos = document.querySelector(".product-grid");
let barraBusqueda = document.querySelector(".search-bar");

let botonesCarrito = document.querySelectorAll(".add-to-cart");
let objetosCarrito = document.getElementById("cart-items");
let precioCarrito = document.getElementById("total-prize");
let contadorCarrito = document.getElementById("cart-count");
// let nombreGrupo = document.querySelector("");
let carrito = [];

/////////////////////////////////
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

function agregarCarrito(id) {
  console.log(`id del prod: ${id}`);
  let frutaSeleccionada = prodFruteria.find((fruta) => fruta.id === id);
  console.log("fruta para agregar", frutaSeleccionada);
  carrito.push(frutaSeleccionada);
  console.log("carrito actualizado", carrito);

  mostrarCarrito();
}

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

/*  PREGUNTA 1_____________
    En este TPO2 tendremos que crear un frontend de una tienda de frutas* 

    *pueden modificarlo o cambiar la temática o hacer lo que quieran libremente
    
    Para ello disponemos ya del HTML y el CSS prearmado. Entonces desde JavaScript deberemos:

    1. Almacenar nuestros datos en un objeto e imprimir el nombre del grupo en la consola y en el nav:
        <div class="nombreGrupo"></div>

    2. Crear un array de objetos a partir de las frutas de la carpeta img (o de los elementos que prefieran, temática libre)

    3. Imprimir esos objetos por pantalla, deberemos agregar esa funcion a la funcion inicializadora

    4. OPCIONAL 1 / Realizar una función filtro que mediante un evento como keyup recoja los datos del input y filtre los productos que contengan esos valores

    5. OPCIONAL 2 / Realizar la funcionalidad de carrito

    6. OPCIONAL 3 / Hacer que esa memoria sea persistente guardando los elementos del carrito en localStorage


    Como un mapa mental, escriban con sus palabras el razonamiento con el tienen pensado elaborar cada pregunta
    Qué tienen pensado hacer en cada uno de estos pasos, qué métodos van a elegir y por qué.


    ______________________

    Escriban acá su razonamiento y explicación de todo tu proceso
*/

/*  PREGUNTA 2_____________
    Elaboren un array de objetos con las 10 frutas de la carpeta imágenes (o el producto que hayamos colocado ahí)
    Deben tener como claves: id, nombre, precio y la ruta de la imagen
*/

/*  PREGUNTA 3_____________ lo hacemos nosotros, con innerHTML y x consola
    Agreguen a la funcion inicializadora init() una función para imprimir nombre del grupo en el nav y en la consola.
*/

/*  PREGUNTA 4_____________
    Creen una función para imprimir en pantalla los productos del array de objetos y agreguenla a la funcion inicializadora
    El html que deben agregar debe tener el siguiente esquema (para que se apliquen los estilos)

        <div class="product-card">
            <img src="" alt="">
            <h3></h3>
            <p>$</p>
            <button class="add-to-cart">Agregar a carrito</button>
        </div>
*/

/*  OPCIONAL / PREGUNTA 5_____________
    Escriban una función filtro, por ejemplo, asociada a un evento keyup, que recoja los valores del campo input y ejecute con cada evento un filtro que actualice los productos
*/

/*  OPCIONAL / PREGUNTAS 6 y 7_____________

    1. Elaboren la funcionalidad de carrito. Agreguen funcionalidad al boton de cada producto para introducir ese elemento en un contenedor de carrito e imprimirlo en el listado con id "cart-items"" del HTML

    El HTML que deben agregar debe seguir el siguiente esquema (para que se apliquen los estilos)

    <li class="item-block">
        <p class="item-name">nombreproducto - $precioproducto</p>
        <button class="delete-button">Eliminar</button>
    </li>

    2. Se valorará que se almacenen los productos del carrito en un localStorage
*/

// Funcion inicializadora

function init() {
  console.log("hola");
  // Acá irían las funciones de arranque de la aplicación. No se olviden de invocar esta app
  console.log(prodFruteria.length);
  console.table(prodFruteria);
  console.log(prodFruteria);
  mostrarProductos(prodFruteria);
}
init();
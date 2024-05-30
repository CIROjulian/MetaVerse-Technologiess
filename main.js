let productos;
async function fetchProductos() {
    const response = await fetch("productos.json");
    const data = await response.json();
    productos = data;
}
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");
let productosMostrados;

document.addEventListener("DOMContentLoaded", async function () {
    await fetchProductos();
    // Cargar todos los productos al principio
    cargarProductos(productos);
    mostrarCategoria(); // Mover la llamada aquí para asegurar que los productos estén cargados al inicio
});

function cargarProductos(productosElegidos) {
    productosMostrados = productosElegidos;
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        console.log( typeof (producto.imagen));
        const imagen = typeof (producto.imagen) === "object" ? producto.imagen[0] : producto.imagen;
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <a href="individual.html?id=${producto.id}">
                <img class="producto-imagen" src="${imagen}" alt="${producto.titulo}">
            </a>
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar();
}

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        const categoriaSeleccionada = e.currentTarget.id;
        const productosCategoria = productos.filter(producto => producto.categoria.id === categoriaSeleccionada);

        if (categoriaSeleccionada !== "todos") {
            tituloPrincipal.innerText = productosCategoria[0].categoria.nombre;
            cargarProductos(productosCategoria);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    });
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productosMostrados.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

// Funciones para ordenar los productos por precio
document.getElementById("ordenarMenorMayor").addEventListener("click", function () {
    productosMostrados.sort((a, b) => a.precio - b.precio);
    cargarProductos(productosMostrados);
});

document.getElementById("ordenarMayorMenor").addEventListener("click", function () {
    productosMostrados.sort((a, b) => b.precio - a.precio);
    cargarProductos(productosMostrados);
});

function mostrarCategoria() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('categoria');
    const product = productos.filter(p => p.categoria.id === productId);

    if (productId) {
        const boton = document.querySelector(`#${productId}`)
        cargarProductos(product.length > 0 ? product : [])
        botonesCategorias.forEach(botonbtn => botonbtn.classList.remove("active"));
        boton.classList.add("active");
        tituloPrincipal.innerText = productosCategoria[0].categoria.nombre;
    }
}

// function mostrarCategoria() {
//     const params = new URLSearchParams(window.location.search);
//     const productId = params.get('categoria');
//     if (productId) {
//         const product = productos.filter(p => p.categoria.id === productId);
//         if (product.length > 0) {
//             tituloPrincipal.innerText = product[0].categoria.nombre;
//             cargarProductos(product);
//         } else {
//             tituloPrincipal.innerText = "Categoría no encontrada";
//             cargarProductos([]);
//         }
//     }
//}
// el internet esta mal casi no te eschucho pero entrecortado

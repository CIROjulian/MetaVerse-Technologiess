// PRODUCTOS
const productos = [
    // Abrigos
    //acer
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "computadores/acer/acer_n/acer_ni01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "computadores/acer/acer_nitro/acer_n01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1000
    },
    //asus
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "computadores/asus/asus_TUF/asus_tuf01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "computadores/asus/asus_vivobook/asus01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1000
    },
    {
        id: "abrigo-05",
        titulo: "abrigo 05",
        imagen: "computadores/asus/asus_zenbook/asus_z01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1000
    },
    //hp
    {
        id: "abrigo-06",
        titulo: "abrigo 05",
        imagen: "computadores/hp/hp_omen/hp_01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1000
    },
    {
        id: "abrigo-07",
        titulo: "abrigo 05",
        imagen: "computadores/hp/hp_victus/hp_v01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1000
    },
// lenovo
    {
        id: "abrigo-08",
        titulo: "abrigo 05",
        imagen: "computadores/lenovo/lenovo_lpro/lenovo_l01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1000
    },
    {
        id: "abrigo-09",
        titulo: "abrigo 05",
        imagen: "computadores/lenovo/lenovo_lslim/lenovo01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1000
    },
    {
        id: "abrigo-10",
        titulo: "abrigo 05",
        imagen: "computadores/lenovo/lenovo_yoga/lenovo_y01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1000
    },
    // msi
    {
        id: "abrigo-11",
        titulo: "abrigo 05",
        imagen: "computadores/msi/mis_cyborg/msi_c01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1000
    },
    {
        id: "abrigo-12",
        titulo: "abrigo 05",
        imagen: "computadores/msi/mis_gf63/mis_g01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1000
    },
    {
        id: "abrigo-13",
        titulo: "abrigo 05",
        imagen: "computadores/msi/mis_katana/msi_k01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1000
    },
    {
        id: "abrigo-14",
        titulo: "abrigo 05",
        imagen: "computadores/msi/mis_thin/msi_t01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1000
    },
    //rog
    {
        id: "abrigo-15",
        titulo: "abrigo 05",
        imagen: "computadores/rog/rog_strix_scar/rog_s01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1000
    },
    {
        id: "abrigo-16",
        titulo: "abrigo 05",
        imagen: "computadores/rog/rog_zephyrus/rog_z01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador"
        },
        precio: 1000
    },
    // Camisetas
    //raton
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "computadores\\raton\\Mouse LOGITECH G\\mouse L.02.jpg",
        categoria: {
            nombre: "MOUSES",
            id: "ratones"
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "computadores\\raton\\Mouse PRIMUS\\mouse p.01.jpg",
        categoria: {
            nombre: "MOUSES",
            id: "ratones"
        },
        precio: 1000
    },
    //teclado
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "computadores\\teclado\\logitech\\logi 01.jpg",
        categoria: {
            nombre: "teclados",
            id: "teclados"
        },
        precio: 1000
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "computadores\\teclado\\PRIMUS\\primus 01.jpg",
        categoria: {
            nombre: "teclados",
            id: "teclados"
        },
        precio: 1000
    },
    //audifonos
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "computadores\\audifonos gamer\\audifono logi\\au logi.01.jpg",
        categoria: {
            nombre: "audifonos",
            id: "audifonos"
        },
        precio: 1000
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "computadores\\audifonos gamer\\audifonos astro\\astro 01.jpg",
        categoria: {
            nombre: "audifonos",
            id: "audifonos"
        },
        precio: 1000
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "computadores\\audifonos gamer\\aufifonos jbl\\jbl 01.jpg",
        categoria: {
            nombre: "audifonos",
            id: "audifonos"
        },
        precio: 1000
    },
    // combos
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "computadores\\combo gamer\\combo kalley\\kalley 01.jpg",
        categoria: {
            nombre: "combos",
            id: "combos"
        },
        precio: 1000
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "computadores\\combo gamer\\combo trust\\trust 01.jpg",
        categoria: {
            nombre: "combos",
            id: "combos"
        },
        precio: 1000
    },
    //leopardo
    {
        id: "leopardo-01",
        titulo: "leopardo",
        imagen: "computadores\\combo gamer\\combo trust\\trust 01.jpg",
        categoria: {
            nombre: "leopardo",
            id: "leopardo"
        },
        precio: 1000
    },
    //  melos
    {
        id: "base-01",
        titulo: "base 01",
        imagen: "computadores\\accesorios\\base\\base 01.jpg",
        categoria: {
            nombre: "bases",
            id: "base"
        },
        precio: 1000
    },
    {
        id: "base-02",
        titulo: "base 02",
        imagen: "computadores\\accesorios\\base 02\\bas 01.jpg",
        categoria: {
            nombre: "bases",
            id: "base"
        },
        precio: 1000
    },
    {
        id: "base-03",
        titulo: "base 03",
        imagen: "computadores\\accesorios\\base 03\\ba.01.jpg",
        categoria: {
            nombre: "bases",
            id: "base"
        },
        precio: 1000
    },
    //controles
    {
        id: "control-01",
        titulo: "control-01",
        imagen: "computadores\\accesorios\\control celular\\con 01.jpg",
        categoria: {
            nombre: "controles",
            id: "controles"
        },
        precio: 1000
    },

    {
        id: "control-02",
        titulo: "control 02",
        imagen: "computadores\\accesorios\\control switch\\swi 01.jpg",
        categoria: {
            nombre: "controles",
            id: "controles"
        },
        precio: 1000
    },
    {
        id: "control-03",
        titulo: "control 03",
        imagen: "computadores\\accesorios\\controles\\control 01.jpg",
        categoria: {
            nombre: "controles",
            id: "controles"
        },
        precio: 1000
    },
    // microfonos
    {
        id: "microfono-01",
        titulo: "microfono 01",
        imagen: "computadores\\accesorios\\microfono\\micro 01.jpg",
        categoria: {
            nombre: "microfonos",
            id: "microfonos"
        },
        precio: 1000
    },
    {
        id: "microfono-02",
        titulo: "microfono 02",
        imagen: "computadores\\accesorios\\micro 02\\micro.02.jpg",
        categoria: {
            nombre: "microfonos",
            id: "microfonos"
        },
        precio: 1000
    },
    // volante
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "computadores\\accesorios\\volante\\vola 01.jpg",
        categoria: {
            nombre: "volante",
            id: "volante"
        },
        precio: 1000
    }
];
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">agregar</button>
        </div>
    `;

        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");


        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "todos los productos";
            cargarProductos(productos);
        }
    })
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
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else {
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
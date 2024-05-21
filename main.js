// PRODUCTOS
const productos = [
    // Abrigos
    //acer
    {
        id: "computador-01",
        titulo: "portatil acer nitro intel core i5 - 16GB RAM - disco SSD 1TB ",
        imagen: "computadores/acer/acer_n/acer_ni01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador",
            procesador: "intel core I5",
            capacidad_de_disco: "estado  solido SSD 1TB",
            memoria_ram: "16GB",
            targeta_grafica: "GeForce RTX 4050",
            garantia:"12 meses"
        },
        precio: 6390000
    },
    {
        id: "computador-02",
        titulo: "portatil acer nitro intel core i7 - 16GB - disco SSD 1TB",
        imagen: "computadores/acer/acer_nitro/acer_n01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador",
            procesador: "intel core I7",
            capacidad_de_disco: "estado  solido SSD 1TB",
            memoria_ram: "16GB",
            targeta_grafica: "GeForce RTX 3060",
            garantia:"12 meses"
        },
        precio: 6700000
    },
    //asus
    {
        id: "computador-03",
        titulo: "portatil ASUS TUF intel core i7 - 16GB - disco SSD 512GB",
        imagen: "computadores/asus/asus_TUF/asus_tuf01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador",
            procesador: "intel core I7",
            capacidad_de_disco: "estado  solido SSD 512GB",
            memoria_ram: "16GB",
            targeta_grafica: "GeForce RTX 4050",
            garantia:"12 meses"
        },
        precio: 5500000
    },
    {
        id: "computador-04",
        titulo: "portatil ASUS Vivobook intel core i5 16GB disco SSD 512GB",
        imagen: "computadores/asus/asus_vivobook/asus01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador",
            procesador: "intel core I5",
            capacidad_de_disco: "estado  solido SSD 512GB",
            memoria_ram: "16GB",
            targeta_grafica: "GeForce RTX 3050",
            garantia:"12 meses"
        },
        precio: 5300000
    },
    {
        id: "computador-05",
        titulo: "portatil ASUS Zenbook intel core i5 - 8GB - disco SSD 512GB",
        imagen: "computadores/asus/asus_zenbook/asus_z01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador",
            procesador: "intel core I5",
            capacidad_de_disco: "estado  solido SSD 512GB",
            memoria_ram: "8GB",
            targeta_grafica: "Integrada en el procesador",
            garantia:"12 meses"
        },
        precio: 3900000
    },
    //hp
    {
        id: "computador-06",
        titulo: "portatil HP OMEN intel core i7 - 16GB - disco SSD 1TB",
        imagen: "computadores/hp/hp_omen/hp_01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador",
            procesador: "intel core I7",
            capacidad_de_disco: "estado  solido SSD 1TB",
            memoria_ram: "16GB",
            targeta_grafica: "GeForce RTX 4060",
            garantia:"12 meses"
        },
        precio: 8900000
    },
    {
        id: "computador-07",
        titulo: "portatil HP Victus intel core i5 - 16GB - disco SSD 512GB",
        imagen: "computadores/hp/hp_victus/hp_v01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador",
            procesador: "intel core I5",
            capacidad_de_disco: "estado  solido SSD 512GB",
            memoria_ram: "16GB",
            targeta_grafica: "GeForce RTX 3050",
            garantia:"12 meses"
        },
        precio: 3700000
    },
// lenovo
    {
        id: "computador-08",
        titulo: "portatil LENOVO LEGION 9 intel core i9 - 32GB - disco SSD 1TB",
        imagen: "computadores/lenovo/lenovo_lpro/lenovo_l01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador",
            procesador: "intel core I9",
            capacidad_de_disco: "estado  solido SSD 1TB",
            memoria_ram: "32GB",
            targeta_grafica: "GeForce RTX 4080",
            garantia:"12 meses"
        },
        precio: 15900000
    },
    {
        id: "computador-09",
        titulo: "portatil LENOVO SLIM 7 intel core i9 32GB disco SSD 1TB",
        imagen: "computadores/lenovo/lenovo_lslim/lenovo01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador",
            procesador: "intel core I9",
            capacidad_de_disco: "estado  solido SSD 1TB",
            memoria_ram: "32GB",
            targeta_grafica: "GeForce RTX 4070",
            garantia:"12 meses"
        },
        precio: 11500000
    },
    {
        id: "computador-10",
        titulo: "portatil LENOVO YOGA intel core i9 - 32GB - disco SSD 1TB",
        imagen: "computadores/lenovo/lenovo_yoga/lenovo_y01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador",
            procesador: "intel core I9",
            capacidad_de_disco: "estado  solido SSD 1TB",
            memoria_ram: "32GB",
            targeta_grafica: "GeForce RTX 4060",
            garantia:"12 meses"
        },
        precio: 8400000
    },
    // msi
    {
        id: "computador-11",
        titulo: "portatil MSI Cyborg intel core i7 - 16GB - disco SSD 512GB",
        imagen: "computadores/msi/mis_cyborg/msi_c01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador",
            procesador: "intel core I7",
            capacidad_de_disco: "estado  solido SSD 512GB",
            memoria_ram: "16GB",
            targeta_grafica: "GeForce RTX 4060",
            garantia:"12 meses"
        },
        precio: 6700000
    },
    {
        id: "computador-12",
        titulo: "portatil MSI GF63 intel core i5 - 8GB - disco SSD 512GB",
        imagen: "computadores/msi/mis_gf63/mis_g01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador",
            procesador: "intel core I5",
            capacidad_de_disco: "estado  solido SSD 512GB",
            memoria_ram: "8GB",
            targeta_grafica: "GeForce RTX 2050",
            garantia:"12 meses"
        },
        precio: 3000000
    },
    {
        id: "computador-13",
        titulo: "portatil MSI KATANA intel core i9 - 16GB - disco SSD 1TB",
        imagen: "computadores/msi/mis_katana/msi_k01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador",
            procesador: "intel core I9",
            capacidad_de_disco: "estado  solido SSD 1TB",
            memoria_ram: "16GB",
            targeta_grafica: "GeForce RTX 4070",
            garantia:"12 meses"
        },
        precio: 9500000
    },
    {
        id: "computador-14",
        titulo: "portatil MSI THIN intel core i5 - 16GB - disco SSD 512GB",
        imagen: "computadores/msi/mis_thin/msi_t01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador",
            procesador: "intel core I5",
            capacidad_de_disco: "estado  solido SSD 512GB",
            memoria_ram: "16GB",
            targeta_grafica: "GeForce RTX 4050",
            garantia:"12 meses"
        },
        precio: 4300000
    },
    //rog
    {
        id: "computador-15",
        titulo: "portatil ROG STRIX intel core i9 - 32GB - disco SSD 2TB",
        imagen: "computadores/rog/rog_strix_scar/rog_s01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador",
            procesador: "intel core I9",
            capacidad_de_disco: "estado  solido SSD 2TB",
            memoria_ram: "32GB",
            targeta_grafica: "GeForce RTX 4090",
            garantia:"12 meses"
        },
        precio: 17940000
    },
    {
        id: "computador-16",
        titulo: "portatil ROG Zephyrus intel core i9 - 32GB - disco SSD 1TB",
        imagen: "computadores/rog/rog_zephyrus/rog_z01.jpg",
        categoria: {
            nombre: "computadores",
            id: "computador",
            procesador: "intel core I9",
            capacidad_de_disco: "estado  solido SSD 1TB",
            memoria_ram: "32GB",
            targeta_grafica: "GeForce RTX 4070",
            garantia:"12 meses"
        },
        precio: 10950000
    },
    // Camisetas
    //raton
    {
        id: "mouse-01",
        titulo: "Mouse LOGITECH G Alámbrico Gaming G600 Negro",
        imagen: "computadores\\raton\\Mouse LOGITECH G\\mouse L.02.jpg",
        categoria: {
            nombre: "MOUSES",
            id: "ratones",
            apto_para_mano:"disetra",
            discancia_maxima:"180 centimetros",
            sensor_optico:"8200 Dpi",
            sistema_compatible:"windows",
            conexion:"alambrica",
            uso:"gaming",
            no_de_botones:"20 botones",
            color: "negro"
        },
        precio: 260000
    },
    {
        id: "mouse-02",
        titulo: "Mouse PRIMUS Alambrico Gaming GLADIUS 8200T",
        imagen: "computadores\\raton\\Mouse PRIMUS\\mouse p.01.jpg",
        categoria: {
            nombre: "MOUSES",
            id: "ratones",
            apto_para_mano:"disetra",
            discancia_maxima:"180 centimetros",
            sensor_optico:"8200 Dpi",
            sistema_compatible:"windows",
            conexion:"alambrica",
            uso:"gaming",
            no_de_botones:"6 botones",
            color: "negro"
        },
        precio: 115000
    },
    //teclado
    {
        id: "teclado-01",
        titulo: "teclado LOGITECH alambrico Mecanico Gaming GPRO",
        imagen: "computadores\\teclado\\logitech\\logi 01.jpg",
        categoria: {
            nombre: "teclados",
            id: "teclados",
            conexion: "alambrica",
            sistema_compatible:"android, mac Os, windows",
            tipo:"gaming"
        },
        precio: 550000
    },
    {
        id: "teclado-02",
        titulo: "Teclado PRIMUS Alámbrico Mecánico Gaming Ballista Negro",
        imagen: "computadores\\teclado\\PRIMUS\\primus 01.jpg",
        categoria: {
            nombre: "teclados",
            id: "teclados",
            conexion: "alambrica",
            sistema_compatible:"android, mac Os, windows",
            tipo:"gaming"
        },
        precio: 250000
    },
    //audifonos
    {
        id: "audifonos-01",
        titulo: "Audífonos de Diadema LOGITECH G Inalámbricos Over Ear Gaming G935 7.1Negro",
        imagen: "computadores\\audifonos gamer\\audifono logi\\au logi.01.jpg",
        categoria: {
            nombre: "audifonos",
            id: "audifonos",
            conexion:"cable USB",
            rango_de_frecuenca:" 20-20  ",
            impedancia:"39  Omnhios",
            garantia:"12 meses"
        },
        precio: 765000
    },
    {
        id: "audifonos-02",
        titulo: "Audífonos de Diadema ASTRO Inalámbricos USB|Bluetooth On Ear A30 Gaming XBox Serie X|S",
        imagen: "computadores\\audifonos gamer\\audifonos astro\\astro 01.jpg",
        categoria: {
            nombre: "audifonos",
            id: "audifonos",
            conexion:"cable USB",
            rango_de_frecuenca:" 20-40  ",
            impedancia:"32  Omnhios",
            garantia:"24 meses"
            
        },
        precio: 1180000
    },
    {
        id: "audifonos-03",
        titulo: "Audífonos de Diadema JBL Alámbricos USB Over Ear Gaming Quantum One Negro",
        imagen: "computadores\\audifonos gamer\\aufifonos jbl\\jbl 01.jpg",
        categoria: {
            nombre: "audifonos",
            id: "audifonos",
            conexion:"alambrica",
            tipo:"Gaming",
            conexion:"cable USB",
            rango_de_frecuenca:"20 Hz-40 kHz ",
            impedancia:"32  Omnhios",
            garantia:"12 meses"
        },
        precio: 1680000
    },
    // combos
    {
        id: "combos-01",
        titulo: "como Kalley alambrico teclado + Mouse + Audifonos + PadMouse Gaming",
        imagen: "computadores\\combo gamer\\combo kalley\\kalley 01.jpg",
        categoria: {
            nombre: "combos",
            id: "combos",
            no_de_productos: "4 productos",
            garantia:"12 meses",
            tonalidad_de_color:"negro"
        },
        precio: 110000
    },
    {
        id: "combos-02",
        titulo: "combo 2 en 1 TRUST teclado + Mouse alambrico Gaming GXT 838",
        imagen: "computadores\\combo gamer\\combo trust\\trust 01.jpg",
        categoria: {
            nombre: "combos",
            id: "combos",
            no_de_productos: "2 productos",
            garantia:"12 meses",
            tonalidad_de_color:"negro"
        },
        precio: 165000
    },
    //  bases
    {
        id: "base-01",
        titulo: "base refrigerate TRUST GTX YOZU Gaming",
        imagen: "computadores\\accesorios\\base\\base 01.jpg",
        categoria: {
            nombre: "bases",
            id: "base"
        },
        precio: 150000
    },
    {
        id: "base-02",
        titulo: "base refrigerante WATTANA 6 posiciones",
        imagen: "computadores\\accesorios\\base 02\\bas 01.jpg",
        categoria: {
            nombre: "bases",
            id: "base",
            ancho: "38 centimetros",
            no_ventiladores:"6 ventiladores",
            ajuste_de_altura: "si tiene ajuste de altura",
            fondo: "4 centimetros",
            alto:"29 centimetros"

        },
        precio: 120000
    },
    {
        id: "base-03",
        titulo: "base refrigerante STAR TEC 2 ventiladores 5 posiciones",
        imagen: "computadores\\accesorios\\base 03\\ba.01.jpg",
        categoria: {
            nombre: "bases",
            id: "base",
            ancho: "36.5 centimetros",
            no_ventiladores:"2 ventiladores",
            ajuste_de_altura: "si tiene ajuste de altura",
            fondo: "3.8 centimetros",
            alto:"26.5 centimetros"
        },
        precio: 84000
    },
    //controles
    {
        id: "control-01",
        titulo: "contol RASER Gaming para celulares Android negro",
        imagen: "computadores\\accesorios\\control celular\\con 01.jpg",
        categoria: {
            nombre: "controles",
            id: "controles"
        },
        precio: 680000
    },

    {
        id: "control-02",
        titulo: "control HORI Switch alambrico Pikachu splid Pad",
        imagen: "computadores\\accesorios\\control switch\\swi 01.jpg",
        categoria: {
            nombre: "controles",
            id: "controles",
            conexion: "alambrica",
            garantia: "12 meses"
        },
        precio: 335000
    },
    {
        id: "control-03",
        titulo: "control ACER nitro alambrico PC GAMING Negro",
        imagen: "computadores\\accesorios\\controles\\control 01.jpg",
        categoria: {
            nombre: "controles",
            id: "controles",
            conexion: "alambrica",
            garantia: "12 meses"
        },
        precio: 220000
    },
    // microfonos
    {
        id: "microfono-01",
        titulo: "microfono HYPERX alambrico USB iluminacion RGB",
        imagen: "computadores\\accesorios\\microfono\\micro 01.jpg",
        categoria: {
            nombre: "microfonos",
            id: "microfonos",
            tipo_de_microfono: "de condensador",
            conexion: "alambrica",
            garantia: "12 meses"
        },
        precio: 450000
    },
    {
        id: "microfono-02",
        titulo: "microfono PRIMUS alambrico USB profecional con tripode",
        imagen: "computadores\\accesorios\\micro 02\\micro.02.jpg",
        categoria: {
            nombre: "microfonos",
            id: "microfonos",
            tipo_de_microfono: "cardioide, de condensador",
            conexion: "alambrica",
            garantia: "12 meses"
        },
        precio: 270000
    },
    // volante
    {
        id: "volante-01",
        titulo: "volante de carreras ps4|ps5|pc Apex negro",
        imagen: "computadores\\accesorios\\volante\\vola 01.jpg",
        categoria: {
            nombre: "volante",
            id: "volante",
            garantia: "12 meses"
        },
        precio: 650000
    }
];
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

document.addEventListener("DOMContentLoaded", function() {
    const contenedorProductosTres = document.getElementById("contenedor-productos-tres");

    // Obtener solo los primeros tres productos
    const primerosTresProductos = productos.slice(0, 3);

    // Iterar sobre los primeros tres productos
    primerosTresProductos.forEach(function(producto) {
        // Crear elementos HTML para mostrar el producto
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("col-md-4", "mb-4", "text-center");

        const imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.classList.add("img-fluid", "rounded");
        imagen.alt = producto.titulo;

        const nombreProducto = document.createElement("h3");
        nombreProducto.textContent = producto.titulo;

        const precioProducto = document.createElement("p");
        precioProducto.textContent = "Precio: $" + producto.precio.toFixed(2);

        const botonAgregar = document.createElement("button");
        botonAgregar.classList.add("producto-agregar", "btn", "btn-primary");
        botonAgregar.id = producto.id;
        botonAgregar.textContent = "Agregar";

        // Agregar el evento de clic al botón que llama a la función agregarAlCarrito
        botonAgregar.addEventListener("click", agregarAlCarrito);

        // Agregar elementos al contenedor de productos
        productoDiv.appendChild(imagen);
        productoDiv.appendChild(nombreProducto);
        productoDiv.appendChild(precioProducto);
        productoDiv.appendChild(botonAgregar);

        contenedorProductosTres.appendChild(productoDiv);
    });
});

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
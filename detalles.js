let productos;
async function fetchProductos() {
    const response = await fetch("productos.json");
    const data = await response.json();
    productos = data;
}

document.addEventListener('DOMContentLoaded', async function () {
    await fetchProductos();
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = productos.find(p => p.id === productId);

    if (product) {
        // Crear el elemento <button>
        const addToCartBtn = document.createElement('button');

        // Agregar clases al botón
        addToCartBtn.classList.add('btn', 'btn-primary');

        // Asignar el texto al botón
        addToCartBtn.textContent = 'Agregar al Carrito';

        // Agregar el controlador de eventos al botón
        addToCartBtn.onclick = function () {
            // Aquí puedes agregar la lógica para agregar el producto al carrito
            addToCart(product.id);
        };

        // Agregar el botón al lugar deseado en el DOM

        document.getElementById('product-details').innerHTML = `
        <h1>${product.titulo}</h1>
     `;
        document.getElementById('product-details').appendChild(carrusel(product.imagen));
        const tabla = document.createElement("table");
        tabla.classList.add("table", "table-striped", "mt-3");
        const tbody = document.createElement("tbody");
        for (const propiedad in product.categoria) {

            const tr = document.createElement('tr');

            // Crea un nuevo elemento <th> para el nombre de la propiedad
            const th = document.createElement('th');
            th.textContent = propiedad;

            // Crea un nuevo elemento <td> para el valor de la propiedad
            const td = document.createElement('td');
            td.textContent = product.categoria[propiedad];

            // Agrega el <th> y <td> al <tr>
            tr.appendChild(th);
            tr.appendChild(td);

            // Agrega el <tr> al <tbody> de la tabla
            tbody.appendChild(tr);
        }
        tabla.appendChild(tbody);
        document.getElementById('product-details').appendChild(tabla);
        document.getElementById('product-details').appendChild(addToCartBtn);
    } else {
        document.getElementById('product-details').innerHTML = '<p>producto no encontrado</p>';
    }
});


function addToCart(productId) {
    let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];
    const productoAgregado = productos.find(producto => producto.id === productId);

    if (productosEnCarrito.some(producto => producto.id === productId)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === productId);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function carrusel(imagenes) {
    if (typeof(imagenes) === "string") {
        const imagen = document.createElement("img")
        imagen.src = imagenes;
        return imagen;
    }

    // Crear el contenedor principal del carrusel
    const carouselContainer = document.createElement('div');
    carouselContainer.id = 'carouselExampleIndicators';
    carouselContainer.classList.add('carousel', 'slide', 'carousel-fade');
    carouselContainer.setAttribute('data-bs-ride', 'carousel');

    // Crear los indicadores del carrusel
    const carouselIndicators = document.createElement('div');
    carouselIndicators.classList.add('carousel-indicators');

    // Crear las imágenes del carrusel
    const carouselInner = document.createElement('div');
    carouselInner.classList.add('carousel-inner');

    imagenes.forEach((imageName, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active');
        }

        const img = document.createElement('img');
        img.src = imageName;
        img.classList.add('d-block', 'w-100');
        img.alt = 'Slide ' + (index + 1);

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);

        // Crear los indicadores
        const indicator = document.createElement('button');
        indicator.type = 'button';
        indicator.setAttribute('data-bs-target', '#carouselExampleIndicators');
        indicator.setAttribute('data-bs-slide-to', index.toString());
        if (index === 0) {
            indicator.classList.add('active');
            indicator.setAttribute('aria-current', 'true');
        }
        indicator.setAttribute('aria-label', 'Slide ' + (index + 1));

        carouselIndicators.appendChild(indicator);
    });

    // Crear los botones de control del carrusel
    const prevButton = document.createElement('button');
    prevButton.classList.add('carousel-control-prev');
    prevButton.type = 'button';
    prevButton.setAttribute('data-bs-target', '#carouselExampleIndicators');
    prevButton.setAttribute('data-bs-slide', 'prev');

    const prevIcon = document.createElement('span');
    prevIcon.classList.add('carousel-control-prev-icon');
    prevIcon.setAttribute('aria-hidden', 'true');

    const prevText = document.createElement('span');
    prevText.classList.add('visually-hidden');
    prevText.textContent = 'Anterior';

    prevButton.appendChild(prevIcon);
    prevButton.appendChild(prevText);

    const nextButton = document.createElement('button');
    nextButton.classList.add('carousel-control-next');
    nextButton.type = 'button';
    nextButton.setAttribute('data-bs-target', '#carouselExampleIndicators');
    nextButton.setAttribute('data-bs-slide', 'next');

    const nextIcon = document.createElement('span');
    nextIcon.classList.add('carousel-control-next-icon');
    nextIcon.setAttribute('aria-hidden', 'true');

    const nextText = document.createElement('span');
    nextText.classList.add('visually-hidden');
    nextText.textContent = 'Siguiente';

    nextButton.appendChild(nextIcon);
    nextButton.appendChild(nextText);

    // Agregar los elementos al DOM
    carouselContainer.appendChild(carouselIndicators);
    carouselContainer.appendChild(carouselInner);
    carouselContainer.appendChild(prevButton);
    carouselContainer.appendChild(nextButton);

    return carouselContainer;
}
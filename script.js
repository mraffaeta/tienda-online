// Array de productos (puedes añadir más productos)
const productos = [
    {
        nombre: "Producto 1",
        precioOriginal: 100,
        imagen: "https://github.com/mraffaeta/tienda-online/blob/main/SAMSUNG-65-Class-DU6900-Crystal-UHD-4K-Smart-TV-UN65DU6900FXZA_76dee158-ffd0-4079-a123-3e5fddf78b2f.6719440f3a664032aa339e2f7841256a.webp" // Reemplaza con la URL de la imagen
    },
    {
        nombre: "Producto 2",
        precioOriginal: 200,
        imagen: "https://github.com/mraffaeta/tienda-online/blob/main/SAMSUNG-65-Class-DU6900-Crystal-UHD-4K-Smart-TV-UN65DU6900FXZA_76dee158-ffd0-4079-a123-3e5fddf78b2f.6719440f3a664032aa339e2f7841256a.webp" // Reemplaza con la URL de la imagen
    },
    {
        nombre: "Producto 3",
        precioOriginal: 300,
        imagen: "https://github.com/mraffaeta/tienda-online/blob/main/SAMSUNG-65-Class-DU6900-Crystal-UHD-4K-Smart-TV-UN65DU6900FXZA_76dee158-ffd0-4079-a123-3e5fddf78b2f.6719440f3a664032aa339e2f7841256a.webp" // Reemplaza con la URL de la imagen
    }
];

// Función para cargar productos en la página
function cargarProductos() {
    const listaProductos = document.getElementById('lista-productos');
    productos.forEach(producto => {
        const precioModificado = producto.precioOriginal * 1.5; // Modificar el precio aquí
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <p>Precio original: <span style="text-decoration: line-through;">$${producto.precioOriginal}</span></p>
            <p><strong>Precio especial: $${precioModificado.toFixed(2)}</strong></p>
            <button>Añadir al carrito</button>
        `;
        listaProductos.appendChild(divProducto);
    });
}

// Cargar productos al cargar la página
window.onload = cargarProductos;

// Array de productos (puedes añadir más productos)
const productos = [
    {
        nombre: "Producto 1",
        precioOriginal: 100,
        imagen: "https://via.placeholder.com/150" // Reemplaza con la URL de la imagen
    },
    {
        nombre: "Producto 2",
        precioOriginal: 200,
        imagen: "https://via.placeholder.com/150" // Reemplaza con la URL de la imagen
    },
    {
        nombre: "Producto 3",
        precioOriginal: 300,
        imagen: "https://via.placeholder.com/150" // Reemplaza con la URL de la imagen
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

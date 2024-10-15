const productosTemu = [
{
id:1,
nombre:"smartwatch",
precio:19.99,
categoria:"Electronica"
},{
    id:2,
    nombre:"Smartwatch",
    precio:29.99,
    categoria:"Electrónica"
},{
    id:3,
    nombre:"Cafetera",
    precio:34.99,
    categoria:"Hogar y Cocina"
}
]
//For each
productosTemu.forEach(producto => {
    console.log(`ID del producto: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
  });

//2. map: Crear un nuevo arreglo con los precios descontados (descuento del 10%)
  const productosDescontados = productosTemu.map(producto => {
    const descuento = producto.precio * 0.1; // Calcula el descuento del 10%
    return { ...producto, precioDescontado: producto.precio - descuento };
  });
  console.log("Productos con descuento:", productosDescontados);

  // 3. find: Encontrar el primer producto de una categoría específica (por ejemplo, "Electrónica")
const productoElectronico = productosTemu.find(producto => producto.categoria === "Electrónica");

console.log("Primer producto electrónico:", productoElectronico);

// 4. filter: Filtrar productos con un precio menor a un valor determinado (por ejemplo, $25)
const productosEconomicos = productosTemu.filter(producto => producto.precio < 25);

console.log("Productos con un precio menor a $25:", productosEconomicos);

// 5. push (simulando interacción del usuario): Agregar un producto al carrito
let carrito = []; // Inicializamos un carrito vacío

function agregarAlCarrito(idProducto) {
  const productoAAgregar = productosTemu.find(producto => producto.id === idProducto);
  if (productoAAgregar) {
    carrito.push(productoAAgregar);
    console.log(`Se agregó el producto (ID: ${idProducto}) al carrito.`);
  } else {
    console.log(`No se encontró el producto con ID ${idProducto}.`);
  }
}

// Ejemplo de uso (reemplaza con la lógica de interacción del usuario)
agregarAlCarrito(2); // Agrega el producto con ID 2 (Smartwatch) al carrito

console.log("Carrito actual:", carrito);

// Bonus: pop (simulando interacción del usuario): Eliminar el último producto agregado del carrito
function eliminarDelCarrito() {
  const productoEliminado = carrito.pop();
  if (productoEliminado) {
    console.log(`Se eliminó el producto (ID: ${productoEliminado.id}) del carrito.`);
  } else {
    console.log("El carrito está vacío.");
  }
}
localStorage.setItem('clave', 'valor');
let valor = localStorage.getItem('clave');
console.log(valor); // Muestra el valor asociado a la clave

// para eliminar el dato
localStorage.removeItem('clave');

// para limpiar el local storage
localStorage.clear();

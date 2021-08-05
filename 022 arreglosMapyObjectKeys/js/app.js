//Arreglos y .map

carrito = ['Producto1', 'Producto2', 'Producto3'];


carrito.map(producto => {
    return 'El producto es ' + producto;
});


// const appContenedor = document.querySelector('#app');
// //appContenedor.innerHTML = carrito;

// let html = '';
// carrito.forEach(producto => {
//     html += `<li>${producto}</li>`;

// })

// appContenedor.innerHTML = html;

//Object keys 

const persona = {
    nombre: 'Alex',
    profesion: 'Desarrollo Web',
    edad: 26
}
console.log(Object.keys(persona));
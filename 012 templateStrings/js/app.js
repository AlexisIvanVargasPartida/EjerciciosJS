//Template Strings

const nombre = 'Alexis ';
const trabajo = 'Desarrollo web';

//Concatenar JS
console.log('Nombre: ' + nombre + 'Trabajo: ' + trabajo);
console.log(`Ǹombre: ${nombre}, Trabajo: ${trabajo} `);

//Concatenar con multiples líneas

const contenedorAPP = document.querySelector('#app');
// let html = '<ul>' +
//     '<li>Nombre: ' + nombre + '</li>' +
//     '<li>Trabajo: ' + trabajo + '</li>' +
//     '</ul>';

let html = `
<ul>
  <li>Nombre: ${nombre}</li>
  <li>Trabajo: ${trabajo}</li>
</ul>`;
contenedorAPP.innerHTML = html;
//Object literal enhacement

const banda = 'Bon Jovi';
const genero = 'Rock';
const canciones = ['Always', 'Its my Life', 'Livin in a Prayer'];


//forma anterior
// const bonJovi = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones
// }


//forma nueva
const bonJovi = { banda, genero, canciones };

console.log(bonJovi);
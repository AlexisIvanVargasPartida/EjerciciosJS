//Objectos

//Object Constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;


}

//Crear una nueva tarea
const tarea1 = new Tarea('Aprender JS y React', 'Urgente');
const tarea2 = new Tarea('Sacar el perro', 'Urgente');
const tarea3 = new Tarea('Luchar', 'Media');
const tarea4 = new Tarea('Bañarse', 'Baja');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);
console.log(tarea1.nombre);
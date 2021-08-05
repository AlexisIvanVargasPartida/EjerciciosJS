//Escribir classes (todas tienen una mayus)

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;

    }
    mostrar() {
        return `${this.nombre} tiene una prioridad:
        ${this.prioridad}`;
    }
}

//crear los objetos
let tarea1 = new Tarea('Aprender JS', 'alta');
let tarea2 = new Tarea('Preparar café', 'alta');
let tarea3 = new Tarea('Pasear al prro', 'media');
let tarea4 = new Tarea('Conocer suegros', 'baja');
console.log(tarea1.mostrar());
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);
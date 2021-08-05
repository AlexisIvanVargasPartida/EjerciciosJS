//Escribir classes (todas tienen una mayus)

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;

    }
    mostrar() {
        console.log(`${this.nombre} tiene una prioridad:
        ${this.prioridad}`);
    }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrar() {
        super.mostrar();
        console.log(`y la cantidad de ${this.cantidad}`);

    }
    hola() {
        return 'hola';
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

//Compras
let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3)
compra1.mostrar();
console.log(compra1.hola());
//Objectos

//Object Literal
const persona = {
        nombre: 'Alex',
        profesion: 'Desarrollador Web',
        edad: 1000
    }
    //console.log(persona);
    // const mostrarCliente = mostrarInformacionTarea(persona.nombre, persona.profesion);
    // console.log(mostrarCliente);
    //Object Constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;


}
//Agregar un prototype a tarea:

Tarea.prototype.mostrarInformacionTarea = function() {
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;

}

//Crear una nueva tarea
const tarea1 = new Tarea('Aprender JS y React', 'Urgente');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
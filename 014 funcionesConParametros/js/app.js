//parametros por default en las funciones

// function actividad(nombre = 'Walter White', actividad = 'Enseñar Quimica') {
//     console.log(`La persona ${nombre}, está realizando la actividad: ${actividad}`);
// }

const actividad = function(nombre = 'Walter White', actividad = 'Enseñar Quimica') {
    console.log(`La persona ${nombre}, está realizando la actividad: ${actividad}`);

}
actividad('Juan', 'Aprender JS');
actividad('Pedro', 'Aprender WEB');
actividad();
actividad('Antonio');
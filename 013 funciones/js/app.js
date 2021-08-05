//creando una función

//Declaración de funciones
function saludar(nombre) {
    console.log('Bienvenido ' + nombre);
}
//Ejecución de la función, mandar a llamar 
saludar('Alex');

//function expression
const cliente = function(nombreCliente) {
    console.log('Mostrando datos del cliente: ' + nombreCliente);
}

cliente('Juan');
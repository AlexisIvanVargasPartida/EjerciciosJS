//Spread operator ... combinar 2 arreglos

// let lenguajes = ['Javascript', 'PHP', 'Python'];
// let [ultimo] = [...lenguajes].reverse();

// let frameworks = ['ReactJS', 'Laravel', 'Django'];

//Unir arreglos en 1 solo

//forma anterior
// let combinacion = lenguajes.concat(frameworks);
// console.log(combinacion);

// //forma nueva

// let combinacion = [...lenguajes, ...frameworks];
// console.log(combinacion);

// //o crear una copia de un arreglo

// let nuevoArr = [...lenguajes];
// console.log(nuevoArr);



// console.log(lenguajes);
// console.log(ultimo);

function suma(a, b, c) {
    console.log(a + b + c);
}
const numeros = [1, 2, 3];
suma(...numeros);
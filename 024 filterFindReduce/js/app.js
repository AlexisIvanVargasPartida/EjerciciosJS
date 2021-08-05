//Metodos en arreglos

const personas = [
    { nombre: 'Alex', edad: 26, aprendiendo: 'JS' },
    { nombre: 'Alejandra', edad: 23, aprendiendo: 'PHP' },
    { nombre: 'Miguel', edad: 22, aprendiendo: 'AdobeXD' },
    { nombre: 'Juan', edad: 20, aprendiendo: 'Python' },
    { nombre: 'Caro', edad: 18, aprendiendo: 'ReactJS' },

]
console.log(personas);

//mayores de 22 años

const mayores = personas.filter(persona => {
    return persona.edad > 22
});

console.log(mayores);


//qué aprende alejandra y su edad?

const alejandra = personas.find(persona => {
    return persona.nombre === 'Alejandra';

});
console.log('Alejandra está aprendiendo: ' + alejandra.aprendiendo);


//Reduce


let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);
console.log(total);
//Destructuring de Objetos
const aprendiendoJS = {
    version: {
        nueva: 'ES6+',
        anterior: 'ES5+'

    },
    frameworks: ['React', 'VueJS', 'AngularJS'],

}

//Destructuring es extraer valores de un objeto

//console.log(aprendiendoJS);

//Destructuring forma nueva
// let { version, frameworks } = aprendiendoJS;
// console.log(version);
// console.log(frameworks);

let { nueva } = aprendiendoJS.version;
console.log(nueva);
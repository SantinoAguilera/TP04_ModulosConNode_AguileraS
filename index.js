const sumar = require("./src/models/matematica");
const restar = require("./src/models/matematica");
const multiplicar = require("./src/models/matematica");
const dividir = require("./src/models/matematica");
const pi = require("./src/models/matematica");
const ej01 = require("./src/modules/EJ01");

ej01('Juan', 'Pepe');

console.log("suma: " + sumar(2, 3))
console.log("resta: " + restar("2", 3))
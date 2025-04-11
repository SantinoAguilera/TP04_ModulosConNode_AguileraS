const ej01 = require("./src/modules/EJ01");
const { sumar, restar, multiplicar, dividir, pi } = require("./src/models/matematica");
const Alumno = require("./src/models/Alumno");
const copiar = require('./src/modules/EJ04');
const parsearUrl = require("./src/modules/EJ05");
const obtenerMoneda = require("./src/modules/EJ07");

ej01('Juan', 'Pepe');

console.log("suma: " + sumar(2, 3));
console.log("resta: " + restar("2", 3));
console.log("multiplicación: " + multiplicar(2, "3"));
console.log("división: " + dividir("2", "3"));

const Alumno1 = new Alumno("Argelio", "99348124")
const Alumno2 = new Alumno("Petrifacio", "0000012")
console.log(Alumno1);
console.log(Alumno2);

copiar('./entrada.txt', './salida.txt');

console.log(parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"));

//No pude lograr que funcione, intente usando countries, country-list, y https://restcountries.com/
let moneda = obtenerMoneda("AR");
console.log(moneda);

let monedaInvalida = obtenerMoneda("XYZ");
console.log(monedaInvalida);
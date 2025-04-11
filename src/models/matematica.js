const pi = Math.PI;

const sumar = (num1, num2) =>
{
    if (!Number.isNaN(num1) && !Number.isNaN(num2)) return num1 + num2;
    else return "Error, introduzca numeros.";
}

const restar = (num1, num2) =>
{
    if (!Number.isNaN(num1) && !Number.isNaN(num2)) return num1 - num2;
    else return "Error, introduzca numeros.";
}

function multiplicar(num1, num2)
{
    if (!Number.isNaN(num1) && !Number.isNaN(num2)) return num1 * num2;
    else return "Error, introduzca numeros.";
}

function dividir(num1, num2)
{
    if (!Number.isNaN(num1) && !Number.isNaN(num2)) return num1 / num2;
    else return "Error, introduzca numeros.";
}

module.exports = sumar;
module.exports = restar;
module.exports = multiplicar;
module.exports = dividir;
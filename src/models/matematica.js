const pi = Math.PI;

const sumar = (num1, num2) =>
    {
        if (!isNaN(Number(num1)) && !isNaN(Number(num2))) return Number(num1) + Number(num2);
        else return "Error, introduzca números.";
    }
    
    const restar = (num1, num2) =>
    {
        if (!isNaN(Number(num1)) && !isNaN(Number(num2))) return Number(num1) - Number(num2);
        else return "Error, introduzca números.";
    }
    
    function multiplicar(num1, num2)
    {
        if (!isNaN(Number(num1)) && !isNaN(Number(num2))) return Number(num1) * Number(num2);
        else return "Error, introduzca números.";
    }
    
    function dividir(num1, num2)
    {
        if (!isNaN(Number(num1)) && !isNaN(Number(num2))) return Number(num1) / Number(num2);
        else return "Error, introduzca números.";
    }

module.exports = {
    pi,
    sumar,
    restar,
    multiplicar,
    dividir
};
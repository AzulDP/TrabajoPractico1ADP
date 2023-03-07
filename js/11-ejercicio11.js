// Dificultad:  🟢🟡
// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let number = parseInt(prompt("Ingrese un número"));
if (number % 2 == 0 || number % 3 == 0 || number % 5 == 0 || number % 7 == 0) {
    if (number % 2 == 0) {
        document.write(`El número ${number} es divisible por 2`);
    }
    <br></br>;
    if (number % 3 == 0) {
        document.write(`El número ${number} es divisible por 3`);
    }
    <br></br>;
    if (number % 5 == 0) {
        document.write(`El número ${number} es divisible por 5`);
    }
    <br></br>;
    if (number % 7 == 0) {
        document.write(`El número ${number} es divisible por 7`);
    }
    <br></br>;
}else {
    document.write(`El número no es divisible por 2, 3, 5 o 7`);
}

// Dificultad:  🟢
// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let Number1 = parseInt(prompt ('Ingrese un numero'))
let Number2 = parseInt(prompt ('Ingrese un numero'))
let Number3 = parseInt(prompt ('Ingrese un numero'))

if (Number1 > Number2 && Number1 > Number3){
document.write (`${Number1} es mayor que ${Number2} y que ${Number3}`)
}else if (Number2 > Number1 && Number2 > Number3){
document.write (`${Number2} es mayor que ${Number1} y que ${Number3}`)
}else if (Number3 > Number1 && Number3 > Number2){
document.write (`${Number3} es mayor que ${Number1} y que ${Number2}`)
}else if (Number1 = Number2 = Number3) {
    document.write (`Todos los números son iguales`)
}else{
    document.write (`Ingrese un número válido`)
}
// Dificultad:  🟢🟡 
// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// 'a' ||'A'||'e'||'E'||'i'||'I'||'o'||'O'||'u'||'U'

const sentence = prompt('Escribe una frase')

for (let vowels = 0; vowels <=sentence.length; vocal++) {
    if (sentence.charAt(vowels) == 'a' || 'A'||
        sentence.charAt(vowels) == 'e' || 'E'||
        sentence.charAt(vowels) == 'i' ||'I'||
        sentence.charAt(vowels) == 'o' ||'O'||
        sentence.charAt(vowels) == 'u'||'U') {
        document.write(`${sentence[vowels]}`)
    } else if (sentence.charAt !=(vowels)) {
        document.write(`Su frase no contiene vocales.`)
    } 
    else {
        document.write(`Ingrese un valor válido`)
    }
}
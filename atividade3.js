//3 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function divisão (number1 , number2){
    return number1 / number2
}
console.log("O resultado é: " + divisão (14,7))

if (divisão (14,7) % 2 === 0){
    console.log("E ele é par")
}
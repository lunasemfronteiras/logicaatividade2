//5 - Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

//a) Deverá ser possível escolher uma operação aritimética em forma de string: 'soma', 'multiplicacao', 'divisao' e 'subtracao'


//b) Deverá ser possível passar 2 números para a operação escolhida
//c) Deverá retornar o resultado e imprimir no console

function calculadora (number1 , number2){
    let operação = "subtração"
    switch (operação){
        case "soma" :
            return number1 + number2
            break;
            case "subtração" :
                return number1 - number2
                break;
                case "multiplicação" :
                    return number1 * number2
                    break;
                    case "divisão" :
                        return number1 / number2
                        break;

                        default:
                            console.log("ERRO")
    }
} 

console.log(calculadora(50,5))
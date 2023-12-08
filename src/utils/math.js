const sum = (a, b) => {
    return a + b
}

const divide = (dividendo, divisor) => {
    if(typeof(dividendo) != "number" || typeof(divisor) != "number"){
        throw new TypeError("O tipo dos dados devem ser numeros")
    }

    if(divisor === 0){
        throw new Error("Divisor não pode ser 0")
    }

    let calculo = dividendo / divisor
    calculo === 0 ? "Resultado da divisão não pode ser 0": ""
    return dividendo / divisor
}

module.exports = {
    sum, 
    divide}
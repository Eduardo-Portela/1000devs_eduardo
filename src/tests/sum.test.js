const {sum, divide} = require("../utils/math")


test('Should return a sum of a two numbers', () => {
    expect(sum(5, 5)).toBe(10)
})

test("Espera dividir dois numeros", () => {
    expect(divide(10, 2)).toBe(5)
})

test("Espera uma divisao por zero", () => {
    expect(() => divide(10, 0)).toThrow(Error)
})

test("Espera divisao de um numero e uma letra", () => {
    expect(() => divide("A", 0)).toThrow(TypeError)
})

// 1 - Number
console.log(typeof 2)
console.log(typeof -2)
console.log(typeof 2.5)

// 2 - arithmetic operations
console.log(2 + 4)
console.log(8 - 7)
console.log(9 * 3)
console.log(6 / 2)
console.log(5 + 4 * 2)

// 3 - special number
console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log(12 * "wasd")
console.log(typeof NaN)

// 4 - string
console.log("A text")
console.log(`More one`)
console.log('Another text')

// 5 - special character
console.log("Testing the \n line break")
console.log("Tab \t spacing")

// 6 - concatenation
console.log("Hi," + " how are" + " you?")

// 7 - text interpolation - template String
console.log(`The sum of 2 + 2 is: ${2 + 2}`)
console.log(`We can run anything here: ${console.log("Test")}`)

// 8 - boolean
console.log(true)
console.log(5 > 20) // false
console.log(30 > 10) // true

// 9 - comparison
console.log(5 <= 5) // true
console.log(5 < 5) // false
console.log(10 == 10) // true
console.log(10 == 9) // false
console.log(10 != 9) // true

// 10 - identical
console.log(9 === "9") // false
console.log(9 != "9") // false
console.log(9 !== "9") // true

// 11 - logical operators
console.log(true && true) // true
console.log(true && false) // false
console.log(5 > 2 && 2 < 10) // true
console.log(5 < 2 && "Ruan" === 1) // false
console.log(5 < 2 || "Ruan" === 1) // true
console.log(5 < 2 || 5 > 100) // false
console.log(!true) // false
console.log(!5 > 2) // false

// empty value
console.log(typeof null, typeof undefined) // object, undefined
console.log(null == undefined) // true
console.log(null === undefined) // false
console.log(null == false) // false
console.log(undefined == false) // false

// 13 - change of types
console.log(5 * null) // 0
console.log("teste" * "ok") // Nan
console.log("10" + 1) // 101
console.log("10" - 1) // 9
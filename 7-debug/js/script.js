// 1 - strict
"use strict"

// não recomendado declarar variaveis sem 'var', 'let' ou 'const'
// const opa = "test"

// não possi usar undefined para definir variaveis
// const undefined = 10

// não posso deletar prop de um array
//delete [].length 

// 2 - console.log
let a = 1
let b = 2

if (a == 1) {
    a = b + 2
}
console.log(a)

for(let i = 0; i < b; i++){
    a = a + 2
    console.log(a)
}

if (a > 5) {
    a = 25
}

console.log(a)

// 3 - debugger
let c = 1;
let d = 2;

if(c == 1){
    c = d + 2
}

// ativando o debugger no navegador
//debugger;

for(let i = 0; i < d; i++){
    c = c + 2
}

console.log("executou o loop");

if (c > 5){
    c = 25
}

// 4 - tratamento de dado por função
function checkNumber(num){
    const result = Number(num) // convertendo qlqr tipo de dado em numero

    if(Number.isNaN(result)){
        console.log("incorrect value")
        return
    }

    console.log("valid value")
    return result
}

checkNumber(5)
checkNumber("10")
checkNumber({})
checkNumber("test")

// 5 - exception - error
let x = 10

/*if(x != 11){
    throw new Error("The value of X cannot be other than 11")
}*/

// 6 - try-catch
try {
    const sum = x + y
} catch(error){
    console.log(`program error: ${error}`)
}

// 7 - finally
try{
    const value = checkNumber("wasd")

    if(!value){
        throw new Error("invalid value")
    }

} catch(error){
    console.log(`Problem: ${error}`)

} finally{
    console.log("code was executed")
}

// 8 - assertions
function checkArray(arr){

    if(arr.length === 0){
        throw new Error("Array must have elements")
    } else {
        console.log(`Array has ${arr.length} elements`)
    }
}

//checkArray([])
checkArray([1, 2, 3, 4])
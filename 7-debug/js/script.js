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


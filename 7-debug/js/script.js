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
debugger;

for(let i = 0; i < d; i++){
    c = c + 2
}

console.log("executou o loop");

if (c > 5){
    c = 25
}
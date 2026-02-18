// 1 - criando função
function myFunction(){
    console.log("Testing")
}

/// chamando função
myFunction()

// função dentro de uma variavel = função anonima ()
// nesse caso não pode ser sobreescrita no código
const myVariableFunction = function() {
    console.log("Variable function")
}
myVariableFunction()

// função com parametro/argumento
// definindo argumento
function functionWithParameter(txt){
    console.log(`Printing: ${txt}`)
}
// função sendo executada com o parametro
functionWithParameter("Printing something")
functionWithParameter("Other thing")

// 2 - return 
const a = 10, b = 20, c = 30, d = 40

function sum(n1, n2){
    return n1 + n2
}

const result = sum(a, b)
console.log(result)
console.log(sum(c, d))

// 3 - escopos
let y = 10

function testingScope(){
    let y = 20
    console.log(`y inside a function is: ${y} `)
}

testingScope()
console.log(`y outside a function is ${y}`)
testingScope()

// 4 - escopo aninhado (nested scopes)
let m = 10

function nestedScope(){
    let m = 20

    if(true){
        let m = 30

        if(true){
            let m = 40

            console.log(m)
        }
         console.log(m)
    }
     console.log(m)
}

nestedScope()
console.log(m)
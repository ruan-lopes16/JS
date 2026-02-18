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

// 5 - arrow function
const testArrow = () => {
    console.log("This is arrow function")
}

testArrow()

const pairOrOdd = (n) => {
    if(n % 2 == 0){
        console.log("Pair")
        return  // sai da condição ao satisfazer condição - early return

    }
    // se passar do if, é impar
    console.log("Odd")
}
pairOrOdd(2)

// 6 - mais sobre arrow
// normal
const squareRoot = (x) => {
    return x * x

}
console.log(squareRoot(5))

// sem escopo de bloco
const squareRoot2 = (x) => x * x

console.log(squareRoot2(6))
console.log(squareRoot2(15))

const helloWorld = () => console.log("Hello World!")
helloWorld()

// 7 - parametro opcional
const multiplication = function(m, n){
    if(n === undefined){ // argumento passado ou não -> nesse caso não passado
        return m * 2

    } else {
        return m * n

    }
}
console.log(multiplication(5))
console.log(multiplication(2, 4))

const greeting = (name) => {
    if(!name){
        console.log("Hello")
        return
    }
    console.log(`Hello ${name}`)
}

greeting()
greeting("Ruan")

// 8 - valor default
const customGreeting = (name, greet = "Hey") => {
    return `${greet}, ${name}`
}

console.log(customGreeting("Ruan"))
console.log(customGreeting("Ana", "Good morning"))

const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++)
        console.log(text)
}

repeatText("Testing")
repeatText("Now reapeat 5 times", 5)
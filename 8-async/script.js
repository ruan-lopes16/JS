// 1 - setTimeout
console.log("has not yet executed")

setTimeout(function() {
    console.log("asynchronous request")
    console.log("--------------------------------------")
}, 2000)

console.log("has not yet executed 2 ")

// 2 - setInterval
console.log("has not yet executed")

/*setInterval(function () {
    console.log("asynchronous interval")
    console.log("--------------------------------------")
}, 3000)*/

console.log("has not yet executed 2 ")
console.log("--------------------------------------")

// 3 - promises
const promise = Promise.resolve(5 + 5) // resolve bloco de código que está dentro de parenteses

console.log("some code")

promise.then(value => { // then, encadeia mais uma execução
    console.log(`sum is: ${value}`) 
    return value // para continuar trabalhando com esse valor
}) 
// transportando valor por etapas
.then((value) => value - 1)
.then((value) => console.log(`now is: ${value}`))

console.log("another code")
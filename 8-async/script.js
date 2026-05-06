/*
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
}, 3000)

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

// 4 - catch - promises
Promise.resolve(4 * "wasd")
.then((n) => {
    if(Number.isNaN(n)){
        throw new Error("Incorrect values")
    }
})
.catch((err) => console.log(`An error has occurred: ${err}`))
*/
// 5 - reject - promise
function checkNumber(n) {
    return new Promise((resolve, reject) => { // return new Promise, me permise encadear métodos na função

        if(n > 10){
            resolve(`higher then 10`)
        }
        else{
            reject(new Error(`number is so lower`))
        }

    })
}

const a = checkNumber(20)
const b = checkNumber(10)

console.log(a,b)

a.then((v) => console.log(`The result is: ${v}`)).catch((err) => 
    console.log(`An error has occurred: ${err}`)
)

b.then((v) => console.log(`The result is: ${v}`)).catch((err) => 
    console.log(`An error has occurred: ${err}`)
)
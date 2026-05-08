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

// 6 - all - promises
const p1 = new Promise((resolve, reject) => {    
    setTimeout(function(){
        resolve(10) // mostrar 10
    }, 1000)
})

const p2 = Promise.resolve(10+10) // resultado de 10 + 10 >>> 20

const p3 = new Promise((resolve, reject) => {
    if(30 > 10){
        resolve(30) // mostre 30
    } else{
        reject("Error!") // se não mostre erro
    }
})

/// situação que eu preciso do resultado das 3 para faze algo
// então resolvendo tudo de uma vez... [] promessas para resolver >> encadeia then pois tbm retorna promessa, onde pego os valores
Promise.all([p1, p2, p3]).then((values) => console.log(values))

// como a primeira tem time - só é mostrado quando todas estiverem resolvidas, ou seja, depois de 1 segundo

// 7 - async functions

async function delaySum(a, b) {
    return a + b
}

// com async, a função já retorna uma promessa, ou seja, posso usar then para pegar o valor
delaySum(2, 4).then((value) => {
    console.log(`The result is: ${value}`)
})
// executa primeiro o console.log, depois a função assíncrona, pois ela é colocada na fila de tarefas, ou seja, só é executada depois que o código síncrono for executado
console.log("test async")

// 8 - assertions - await
function delayResolve() { // vem de algum lugar como promise
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve("promise resolved after 2 seconds")
        }, 2000)
})
}

// lidando com camada e resposta - a partir do await
async function callAsync() {
    console.log("calling async function... waiting for result")
    const result = await delayResolve() // espera a resposta da função assíncrona, ou seja, só continua depois que a promessa for resolvida
    console.log(`The result is: ${result}`)
}

callAsync()

// 9 - generators
function* generator(){
    // etapas a cada execução terá um resultado diferente por conta do yield
    yield 1
    yield 2

}

const gen = generator() // preciso chamá-lo em uma variavel para executar - para acessar valores

// pego os valores do generator com next()
console.log(gen.next().value)
console.log(gen.next().value) 

// guarda em memória esse espaço de eecução e entrega o valor quando preciso - ao invocar o generator
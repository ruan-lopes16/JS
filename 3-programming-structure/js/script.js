/*
// 1 - variables
let name = "Ruan"
console.log(name)

name = "Ana Clara"
console.log(name)

//////////////

const age = 21
console.log(age)

////////////

console.log(typeof name, typeof age)

//////////////

// 2 - more about variable
// let 2test = "invalid"
// let @test = "invalid"

let a = 10, 
    b = 20,
    c = 30

console.log(a, b, c)

// caseSensitive
const fullName = "Ruan Lopes"
const FullName = "Ana Clara Silva"
console.log(fullName) 
console.log(FullName)

let _test = "ok"
let $test = "ok, ok"
console.log(_test, $test)

/////////////////
// 3 - prompt
//const age_ = prompt("Type your age: ")
//console.log(`You are ${age_} years old`)

// 4 - alert
//alert("Testing")

//const z = 10
//alert(`Number is ${z}`)

// 5 - math
console.log(Math.max(5, 2, 1, 10))
console.log(Math.floor(3.14))
console.log(Math.ceil(3.74))

// 6 - console
console.error("error!")
console.warn("warning!")
*/

// 7 - if
const number = 10

if(number > 5){
    console.log("number is greater than 5")
}

const user = "Ruan"

if(user === "Ruan"){
    console.log(`Hello ${user}`)
}

if(user === "Ana"){
    console.log(`Hello ${user}`)
}

// validando
console.log(user === "Ruan", user === "Ana")

// 8 - else
const loggedIn = false

if(loggedIn){
    console.log("Is authenticated")

} else {
    console.log("Not authenticated, you must login")
}

const q = 10
const w = 15

if(1 > 5 && w > 20){
    console.log("higher numbers")

} else {
    console.log("the numbers are not higher")
}

// 9 - else if
if(1 > 2){
    console.log("test")
    
} else if(2 > 3){
    console.log("test 2")

} else if(5 > 1){
    console.log("yes baby")

}

const userName = "Ruan"
const userAge = 22

if(userName === "Ana"){
    console.log("Welcome, Ana!")

} else if(userName === "Ruan" && userAge == 22){
    console.log("Hey Ruan, you are 22 years old")

} else{
    console.log("No conditions accepted")
}

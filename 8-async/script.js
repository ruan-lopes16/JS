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
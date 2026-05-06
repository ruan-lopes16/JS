// 1 - setTimeout
console.log("has not yet executed")

setTimeout(function() {
    console.log("asynchronous request")
}, 2000)

console.log("has not yet executed 2 ")
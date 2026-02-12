let user = prompt("user: ")
let pass = prompt("password: ")

if(user === "ruan.lopes" && pass === "12345678"){
    console.log("Access granted")
    
} else if(user !== "ruan.lopes" && pass !== "12345678"){
    console.log("User and password incorrect")

} else if(user !== "ruan.lopes"){
    console.log("User incorrect")

} else {
    console.log("Password incorrect")
}
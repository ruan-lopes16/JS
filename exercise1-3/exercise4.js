let grade = Number(prompt("Enter your grade: "))

if(grade >= 9){
    console.log("excellent")
} else if(grade >= 7 && grade < 9){
    console.log("Good")

} else if(grade >= 5 && grade < 7){
    console.log("Regular")

} else {
    console.log("insufficient")
}
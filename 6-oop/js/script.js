// 1 - métodos
const animal = {
    name: "Bob",
    bark: function(){
        console.log("au au")
    }
}

console.log(animal.name)
animal.bark() // acessando o método

// 2 - mais >>> this
const person = {
    name: "Ruan", // aqui somente o valor

    getName: function(){ 
        return this.name // pegando o nome do objeto
    },

    setName: function(newName){
        this.name = newName // modificando o nome do objeto, caso passado um parametro
    }
}

console.log(person.name)
console.log(person.getName())

person.setName("Ana") // modificando nome
console.log(person.getName())
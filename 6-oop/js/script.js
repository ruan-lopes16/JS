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

// 3 - prototype
const text = "wasd"
console.log(Object.getPrototypeOf(text)) // vendo ancestral de text --- vemos funções e propriedades

const bool = true
console.log(Object.getPrototypeOf(bool))

const arr = []
console.log(arr.length)
console.log(Object.getPrototypeOf(arr)) // da um objeto sem nome, pois já é um objeto >>> Array() // ver constructor

// 4 - mais - prototypes
const myObject = { // pai, mas tem o pai do pai que é o Object
    a: "b"
}

console.log(Object.getPrototypeOf(myObject)) // ver constructor
console.log(Object.getPrototypeOf(myObject) === Object.prototype) // true

const my2Object = Object.create(myObject) // criando objeto a partir de outro
console.log(my2Object) // não aparece nada, mas ao clicar aparece o prototype dentro (myObject), e tem outro prototype que é o pai
// ainda mantem todas as props e métodos

console.log(my2Object.a)
console.log(Object.getPrototypeOf(my2Object) === myObject) // true

// myObject é prototype(pai) de my2Object, mas o pai de todos é o Object

// 5 - classes básicas
const dog = { // molde para os cachorros
    breed: null, // inicialmente nula
    paws: 4
}

// classes com base na classe pai - molde
const germanShepherd = Object.create(dog) // criando novo objeto a partir do cachorro

germanShepherd.breed = "German Shepherd"

console.log(germanShepherd)
console.log(germanShepherd.paws) // propriedade do pai que não foi alterada ou adicionada ao filho

const bullDog = Object.create(dog)
bullDog.breed = "Bulldog"

console.log(bullDog)

// 6 - funções como classe - função construtora
function createDog(name, breed) {
    const dog = Object.create({}) // cria objeto vazio na função

    // coloco as propriedades de acordo com o que veio como argumento
    dog.name = name
    dog.breed = breed

    return dog
    
}

const bob = createDog("Bob", "Shitzu")
console.log(bob)

const mel = createDog("Mel", "Poodle")
console.log(mel)

console.log(Object.getPrototypeOf(bob)) // objeto vazio e depois o Object
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

// 7 - função construtora - new
// objeto criado por meio de uma função e retorna um objeto pronto --- antes era vazio
function Dog(name, breed) {     // coloco a primeira letra maiuscula para entender que é uma classe
    this.name = name
    this.breed = breed
}

const husky = new Dog("Apollo", "Husky Sibiriano")
console.log(husky) // já me devolve o prototype - Object

// 8 - métodos na função construtora
Dog.prototype.howl = function() {   // acesso a classe e o seu prototype e adiciono um método dentro de prototype
    console.log("Aaaauuuuuu!")
}

console.log(husky) // agora já tem o 'howl' dentro do objeto > dentro do prototype
husky.howl()

// 9 - classes es6
class DogClass {
    constructor(name, breed){
        this.name = name
        this.breed = breed
    } // função constructor para iniciar as props
}

const tobby = new DogClass("Tobby", "Hottweiller")
console.log(Object.getPrototypeOf(tobby)) // o construtor q é classe dogclass e o Object (convencional)
console.log(tobby)

// 10 - mais de classes
class Truck {
    constructor(axles, color){
        this.axles = axles
        this.color = color
    }
    // adicionando método
    describeTruck(){
        console.log(`This truck have ${this.axles} axles and it's color is ${this.color}`)
    }
}

const scania = new Truck(6, "red")

console.log(scania)
scania.describeTruck()

// NAO CONSIGO FAZER
Truck.motor = "V8"
console.log(Truck) // não foi adicionado a nova prop

// maaaas se eu acessar o prototype
Truck.prototype.motor = "V8"

const volvo = new Truck(4, "white")

console.log(volvo.motor)

// 11 - substituindo props >>> prototype
class Human {
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

const ruan = new Human("Ruan", 23)
console.log(ruan)

console.log(Human.prototype.age) // antes de colocar o prototype 

// trocando idade da classe por um valor já predefinido
// me da possibilidade de acessar esse valor como se fosse uma referencia
Human.prototype.age = "undefined - prototype" 
// pode ser usado quando um objeto ainda não foi instanciado -- não muda os objetos instanciados nessa classe
// serve como validação para mostrar os dados da classe e não do objeto criado a partir dela 

console.log(ruan.age)

console.log(Human.prototype.age) // agora quando eu acesso a idade me da indefinida, por ter setado isso como padrão

// 12 - symbol
class Airplane {
    constructor(brand, turbine) {
        this.brand = brand
        this.turbine = turbine
    }
}

const wings = Symbol() // declarando Symbol
const pilots = Symbol()

Airplane.prototype[wings] = 2 // adicionando uma nova propriedade imutável no objeto
Airplane.prototype[pilots] = 3

const boeing = new Airplane("Boeing", 10)
console.log(boeing)

// acessando symbol - pelo proprio nome
console.log(boeing[wings])
console.log(boeing[pilots])

// 13 - getter e setter
class Post {
    constructor(title, description, tags){
        this.title = title
        this.description = description
        this.tags = tags
    }

    get showTitle(){
        return `You are reading: ${this.title}`
    }

    set addTags(tags){
        const tagsArray = tags.split(", ") // pego as tags e transformo em um array e separo por elas por virgula >>> vira uma string
        this.tags = tagsArray
    }
     
}

const myPost = new Post("Hello World", "This is a post about programming") // não sou obrigado a passar todos os parametros do contructor
console.log(myPost)

console.log(myPost.showTitle)

myPost.addTags = "programming, js, html, introduction"
console.log(myPost)

// 14 - herança
class Mammifer {
    constructor(paws){
        this.paws = paws
    }
}

class Wolf extends Mammifer{
    constructor(paws, name){
        // mandando para a classe pai
        super(paws, paws) // estou enviando prop de paws de Wolf para alterar valor paws de Mammifer
        this.name = name
    }
}

const shark = new Wolf(4, "Shark")
console.log(shark)
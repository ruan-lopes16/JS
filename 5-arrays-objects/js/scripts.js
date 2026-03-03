// 1 - arrays 
const list = [1, 2, 3, 4, 5]
console.log(list)
console.log(typeof list)

const items = ["Ruan", true, 22, 3.14, []]
console.log(items)

// 2 - mais de arrays
const arr = ['a', 'b', 'c', 'd', 'e']
console.log(arr[0]) // acessando 1° item da lista
console.log(arr[2]) // acessando 3° item da lista
console.log(arr[10]) // acessando item não existente >>> undefined

// 3 - propriedades > array
const numbers = [5, 3, 4]
console.log(numbers.length) // quantidade de elementos da lista >>> console.log(numbers['length'])

const myName = "Ruan"
console.log(myName.length) // quantidade de caracteres que tem na string

// 4 - métodos
const otherNumbers = [1, 2, 3]
const allNumbers = numbers.concat(otherNumbers) // juntando dois arrays 

console.log(allNumbers)

const text = "Some text"
console.log(text.toUpperCase())

console.log(typeof toUpperCase) // function >>> mas é o tecnico é método

console.log(text.indexOf('t')) // posição de um caractere em uma string >>> primeira evidencia

// 5 - objetos
const person = {
    name: "Ruan",
    age: 22,
    job: "Developer"
}

console.log(person) // acessando todas propriedades
console.log(person.name) // acessando o nome
console.log(person.job.length) // propriedade de um objeto
console.log(typeof person) // object

// 6 - removendo e criando propriedades
const car = {
    engine: 1.0,
    brand: "VW",
    model: "Up!",
    km: 108000
}

console.log(car)

car.doors = 4 // adicionando propriedade
console.log(car)

delete car.km // removendo propriedade
console.log(car)

// 7 - mais sobre objetos
const obj = {
    a: "test",
    b: true
}

console.log(obj instanceof Object) // ver se objeto é filho de uma classe >>>> true
// os objetos literais herando todos do Object

const obj2 = {
    c: []
}

// copiando propriedades
Object.assign(obj2, obj) // objeto final (para onde vai), de onde vou copiar os dados
console.log(obj2)

// 8 - keys e entries
console.log(Object.keys(obj)) // vejo as propriedades
console.log(Object.keys(obj2))

console.log(Object.entries(obj)) // consigo chave e valor
console.log(Object.entries(car))


// 9 - mutação
const a = {
    name: "Ruan"
}

const b = a

console.log(a)
console.log(b)

console.log (a === b) // vendo é = 

a.age = 22
console.log(a)
console.log(b) // b tambem ganha age

delete b.age
console.log(a) // a sofre a remoção também
console.log(b) 

// 10 - loops em array
const users = ["Ruan", "Ana", "Cássio", "Carla"]

for(let i = 0; i < users.length; i++){
    console.log(`Listing user: ${users[i]}`)
}

// 11 - manipulando arrays > push e pop
const array = ["a", "b", "c"]

array.push("d") // adicionando elemento ao final do array

console.log(array)
console.log(array.length)

array.pop() // removendo ultimo elemento
console.log(array)

const removedItem = array.pop() // vendo qual item foi removido
console.log(removedItem)
console.log(array)

array.push("z", "x", "y") // posso adicionar mais de um item de uma vez
console.log(array)
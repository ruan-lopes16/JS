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
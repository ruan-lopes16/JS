const stock = {
    "eyelashes": 50, 
    "tweezers": 2, 
    "glue": 2, 
    "henna": 5, 
    "disposableGloves": 5, 
    "cottonWool": 3, 
    "eyePatch": 3
}
   
stock.bodyWax = 10
stock.dermalBlade = 20
stock.alcohol70 = 2

console.log(stock)

// listar chaves + tamanho
console.log(Object.keys(stock))
console.log(Object.keys(stock).length)

// listando valores
console.log(Object.values(stock))

// removendo um item do estoque
delete stock.alcohol70

console.log(stock)
console.log(Object.keys(stock))
console.log(Object.keys(stock).length)

console.log(Object.entries(stock))
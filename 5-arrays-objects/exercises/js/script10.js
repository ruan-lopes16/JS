const clients = [
    {name: "Ana", cell: "1234"},
    {name: "Clara", cell: "4321"},
    {name: "Carla", cell: "3421"},
    {name: "Rafaella", cell: "2314"},
    {name: "Neusa", cell: "1413"}
]

const services = [
    {name: "Eyelash", price: 45.9},
    {name: "Henna", price: 90},
    {name: "Dermaplining", price: 24.5},
    {name: "Micro", price: 22.7}
]

const updateServices = (...args) => {
    let newServices = []
    
    // Copiar services originais
    for(service of services){
        newServices.push(service)
    }
    
    // Adicionar novos
    for(service of args){
        newServices.push(service)
    }
    
    return newServices
}

// destructing - clients
clients.forEach(({ name}) => {
    console.log(name)
})

// adicionando mais um serviço
const updatedList = updateServices({name:"Laser", price: 56.7})
console.log(updatedList)

// vendo se existe
////const exist = updatedList.includes({name:"Course", price: 1000})
////console.log(exist)

const slicedList = updatedList.slice(0,1)
console.log(slicedList)

updatedList.forEach(({name, price}) => {
    console.log(`${name} - R$${price}`)
})

// adicionando cliente
const newClients = clients.push({name:"Kethelly", cell: "2413"})
console.log(newClients)

const clientsName = []
clients.forEach(({name}) => {
    clientsName.push(name) 
})
console.log(clientsName)

// for of
const findClient = (name) =>{
    let position = -1
    for(let i = 0; i < clients.length; i++){
        if(clients[i].name === name){
            position = i
        }
    }

    return position + 1

}
console.log(`Clara is at ${findClient("Clara")}° position`)

// Filtrar serviços por preço mínimo
const filterByPrice = (minPrice) => {
    let filtered = []
    for(service of services){
        if(service.price > minPrice){
            filtered.push(service)
        }
    }
    return filtered
}

console.log("Serviços acima de R$50:")
const expensiveServices = filterByPrice(50)
expensiveServices.forEach(({name, price}) => {
    console.log(`${name} - R$${price}`)
})

// Filtrar clientes por letra inicial
const filterByInitial = (letter) => {
    let filtered = []
    for(client of clients){
        if(client.name[0] === letter){
            filtered.push(client)
        }
    }
    return filtered
}

console.log("Clients' name starts with C:")
const clientsC = filterByInitial("C")
console.log(clientsC)

// ===== EXPORTAR PARA JSON =====
const exportClientsJSON = () => {
    const jsonString = JSON.stringify(clients)
    console.log("Data in JSON:")
    console.log(jsonString)
    return jsonString
}

const exportServicesJSON = () => {
    const jsonString = JSON.stringify(services)
    console.log("Services in JSON:")
    console.log(jsonString)
    return jsonString
}

// Exportando
const clientsJSON = exportClientsJSON()
const servicesJSON = exportServicesJSON()

// ===== IMPORTAR DE JSON =====
const importClientsJSON = (jsonString) => {
    const importedData = JSON.parse(jsonString)
    console.log("Imported data:")
    console.log(importedData)
    return importedData
}

// Importando
const recoveredClients = importClientsJSON(clientsJSON)

// Usando destructuring nos dados importados
recoveredClients.forEach(({name, cell}) => {
    console.log(`Client: ${name} - Cell: ${cell}`)
})

// ===== SALVAMENTO SIMULADO =====
const saveData = () => {
    const database = {
        clients: clients,
        services: services,
        lastUpdate: "2026-03-12"
    }
    
    const jsonData = JSON.stringify(database)
    console.log("Salved:")
    console.log(jsonData)
    return jsonData
}

const loadData = (jsonData) => {
    const database = JSON.parse(jsonData)
    console.log("Recovered BD")
    console.log(database)
    
    // Usando destructuring para extrair
    const {clients, services, lastUpdate} = database
    console.log(`Last update: ${lastUpdate}`)
    
    return database
}

// Testando salvamento e recuperação
const savedData = saveData()
const loadedData = loadData(savedData)
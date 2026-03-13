const clients = [
    {name: "Ana", cell: "1234"},
    {name: "Clara", cell: "4321"},
    {name: "Carla", cell: "3421"},
    {name: "Rafaella", cell: "2314"},
    {name: "Neusa", cell: "1413"}
]

console.log(clients)

const clientsJson = JSON.stringify(clients)
console.log(clientsJson)

const backObjClients = JSON.parse(clientsJson)
console.log(backObjClients)

backObjClients.forEach(client => {
    
    const {name} = client
    console.log(name)
});

const products = [
    {name: "DermalBlade", price: 45.9, stock: 40},
    {name: "Henna", price: 90, stock: 4},
    {name: "Tweezers", price: 24.5, stock: 2},
    {name: "Eyepad", price: 22.7, stock: 50}
]

products.forEach(product => {
    const [DermalBlade, Henna, Tweezers, Eyepad] = products
    console.log(`${product.name} - R$${product.price}`)
});
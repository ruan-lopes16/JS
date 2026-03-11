function formatPhone(phones) {
    return phones.map(phone => {
        const digits = phone.split("").join("").padStart(11, "0") 
        // transforma a string em array de caracteres
        // junta tudo novamente
        // garante que tenha 11 digitos e se tiver menos, completa com 0

        const ddd = digits.slice(0,2) // pega 2 primeiros digitos
        const part1 = digits.slice(2,7) // pega a primeira parte
        const part2 = digits.slice(7) // pega o restante

        return `(${ddd}) ${part1}-${part2}`
    })
}

const numbers = [
    "75983379780",
    "14968823178",
    "86980441555",
    "66981444266",
    "62967925217"
]

console.log(formatPhone(numbers))
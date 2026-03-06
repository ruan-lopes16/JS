const names = ["Ana    ", "     Clara    ", " Ruan   ", "    Cássio ", "Carla               "]

names.forEach((name, i) => {
    names[i] = name.trim() // a posição i do array, fará o trim
})

names.reverse()

console.log(names)
let num = Number(prompt("Enter a number to see its multiplication table: "));

// for(let i = 0; i <= 10; i++){
//     mult = `${num} * ${i} = ${num * i}`
//     console.log(mult)
// }

const generateMultTable = (num, limit = 10) => {

  while (num <= limit) {
    console.log(`--- Tabuada do ${num} ---`)

    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`)

    }

    const stop = prompt("Press 'e' to exit or 'c' to continue: ")
    if (stop === "e") {
      break

    }

    console.log(""); // linha em branco pra separar visualmente
    num++;

  }
}
generateMultTable(num)

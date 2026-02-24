
let number;


let difficulty = prompt(
  "Set the difficulty: \neasy: 1-25\nmedium: 1-50\nhard: 1-100",
);

function play(difficulty) {

    let randomNumber;
    let attempts = 0;

  if (difficulty === "easy") {
    randomNumber = Math.floor(Math.random() * 25) + 1;

  } else if (difficulty === "medium") {
    randomNumber = Math.floor(Math.random() * 50) + 1;

  } else {
    randomNumber = Math.floor(Math.random() * 100) + 1;

  }

  do {
    number = Number(prompt("Try to guess the number I thought of "));
    attempts++;

    if (number < randomNumber) {
      alert("Try a higher number");

    } else if (number > randomNumber) {
      alert("Try a smaller number");
      
    }
  } while (number !== randomNumber && attempts < 7);

  if (number === randomNumber) {
    alert(
      `Congrats, random number was: ${randomNumber} >>> Attempts: ${attempts}`,
    );
  } else {
    alert(`Sorry! Exhausted attempts. Attempts: ${attempts}`);
  }
}

play(difficulty);

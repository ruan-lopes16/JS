while (true) {
  const num1 = Number(prompt("Type a number: "));
  const num2 = Number(prompt("Type another number: "));
  const operation = prompt("Type an operator ('+', '-', '*', '/', 'pow', 'sqrt'): ");

  let result;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      break;

    case "pow":
      result = Math.pow(num1, num2);
      break;

    case "sqrt":
      result = `√${num1} = ${Math.sqrt(num1).toFixed(2)}  |  √${num2} = ${Math.sqrt(num2).toFixed(2)}`;
      break;

    default:
      alert("Invalid operator!");
  }

  if (result !== undefined) {
    alert(`Result: ${result}`);
  }

  let stop = prompt("Type 'exit' to quit or anything else to continue: ");
  if (stop == "exit") {
    alert("To recalculate, press F5. See you later.")
    break;
  }
}

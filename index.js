// the idea here is first to have the behavior of clicking a number implemented

const calculatorDiv = document.querySelector(".calculator");
const display = document.querySelector(".display");

let runningTotal = 0;
let buffer = "0";
let operator = null;

calculatorDiv.addEventListener("click", function (event) {
  if (event.target.matches(".clear-button")) {
    clearDisplay();
  } else if (event.target.matches(".number")) {
    handleNumbers(event);
  } else if (event.target.matches(".operator")) {
    handleOperators(event);
  } else if (event.target.matches(".equals")) {
    displayResult(event);
  }
});

function clearDisplay() {
  display.innerText = "0";
  buffer = null;
  operator = null;
}

function handleNumbers(event) {
  if (display.innerText === "0") {
    display.innerText = "";
  }
  display.innerText += event.target.innerText;
}

function handleOperators(event) {
  if (operator === null) {
    console.log(`click operator when ${operator}`);
    runningTotal = parseInt(display.innerText);
    display.innerText = "0";
    operator = event.target.innerText;
    console.log(`operator set to ${operator}`);
  } else {
    buffer = parseInt(display.innerText);
    runCalculations(buffer);
    operator = event.target.innerText;
    display.innerText = "0";
  }
}

function runCalculations(buffer) {
  switch (operator) {
    case "÷":
      runningTotal /= buffer;
      break;
    case "×":
      runningTotal *= buffer;
      break;
    case "−":
      runningTotal -= buffer;
      break;
    case "+":
      runningTotal += buffer;
      break;
  }
}

function displayResult(event) {
  handleOperators(event);
  display.innerText = runningTotal;
  runningTotal = 0;
  buffer = "0";
  operator = null;
}

// the idea here is first to have the behavior of clicking a number implemented

const calculatorDiv = document.querySelector(".calculator");
const display = document.querySelector(".display");

let runningTotal = 0;
let lastValue = null;
let operator = null;

function clearDisplay() {
  display.innerText = "0";
  lastValue = null;
  operator = null;
}

function handleNumbers(event) {
  if (display.innerText === "0") {
    display.innerText = "";
  }
  display.innerText += event.target.innerText;
}

function runCalculations() {
  switch (operator) {
    case "÷":
      runningTotal /= lastValue;
      break;
    case "×":
      runningTotal *= lastValue;
      break;
    case "−":
      runningTotal -= lastValue;
      break;
    case "+":
      runningTotal += lastValue;
      break;

    default:
        
      break;
  }
  console.log(runningTotal);
}

function handleOperators(event) {
  if (operator === null) {
    runningTotal = parseInt(display.innerText);
    operator = event.target.innerText;
    display.innerText = "0";
  } else {
    lastValue = parseInt(display.innerText);
    console.log("here");
    runCalculations();
  }
}
calculatorDiv.addEventListener("click", function (event) {
  if (event.target.matches(".clear-button")) {
    clearDisplay();
  } else if (event.target.matches(".number")) {
    handleNumbers(event);
  } else if (event.target.matches(".operator")) {
    handleOperators(event);
  }
});

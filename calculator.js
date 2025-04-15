// Variables
let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let resultShown = false;


function appendNumber(num) {
  if (resultShown) {
    clearDisplay();
    resultShown = false;
  }

  if (currentOperator === "") {
    firstNumber += num; // adding to the first number
    document.getElementById("display").value = firstNumber;
  } else {
    secondNumber += num; // adding to the second number
    document.getElementById("display").value = firstNumber + currentOperator + secondNumber;
  }
}


function appendDot() {
  if (currentOperator === "") {
    if (!firstNumber.includes(".")) {
      firstNumber += ".";
      document.getElementById("display").value = firstNumber;
    }
  } else {
    if (!secondNumber.includes(".")) {
      secondNumber += ".";
      document.getElementById("display").value = firstNumber + currentOperator + secondNumber;
    }
  }
}


function setOperator(op) {
  if (firstNumber === "") return;
  if (secondNumber !== "") {
    calculate();
  }
  currentOperator = op;
  document.getElementById("display").value = firstNumber + currentOperator;
}


function calculate() {
  let num1 = parseFloat(firstNumber);
  let num2 = parseFloat(secondNumber);
  let result = 0;


  if (isNaN(num1) || isNaN(num2)) return;


  if (currentOperator === "+") {
    result = num1 + num2;
  } else if (currentOperator === "-") {
    result = num1 - num2;
  } else if (currentOperator === "*") {
    result = num1 * num2;
  } else if (currentOperator === "/") {
    if (num2 === 0) {
      result = "Error"; 
    } else {
      result = num1 / num2;
    }
  }


  document.getElementById("display").value = result;
  firstNumber = result.toString();
  secondNumber = "";
  currentOperator = "";
  resultShown = true;
}

function clearDisplay() {
  firstNumber = "";
  secondNumber = "";
  currentOperator = "";
  document.getElementById("display").value = "";
}

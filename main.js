let displayValue = "0";
let pendingVal;
let stringArr = [];
let evaluated = false;
let operators = /[*/+-]/;
let reset = "0";

let calculator = document.getElementById("calculator");
let resultDisplay = document.getElementById("display");
let historyDisplay = document.getElementById("history");

let updateDisplay = (event) => {
  let btnValue = event.target.innerText;
  if (displayValue === "0") {
    displayValue = "";
  }
  if (evaluated === true) {
    displayValue = "";
    evaluated = false;
  }
  displayValue += btnValue;
  resultDisplay.innerText = displayValue;
};

let lastDigitIsOperator = (arr) => {
  if (operators.test(arr[arr.length - 1])) {
    arr.pop();
  }
};

let performOperation = (event) => {
  let operator = event.target.innerText;
  switch (operator) {
    case "+":
      pendingVal = displayValue;
      displayValue = "0";
      resultDisplay.innerText = displayValue;
      if (pendingVal != "0") {
        stringArr.push(pendingVal);
      }
      lastDigitIsOperator(stringArr);
      stringArr.push("+");
      break;
    case "-":
      pendingVal = displayValue;
      displayValue = "0";
      resultDisplay.innerText = displayValue;
      console.log(stringArr[stringArr.length - 1]);
      if (pendingVal != "0") {
        stringArr.push(pendingVal);
      }
      if (stringArr[stringArr.length - 1] !== "*") {
        lastDigitIsOperator(stringArr);
      }
      stringArr.push("-");
      break;
    case "x":
      pendingVal = displayValue;
      displayValue = "0";
      resultDisplay.innerText = displayValue;
      if (pendingVal != "0") {
        stringArr.push(pendingVal);
      }
      lastDigitIsOperator(stringArr);
      stringArr.push("*");
      break;
    case "÷":
      pendingVal = displayValue;
      displayValue = "0";
      resultDisplay.innerText = displayValue;
      if (pendingVal != "0") {
        stringArr.push(pendingVal);
      }
      lastDigitIsOperator(stringArr);
      stringArr.push("/");
      break;
    default:
      break;
  }
  console.log(stringArr);
};

calculator.addEventListener("click", function (event) {
  if (event.target.classList.contains("number")) {
    updateDisplay(event);
  }
  if (event.target.classList.contains("operator")) {
    performOperation(event);
  }
  if (event.target.id === "clear") {
    displayValue = "0";
    pendingVal = undefined;
    stringArr = [];
    resultDisplay.innerText = displayValue;
  }
  if (event.target.id === "backspace" || event.target.id === "backsp") {
    let displayLength = displayValue.length;
    displayValue = displayValue.slice(0, displayLength - 1);
    if (displayValue === "") {
      displayValue = "0";
    }
    resultDisplay.innerText = displayValue;
  }
  if (event.target.classList.contains("decimal")) {
    if (!displayValue.includes(".")) {
      displayValue += ".";
      resultDisplay.innerText = displayValue;
    }
  }
  // if (event.target.classList.contains("negative")) {
  //   if (!displayValue == "0") {
  //     displayValue = -displayValue;
  //     stringArr.push(displayValue);
  //     resultDisplay.innerText = displayValue;
  //   }
  // }
  if (event.target.id === "equals") {
    stringArr.push(displayValue);
    let history = stringArr.join(" ");
    historyDisplay.innerText = history;
    let evaluation = eval(stringArr.join(" "));
    displayValue = evaluation + "";
    resultDisplay.innerText = displayValue;
    console.log(stringArr);
    stringArr = [];
    evaluated = true;
  }
});

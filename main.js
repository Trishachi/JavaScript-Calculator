let displayValue = "0";
let history;
let stringArr = [];
let evaluated = false;
let operators = /[*/+-]/;

let calculator = document.getElementById("calculator");
let resultDisplay = document.getElementById("display");
// let historyDisplay = document.getElementById("history");

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
  // historyDisplay.innerText = stringArr;
};

let performOperation = (event) => {
  let operator = event.target.innerText;
  // console.log(stringArr);
  // console.log(stringArr[stringArr.length - 1]);
  // if (operators.test(stringArr[stringArr.length - 1])) {
  //   stringArr.pop();
  // }
  switch (operator) {
    case "+":
      history = displayValue;
      displayValue = "0";
      resultDisplay.innerText = displayValue;
      stringArr.push(history);
      stringArr.push("+");
      break;
    case "-":
      history = displayValue;
      displayValue = "0";
      resultDisplay.innerText = displayValue;
      stringArr.push(history);
      stringArr.push("-");
      break;
    case "x":
      history = displayValue;
      displayValue = "0";
      resultDisplay.innerText = displayValue;
      stringArr.push(history);
      stringArr.push("*");
      break;
    case "÷":
      history = displayValue;
      displayValue = "0";
      resultDisplay.innerText = displayValue;
      stringArr.push(history);
      stringArr.push("/");
      break;
    default:
      break;
  }
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
    history = undefined;
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
  if (event.target.classList.contains("negative")) {
    if (!displayValue == "0") {
      displayValue = -displayValue;
      resultDisplay.innerText = displayValue;
    }
  }
  if (event.target.id === "equals") {
    stringArr.push(displayValue);
    let evaluation = eval(stringArr.join(" "));
    displayValue = evaluation + "";
    resultDisplay.innerText = displayValue;
    stringArr = [];
    evaluated = true;
  }
});

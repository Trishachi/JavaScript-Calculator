let displayValue = "0";
let history;
let stringArr = [];
let evaluated = false;

let resultDisplay = document.getElementById("display");

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

let performOperation = (event) => {
  let operator = event.target.innerText;
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
    case "=":
      stringArr.push(displayValue);
      let evaluation = eval(stringArr.join(" "));
      displayValue = evaluation + "";
      resultDisplay.innerText = displayValue;
      stringArr = [];
    default:
      break;
  }
  evaluated = true;
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
});

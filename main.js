let displayValue = "0";
let history;
let stringArr = [];

let resultDisplay = document.getElementById("display");

let updateDisplay = (event) => {
  let btnValue = event.target.innerText;

  if (displayValue === "0") {
    displayValue = "";
  }
  displayValue += btnValue;
  resultDisplay.innerText = displayValue;
};

calculator.addEventListener("click", function (event) {
  if (event.target.classList.contains("number")) {
    updateDisplay(event);
  }
  if (event.target.classList.contains("operator")) {
    performOperation();
  }
});

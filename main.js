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
  //   if (event.target.classList.contains("operator")) {
  //     performOperation();
  //   }
  if (event.target.id === "clear") {
    // console.log("Clear Button Clicked");
    displayValue = "0";
    history = undefined;
    stringArr = [];
    resultDisplay.innerText = displayValue;
  }
  if (event.target.id === "backspace" || event.target.id === "backsp") {
    console.log("BS Clicked");
    let displayLength = displayValue.length;
    displayValue = displayValue.slice(0, displayLength - 1);
    if (displayValue === "") {
      displayValue = "0";
    }
    resultDisplay.innerText = displayValue;
  }
});

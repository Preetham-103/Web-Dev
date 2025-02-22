console.log("Faulty Calculator Loaded!");

document.addEventListener("DOMContentLoaded", function () {
  let resultField = document.getElementById("result"); // Input field

  let buttons = document.querySelectorAll("input[type='button']"); // All buttons

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      let value = button.value;

      if (value === "=") {
        calculateResult();
      } else if (value === "c") {
        resultField.value = ""; // Clear input
      } else {
        resultField.value += value; // Append value to input field
      }
    });
  });

  function calculateResult() {
    let expression = resultField.value;

    // Replace correct operations with faulty ones
    expression = expression.replace(/\+/g, "-");
    expression = expression.replace(/\*/g, "+");
    expression = expression.replace(/-/g, "/");
    expression = expression.replace(/\//g, "**");

    try {
      let result = eval(expression); // Evaluate the faulty expression
      resultField.value = result;
    } catch (error) {
      resultField.value = "Error"; // Handle invalid expressions
    }
  }
});

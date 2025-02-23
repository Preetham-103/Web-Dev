document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("input-box");
  let displayBox = document.getElementById("display-box");

  function generateBusinessName() {
    let random = Math.random();

    console.log(random);
    let first_name, second_name, third_name;
    // For First Name
    if (random < 0.33) {
      first_name = "Crazy";
    } else if (random < 0.66 && random >= 0.33) {
      first_name = "Amazing";
    } else {
      first_name = "Fire";
    }

    // For  Second Name
    if (random < 0.33) {
      second_name = " Engine";
    } else if (random < 0.66 && random >= 0.33) {
      second_name = " Food";
    } else {
      second_name = " Garments";
    }

    // For Third Name
    if (random < 0.33) {
      third_name = " Bros";
    } else if (random < 0.66 && random >= 0.33) {
      third_name = " Limited";
    } else {
      third_name = " Hub";
    }
    let businessName = first_name + second_name + third_name;
    displayBox.textContent = businessName;
  }

  button.addEventListener("click", generateBusinessName);
});

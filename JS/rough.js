let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let input = document.getElementById("userInput").value;

  document.getElementById("output").innerHTML = input;
});

const heading = document.createElement("h1");
heading.textContent = "Hi, I am Preetham Kumar Dundigalla";
document.body.appendChild(heading);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.id;
    heading.style.color = color;
  });
});

// List of all Mouse events.
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

let btn = document.getElementById("btn");

btn.addEventListener("dblclick", () => {
  document.querySelector(".box").innerHTML =
    "<b> Yeyy you were clicked</b> Enjoy your click.";
});

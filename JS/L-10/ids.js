console.log("Learning about ids, class and more in JS.");

// document.getElementsByClassName(); -> Changes the property of the class we have selected. class is not unique, so we can select a group of the elements.

// let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// boxes[2].style.backgroundColor = "red";

// document.getElementById() -> Changes the property of the ID we have selected. ID is unique, so we can target a specific element.

// document.getElementById("box3").style.backgroundColor = "blue";

// document.querySelector() -> selects the first class.

// document.querySelector(".box").style.backgroundColor = "green";

// document.querySelectorAll() -> in this if you want to change color you need to use foreach loop.

// document.querySelectorAll(".box").forEach((e) => {
//   e.style.backgroundColor = "blue";
// });

//getElementByTagName();
console.log(document.getElementsByTagName("div")); // Gives all the div's we have used in the code.

console.log("DOM and it's methods");

console.log(document.querySelector(".box1").innerHTML); // Gives the content present insdie box1's div html tags.
console.log(document.querySelector(".box1").outerHTML); // outerHTML gives whole div section of box1.
console.log(document.querySelector(".box1").tagName); // Gives what tags we are using.
console.log(document.querySelector(".box1").nodeName); // Same as TagName but Node includes all the names including tagnames.
console.log(document.querySelector(".box1").textContent); // Gives the text content present in box1 div.
console.log(document.querySelector(".box1").hasAttribute); // Shows what attributes we have in the div.
console.log(document.querySelector(".box1").getAttribute); // Get's the attributes which we have in div.
console.log(document.querySelector(".box1").attributes); // Gives all the attributes we have in the div

// document.designMode = "ON"; // We can design web directly in the website itself

// let div = document.createElement("div");
// div.innerHTML = "Hi, <b>Preetham</b> created me";

// div.setAttribute("class", "created");

// document.querySelector(".container").before(div);

/*
1. afterend -> Keeps the string after the div container
2. afterbegin -> Keeps the string just after the div container starts
3. beforebegin -> Keeps the string just before the div container starts.
4. beforeend -> Keeps the string just before the div container ends.
*/
// let cont = document.querySelector(".container");
// cont.insertAdjacentHTML(
//   "beforeend",
//   "<b> Preetham is pushing me inside the water...!!!</b>"
// );

console.log(document.querySelector(".container"));
console.log(document.querySelector(".container").classList); // Give the list of the class.
console.log(document.querySelector(".container").className); // Give the list of the class Names.
console.log(document.querySelector(".container").classList.add("Preetham")); // This will add the class inside the div container.
console.log(document.querySelector(".container").classList.remove("Preetham")); // This will remove the class inside the div container.
console.log(document.querySelector(".container").classList.toggle("Preetham")); // This will add the class if class is not present (or) it will remove the class if it is already present.

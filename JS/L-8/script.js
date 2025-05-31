document.title = "JavaScript DOM (Document Object Model)";
console.log(document.title);
// console.log(document.body);

document.body.style.backgroundColor = "aqua";

/* Window -> DOM, BOM and JavaScript core features
 Window is an global object which is like parent for the DOM , BOM, JavaScript */

/*                  Window
                    /  |  \
                DOM   BOM  JavaScript Core

// DOM -> Document Object Model.
// BOM -> Broswer Object Model.

console.log(window); // SHows the window propoerties of the JavaScript

window.console.log(window); // This is another way to represent the Window object in Javascript.

console.log(window.document); // As window is an parent class for DOM , we can access the document using this window.

console.log(window.document.body); // body is subclass of document and document is child of window, so we can access that too using window.

console.log(document); */

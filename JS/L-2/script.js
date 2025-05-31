console.log("Variables in JavaScript");

// Variable type - var 
// var a = 5;
// var b = 6;
// var c = "Preetham";
// console.log(a+b+8);
// console.log(a+b+c);
// console.log(typeof a, typeof b, typeof c);

// Varibale type - const

// const d = 10;
// console.log(d);
// d = d+1; // Error ->Assignment to constant variable.i.e const is constant, which cannot be changed. 
// console.log(d);

// Whenever working with js code, try to use "let" instead of "var", as "let" is a global variabel as well as block variabel, but "var" is only a global variable.


// dType type

let x = "Preetham";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r);
// Here you can see that dtype of null is an object in js.

// Objects(Key-Value pairs) in javaScript

let o  = {
    "name":"Preetham Kumar Dundigalla",
    "Reg No" : "7949",
    "College" : "VIT-AP"
}

console.log(o);
// To add other key-value pair use following syntax

o.salary = "4lpa";
console.log(o);

// You can modify the key's value number of times.
o.salary = "6lpa";
console.log(o);
const { Result } = require("ethers");

console.log("Functions in JavaScript");

// Creating functions in JavaScript
function nice(name,name1){
    console.log("Hey "+name+" You are an idiot! ");
    console.log("Because "+name1+" is also an idiot!");
}

nice("Preetham","Bhavya");

function sum(a,b){
    return a+b
}

let result1 = sum(3,3);
let result2 = sum(6,6);
let result3 = sum(8,8);

console.log("The sum of these numbers is: ",result1);
console.log("The sum of these numbers is: ",result2);
console.log("The sum of these numbers is: ",result3);
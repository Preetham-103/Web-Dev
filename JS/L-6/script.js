console.log("Strings in JavaScript");

console.log("Following is the String");
let my_name = "Preetham";
console.log(my_name);

console.log("Accessing the characters in the name");
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);

let size = my_name.length;
// console.log(size);

for(let i=0;i<my_name.length;i++)
{
    console.log(my_name[i]);
}

// Template Literals
console.log(`Thanks for giving the information ${my_name}`);

// String to LowerCase and UpperCase.
console.log(my_name.toUpperCase());
console.log(my_name.toLowerCase());

console.log(my_name.slice(1,6)); // Gives the characters within the given range, 1 -> n-1;

console.log(my_name.replace("AM","2814"));
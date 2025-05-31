// function factorial(n) {
//   let res = 1;

//   for (let i = 1; i <= n; i++) {
//     res *= i;
//   }
//   return res;
// }

// console.log(factorial(5));

let n = 5;
let newArr = [];

for (let i = 0; i <= n; i++) {
  newArr.push(i);
}

let res = newArr.reduce(factorial(5));

console.log(res);

function factorial(num) {
  return num * (num - 1);
}

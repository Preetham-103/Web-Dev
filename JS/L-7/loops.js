console.log("Loops for arrays in JS");

// let a = [1, 93, 5, 6, 88];
// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// a.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// for (const key in obj) {
//   if (Object.hasOwnProperty.call(obj, key)) {
//     const element = obj[key];
//     console.log(element);
//   }
// }

// Mapping -> This is a shortcut to insert elements inside array. Rather than using for loops we can do it with single line of code

let arr1 = [1, 2, 3, 4, 5];

let newArr = arr1.map((e) => {
  return e ** 2;
});
console.log(newArr);

// Filter method in javaScript
const greaterThanSeven = (e) => {
  if (e > 7) {
    return true;
  }
  return false;
};
console.log(newArr.filter(greaterThanSeven));

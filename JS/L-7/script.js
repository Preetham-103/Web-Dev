console.log("Arrays in JavaScript");

let arr = [1, 2, 4, 5, 7];
// console.log(arr);
// console.log(arr.length);

// console.log("Array before changing the elements");

// Arrays are mutable.
// console.log(arr[0]);
// console.log("Array after changing the elements");
// arr[0] = 10;
// console.log(arr[0]);

//Strings are immutable
// let my_name = "Preetham";
// console.log("String before changing the elements");
// console.log(my_name[0]);

// my_name[0] = "K";
// console.log("String after changing the elements");
// console.log(my_name[0]); // answer is "P" in both cases... String is Immutable.

// Methods in Arrays

// 1. Typeof method
// console.log("Typeof Method in arrays give the datatype of the array");
// console.log("arr is " + typeof arr + " type.");

// 2. toString method

// console.log("toString method will convert the array into String");
// let res = arr.toString();
// console.log(arr);
// console.log("res is a " + typeof res + " type");

// 3. Join method

// console.log(
//   "Join method will replace the ',' with the expression we have given."
// );
// console.log(arr.join(" and "));
// console.log(arr.join("|"));

// 4. Pop method

// let arr2 = [1, 2, 3, 4, 5, 6];
// console.log(arr2);
// console.log(arr2.pop()); // Will pop the last element.

// 5. push method

// arr2.push(100); // This method will push the element to the last index.
// console.log(arr2);
// arr2.push("Preetham");
// console.log(arr2, typeof arr2);

// 6. Shift
// Here pop will remove LAST element and shift will remove FIRST element.
// console.log("shift method will remove first element of the array");

// console.log("Removed element is " + arr.shift());
// console.log("Remaining elements : " + arr);

// 7. Unshift
// Here unshift will ADD element at the begining of the arr.
// arr.unshift(1);
// console.log(arr);

// 8. Delete

// delete arr[0];
// console.log(arr);

// 9. Concat() method

// let a1 = [1, 2, 3, 4];
// let a2 = [5, 6, 7];
// let a3 = [8, 9, 10];
// let res = a1.concat(a2,a3);
// console.log(res);

// 10. Sort() method used to sort array
let a1 = [10, 3, 2];
console.log(a1.sort());

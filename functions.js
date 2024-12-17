"use strict";
// A learning to How Functions declared in Typescript
// -- Simple Function
function add(num1, num2) {
    return num1 + num2;
}
console.log("Sum is: " + add(12, 20));
// optional parametrs in a function
function addition(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(addition(10, 20, 10));
// -- Arrow Functions
const substract = (num1, num2) => num1 - num2;
console.log("substraction via arrow Fun is: " + substract(10, 3));

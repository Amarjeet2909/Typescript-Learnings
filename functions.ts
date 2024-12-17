// A learning to How Functions declared in Typescript

// -- Simple Function
function add(num1: number, num2: number): number {
    return num1 + num2;
}

console.log("Sum is: " + add(12, 20));

// optional parametrs in a function
function addition(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(addition(10, 20, 10)); // If we don't give num3 still it will work

// -- Arrow Functions
const substract = (num1: number, num2: number): number => num1 - num2;

console.log("substraction via arrow Fun is: " + substract(10, 3));

// Function with default parameters : can set default values for parameters.
function power(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}

console.log(power(3));       // Output: 9 (default exponent 2)
console.log(power(3, 3));    // Output: 27

// Functions with Rest Parameters : Rest parameters allow a function to accept an indefinite number of arguments.
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  
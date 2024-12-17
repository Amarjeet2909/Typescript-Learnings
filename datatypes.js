"use strict";
console.log("Hello Amarjeet! It's Data Type Module");
/*
    Data Types: string
                number
                boolean
                array
                enum
                tuple
                any
                void
                never
*/
// Declaring variables in TS
let isValid;
isValid = true;
console.log(isValid);
// Declaring and Assigning at once called ( Explicitily Typed ) 
let myName = "Amarjeet";
console.log(myName);
// In this case compiler detect the type of variable being stored
let lastName = "Singh";
// we can use const and var also to declare variables but using var is not recommmended bcs it is Function-Scoped which may leads to Bugs due to scoping issues
// --> Array 
// Declaring 
let empList;
empList = ["Sam", "Harry", "Sonia"];
console.log(empList);
// Another way of declaring Array
let marksList; // Called Generics
marksList = [100, 34, 33, 65];
console.log(marksList);
// Applying some Functions on array
let result = marksList.filter((marks) => marks > 50);
let findPerson = empList.find((person) => person === "Harry");
console.log(result);
console.log(findPerson);
// --> Enumns in Typescript: Enums in TypeScript allow you to define a set of named constants, which can be either numeric or string-based. Enums provide meaningful names for values, improving code clarity.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
let move = Direction.Left;
console.log(move); // 2
// we can set a starting value explicitly, and subsequent members will increment automatically:
var Status;
(function (Status) {
    Status[Status["Pending"] = 1] = "Pending";
    Status[Status["Approved"] = 2] = "Approved";
    Status[Status["Rejected"] = 3] = "Rejected"; // 3
})(Status || (Status = {}));
let currentStatus = Status.Rejected;
console.log(currentStatus); // Output: 3
// String enunms
var colorsMood;
(function (colorsMood) {
    colorsMood["Red"] = "You are in Love";
    colorsMood["Blue"] = "You are nature Lover";
    colorsMood["Black"] = "You know Black Magic";
})(colorsMood || (colorsMood = {}));
let tellMeMood = colorsMood.Blue;
console.log(tellMeMood);
// Tuples in TS: A tuple in TypeScript is an ordered, fixed-size array where each element can have a specific type. It allows you to represent a collection of elements of different types.
let person;
person = ["Amarjeet", 23];
// person = [30, "Alice"]; // Error: Type mismatch
// Tuples can have optional elements using ?
let user;
user = ["Bob"]; // OK
user = ["Bob", 25]; // OK
// Any in TS: any type is a special type that effectively disables TypeScript’s type-checking for a variable. When you declare a variable with any, it can hold any type of value.
let favoriteColor = "Green"; // Can be string initially
favoriteColor = 42; // Now it's a number
favoriteColor = true; // Now it's a boolean
// Example
let data;
data = "Hello World"; // OK
data = 123; // OK
data = [1, 2, 3]; // OK
data = { name: "Alice" }; // OK
console.log(data);

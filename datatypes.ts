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
let isValid : Boolean;
isValid = true;
console.log(isValid);

// Declaring and Assigning at once called ( Explicitily Typed ) 
let myName : string = "Amarjeet";
console.log(myName);

// In this case compiler detect the type of variable being stored
let lastName = "Singh";

// we can use const and var also to declare variables but using var is not recommmended bcs it is Function-Scoped which may leads to Bugs due to scoping issues

// --> Array 
// Declaring 
let empList : string[];

empList = ["Sam", "Harry", "Sonia"];
console.log(empList);

// Another way of declaring Array
let marksList : Array<number> // Called Generics
marksList = [100, 34, 33, 65];
console.log(marksList);

// Applying some Functions on array
let result = marksList.filter((marks) => marks > 50);
let findPerson = empList.find((person) => person === "Harry");

console.log(result);
console.log(findPerson);

// --> Enumns in Typescript: Enums in TypeScript allow you to define a set of named constants, which can be either numeric or string-based. Enums provide meaningful names for values, improving code clarity.
enum Direction {
    Up, // 0
    Down, // 1
    Left, // 2
    Right // 3
}

let move : Direction = Direction.Left;
console.log(move); // 2

// we can set a starting value explicitly, and subsequent members will increment automatically:
enum Status {
    Pending = 1,  // Starts at 1
    Approved,     // 2
    Rejected      // 3
}
  
  let currentStatus: Status = Status.Rejected;
  console.log(currentStatus); // Output: 3

// String enunms
enum colorsMood {
    Red = "You are in Love",
    Blue = "You are nature Lover",
    Black = "You know Black Magic"
}

  let tellMeMood = colorsMood.Blue;
  console.log(tellMeMood);

// Tuples in TS: A tuple in TypeScript is an ordered, fixed-size array where each element can have a specific type. It allows you to represent a collection of elements of different types.
let person : [string, number];
person = ["Amarjeet", 23];
// person = [30, "Alice"]; // Error: Type mismatch

// Tuples can have optional elements using ?
let user: [string, number?];
user = ["Bob"];    // OK
user = ["Bob", 25]; // OK

// Any in TS: any type is a special type that effectively disables TypeScript’s type-checking for a variable. When you declare a variable with any, it can hold any type of value.
let favoriteColor: any = "Green"; // Can be string initially
favoriteColor = 42;              // Now it's a number
favoriteColor = true;            // Now it's a boolean

// Example
let data: any;

data = "Hello World";  // OK
data = 123;            // OK
data = [1, 2, 3];      // OK
data = { name: "Alice" }; // OK

console.log(data);

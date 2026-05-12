// 10. Functions

// Function Expressions
var magic = function () {
    return new Date();
};
console.log(magic());

// Function expressions can also be written as arrow functions
// Arrow Functions
var magic = () => new Date();
console.log(magic());

// Example of an arrow function
const nums = [1, 2, 3, 4];

// filter takes a function argument for filter logic
// If multiple arguments are needed, use ()
const even = nums.filter(n => n % 2 === 0);

console.log(even);

// Arrow functions are similar to lambda functions in Python.
// They are even more powerful because Python lambdas are limited
// to a single expression, while arrow functions can contain
// multiple lines of code using {}.

// --------------------------------------------------
// "this" keyword in functions
// --------------------------------------------------

// In regular functions, "this" refers to the object
// that calls the function.

let dog = {
    name: "Rex",
    numLegs: 4,

    sayLegs: function () {
        return "This dog has " + this.numLegs + " legs.";
    }
};

console.log(dog.sayLegs());

// --------------------------------------------------
// Arrow functions behave differently with "this"
// --------------------------------------------------

dog = {
    name: "Rex",
    numLegs: 4,

    sayLegs: () => {
        return "This dog has " + this.numLegs + " legs.";
    }
};

console.log(dog.sayLegs());

// In regular functions:
// "this" refers to the object calling the function.
// Similar to "self" in Python methods.

// In arrow functions:
// Arrow functions do NOT have their own "this".
// They inherit "this" from the parent scope.

// In this example, the parent scope is the global scope,
// so "this" refers to the global object
// (window in browsers), NOT the dog object.
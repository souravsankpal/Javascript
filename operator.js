//6. Operators

// Strict Equality Operator
console.log(3 == "3");
console.log(3 === "3");

// Strict Inequality Operator
console.log(3 != "3");
console.log(3 !== "3");

// And Operator &&
console.log(true && true);
console.log(true && false);

// Or Operator ||
console.log(true || false);
console.log(false || false);

// Ternary Operator
function checkEquality(a, b) {
    return a === b ? "Its Equal" : "Its Not Equal";
}
console.log(checkEquality(1, 2));

// Multiple Ternary Operators
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(3));

// Rest Operator
function sum(x, y, z) {
    return x + y + z;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function sumAll(...args) {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// ... rest operator is like *args in Python
// *args packs arguments into a tuple in Python
// ...args packs arguments into an array in JavaScript

// Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// Destructuring Assignment for Arrays
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

let [x, y, z, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(x, y, z, rest);

// Destructuring Assignment for Objects
const sampleObj = {
    name: "John",
    age: 30,
    city: "New York"
};

const { name: myName, age: myAge, city: myCity } = sampleObj;
console.log(myName, myAge, myCity);

// Destructuring Assignment for Nested Objects
const nestedObj = {
    name: "John",
    age: 30,
    city: "New York",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
};

const {
    address: { state: myState }
} = nestedObj;

console.log(myState);

// Destructuring for Function Arguments
function getPersonName({ name }) {
    // only name is destructured from the object
    return "My name is " + name;
}

console.log(getPersonName(nestedObj));
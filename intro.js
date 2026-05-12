//1. COMMENTS

// Inline Comment

/*
Multi
Line
Comment
*/


/* DATA TYPES
undefined = something that is not defined yet (this is different from null),
null,
boolean,
string,
symbol = creates a unique unique value/reference,
number = stores integers and decimals,
         safe integer range:
         -(2^53 - 1) to (2^53 - 1),
bigint = stores huge integers,
object = key-value collection (similar to Python dict)
*/


//2. Variables

// Variable Declare
var a;

// Variable Declare and Assignment in same line
var b = 2;

console.log(a);

// Variable Assignment
a = 7;
b = a;

console.log(a);

// Incrementing Numbers
a++;

console.log(a);

// Decrementing Numbers
a--;

console.log(a);

// Self divide/multiply/add/subtract etc
// a +=
// a -=
// a *=
// a /=


//3. Strings

// Escape string
var myStr = "Hello, thats such a \"Cliche!\"";
console.log(myStr);

// Length of the string
var firstName = "Ada";
console.log(firstName.length);



//4. Arrays

// Arrays can contain different data types
var myArray = ["Hello", 2, true, [1, 2, 3]];

// Accessing Array Elements
console.log(myArray[0]);
console.log(myArray[3][0]);

// Modifying Array Elements
myArray[1] = 3;
console.log(myArray);

// Append to Array
myArray.push(1);
console.log(myArray);

// Add to beginning
myArray.unshift(0);
console.log(myArray);

// Remove last element
myArray.pop();
console.log(myArray);

// Remove first element
myArray.shift();
console.log(myArray);



//5. Functions

function addition(a, b) {
    console.log(a + b);
}

addition(1, 5);



//6. Variable Scope

var myGlobal = 10;

console.log(typeof myGlobal);

function func1() {

    // oopsGlobal is not declared,
    // so JS creates it globally (bad practice)
    // This will fail in strict mode

    oopsGlobal = 5;
}

function func2() {

    var output = "";

    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }

    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }

    console.log(output);

    return null;
}

func1();
func2();




//7. Objects

var myObj = {
    "name": "John",
    "age": 30,
    "city": "New York"
};

// Access object properties
console.log(myObj.name);
console.log(myObj["age"]);

// Dot notation or bracket notation can be used
// If key contains spaces, bracket notation is required

// Add new property
myObj["hairColor"] = "brown";

// Delete property
delete myObj["hairColor"];

// Check if property exists
console.log(myObj.hasOwnProperty("hairColor"));




//8. Loops

// For Loop
for (var i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop
var j = 0;

while (j < 6) {
    console.log(j);
    j += 2;
}



// Random cool function

function convertToInt(str) {

    // parseInt(str, base)
    // Here base = 3

    return parseInt(str, 3);
}

console.log(convertToInt("021"));




//9. let vs var vs const

// var
// var can be re-declared
// var is function scoped

// let
// let cannot be re-declared
// let can be re-assigned
// let is block scoped

// const
// const cannot be re-declared
// const cannot be re-assigned
// const is block scoped
// Arrays/objects declared with const can still be mutated



// Freeze Object

const MATH_CONSTANTS = {
    "PI": 3.14
};

Object.freeze(MATH_CONSTANTS);

try {

    MATH_CONSTANTS["PI"] = 99;

    console.log(MATH_CONSTANTS["PI"]);

}
catch (er) {

    console.log("error: " + er);
}




//10. Template Literals

const personName = "John";
const age = 30;
const city = "New York";

const sentence = `My name is ${personName} and
I am ${age} years old and
I live in ${city}`;

console.log(sentence);

// Template literals are similar to Python f-strings
// Backticks `` allow multi-line strings
// ${} allows variable interpolation
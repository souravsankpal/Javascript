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
symbol = creates a unique value for the var, 
number = stores decimals, has a max limit −(2^53−1) ≤ n ≤ 2^53−1, 
bigint = stores only int, for huge ints,
object = python dict
 */


//2. Variables
//Variable Declare
var a;

// Variable Declare and Assignment in same line
var b = 2;

console.log(a)

// Variable Assignment
a = 7;
b = a;

console.log(a)

// Incrementing Numbers
a++;

console.log(a)

// Decrementing Numbers
a--

console.log(a)

// Self divide/multiple/add/sub etc
// a+=, a-=, a*=, a/=


//3. Strings
// Escape string
var myStr = "Hello, thats such a \"Cliche!\""
console.log(myStr)

// Length of the string
var name = "Ada";
console.log(name.length)



//4. Arrays
var myArray = ["Hello", 2, true, [1, 2, 3]];
// Array can have different data types

// Accessing Array Elements
console.log(myArray[0]);
console.log(myArray[3][0]);

// Modifying Array Elements
myArray[1] = 3;
console.log(myArray);

// Append to Array
myArray.push(1);
console.log(myArray);
// Shift adds element to the begining of the array

// Pop removes last element shift removes first element



//5. Functions
function addition(a, b) {
    console.log(a + b);
}

addition(1, 5);


// Var scopes

var myGlobal = 10;
console.log(typeof myGlobal)

function func1() {
    // oopsGlobal is not declared in the function, so it is global
    // This is a bad practice and will not work in strict mode
    oopsGlobal = 5;
}


function func2() {
    var output = ""
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


//6. Operators

//Strict Equality Operator
console.log(3 == "3")
console.log(3 === "3")

//Strict Inequality Operator
console.log(3 != "3")
console.log(3 !== "3")

//And operator &&

//Or Operator ||

//7. Objects

var myObj = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

console.log(myObj.name);
console.log(myObj["age"]);
// Dot or bracket notation can be used to access properties of an object, but if the key has a space, then bracket notation must be used

// Add a new property to an object
myObj["hairColor"] = "brown";

// Delete a property from an object
delete ["hairColor"];

// Check if a property exists in an object
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
    j += 2
}
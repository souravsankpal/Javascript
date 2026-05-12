// Method 1: Using constructor function
function Dog1(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog1("Rex", "brown");

console.log(terrier.name);
console.log(terrier.color);
console.log(terrier.numLegs);


// Or using function expression
const Dog2 = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
};

terrier = new Dog2("Rex", "brown");

console.log(terrier.name);
console.log(terrier.color);
console.log(terrier.numLegs);


// Method 2: Using class keyword
class Dog3 {

    // Similar to __init__ in Python
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 4;
    }
}

terrier = new Dog3("Rex", "brown");

console.log(terrier.name);
console.log(terrier.color);
console.log(terrier.numLegs);


// Getters and setters
// They allow controlled access to object properties.

class Thermostat1 {
    constructor(temperature) {
        this._temperature = temperature;
    }

    get temperature() {
        return this._temperature;
    }

    set temperature(temperature) {
        this._temperature = temperature;
    }
}

const thermo1 = new Thermostat1(25);

console.log(thermo1.temperature);

thermo1.temperature = 30;

console.log(thermo1.temperature);


// Private fields using #
class Thermostat2 {
    #temperature;

    constructor(temperature) {
        this.#temperature = temperature;
    }

    get temperature() {
        return this.#temperature;
    }

    set temperature(temperature) {
        this.#temperature = temperature;
    }
}

const thermo2 = new Thermostat2(20);

console.log(thermo2.temperature);

thermo2.temperature = 35;

console.log(thermo2.temperature);

// This will throw an error:
// console.log(thermo2.#temperature);
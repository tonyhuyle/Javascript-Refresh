
let name = "Tony";
console.log(name);

// variables cannot be a reserved keyword
// Should be meaningful
// cannot start with a number
// cannot contain a space or hyphen



// constants
let interestRate = 0.3;
const intRate = 0.3
interestRate = 1;
console.log(intRate);

// primitives
let eman = "Tony"; // string literal
let age = 30; // num literal
let isApproved = true; // bool literal
let firstName; // or let firstName = undefined;
let lastName = null; // used to explicitly clear value of a variable

//js dynamic lang; type of var can change

console.log(typeof(eman));
eman = 1;
console.log(typeof(eman)); 

let person = {
    name: 'Tony',
    age: 30
};

console.log(person)

//Dot notation
person.name = 'John';

console.log(person.name)

//Bracket notation
person['name'] = 'Mari';
console.log(person.name)

//Array
let selectedColors = ['red', 'blue']; //length 2 with indexes [0, 1]
console.log(selectedColors);

selectedColors[2] = '1';  //length 3 with indexes [0, 1, 2]
console.log(selectedColors);

//Functions
function greet() {
    console.log('Hello World');
}


function greet(name) {
    console.log('Hello ' + name);
} 

greet('John');

function greeted(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
} 

greeted('John', 'Smith');

function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);
console.log(square(4));
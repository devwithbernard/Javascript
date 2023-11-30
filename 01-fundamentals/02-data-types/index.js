/*
* Data Types
*   - null
*   - undefined
*   - boolean
*   - number
*   - string
*   - symbol
*   - bigint
*   - object
* */

// Undefined
let counter;
console.log(typeof counter); // undefined

if(counter === undefined){
    counter = 0;
}

console.log("New counter value: ", counter);

// Null
let todo = null;
console.log(typeof todo); // object -> complex data type

if(todo === null){
    todo = "Make my homeworks";
}

console.log("My todo : ", todo); // My todo: Make my homeworks

// Number
let numberOfStudents = 100;

console.log("Number of students in this school: " + numberOfStudents); // Number of students in this school: 100
console.log(typeof numberOfStudents); // number

let price = 12.5;
let discount = 0.05;

console.log(`The price of article is $${price - discount}`); // The price of article is $12.45

// Get the range of Number type
const MIN_NUMBER = Number.MIN_VALUE;
const MAX_NUMBER = Number.MAX_VALUE;

console.log("Minimal number:",MIN_NUMBER); // Minimal number: 5e-324
console.log("Maximal number:", MAX_NUMBER); // Maximal number: 1.7976931348623157e+308

// NaN : Not a Number
let num = "4a";
try{
    let result = num / 2;
    console.log(result); // NaN -> because '4a' is not a number
}catch (e) {
    console.log(e);
}

// String
let greeting = "Hello world";
let message = 'Bye';

console.log(greeting); // Hello world
console.log("Good morning, " + message + "!\nSee you soon.");

// Backslash
message = 'I\'m also a valid string';
console.log(message); // I'm also a valid string

// String concatenation
let firstName = "Konan";
let lastName = "Bernard";

let fullName = firstName + " " + lastName;

console.log("My name is " + fullName + "."); // My name is Konan Bernard.

// Boolean
/*
* Boolean has two values : true and false
* */

let inProgress = true;
let completed = false;

if(inProgress){
    console.log("Music downloading is not completed");
}else{
    completed = true;
    console.log("Download is completed");
}

// Bigint
/*
* Bigint numbers are all larger than 2e53 - 1;
* */

let pageView = 9007199254740991n;

console.log(typeof pageView); // bigint

// Symbol
/*
* Create a unique value everytime you call Symbol()
* */

let id = Symbol("id");
let credential = Symbol('user_token');

console.log(typeof id); // symbol
console.log(id === credential); // false -> each symbol is unique.

// Object
/*
* object is a collection of properties, where each property is defined as a key:value pair
* */

let emptyObject = {};

console.log(typeof emptyObject); // object

// Object with properties
let person = {
    firstName: "John",
    lastName: "Doe",
};

console.log(`My name is ${person.firstName} ${ person.lastName}.`); // My name is John Doe.

// A property of an object can hold an object
let contact = {
    ...person,
    email:"john.doe@example.com",
    phone:"(408) - 555 - 999",
    address:{
        building: '4000',
        street:'North 1st street',
        city:'San Jose',
        state:'CA',
        country:'USA'
    }
};
console.log(contact);

console.log("User infos : ");
console.log(`
    Full name: ${contact.lastName} ${contact.firstName}
    Email: ${contact.email}
    Phone: ${contact.phone} 
    Address: 
            building: ${contact.address.building}
            street: ${contact.address.street}
            city: ${contact.address.city}
            state: ${contact.address.state}
            country: ${contact.address.country}
`);
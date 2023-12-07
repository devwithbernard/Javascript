// Javascript string

let str = "Hello ";
let name = "John";

console.log(typeof str); // string

// template literals
let greeting = `${str} ${name}!`;
console.log(greeting); // Hello John!

// Escaping characters

console.log('I\'m in love with Javascript');
console.log("Name's list: ")
for(let n of ["Jane","Jack", "John"]){
    console.log("\t"+n);
}

// String concatenation
let className = "btn ";
className += "btn-primary";
className += " outline";

console.log(className);

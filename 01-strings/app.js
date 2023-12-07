// Strings and string methods

const greeting = "Hello world";

// string length
console.log(`Length of '${greeting}': ` + greeting.length);

// changing the case of string
const lower = greeting.toLowerCase();
console.log(lower);

const upper = greeting.toUpperCase();
console.log(upper);

// searching for a substring
// 1- str.indexOf(substr,   ?pos)
let str = "Widget with id";

function checkIfExists(string, subString) {
    if (string === "" || subString === "") {
       return false;
    }

    return string.toUpperCase().indexOf(subString.toUpperCase()) !== -1;
}

console.log(checkIfExists(str, "widget"));

// includes, startsWith, endsWith
const text = "Do so written as raising parlors spirits mr elderly.";

// 1- includes
function includes(string, substring) {
    if(string === undefined || substring === undefined ||
        string === null || substring === null) {
        return false;
    }

    return string.toUpperCase().includes(substring.toUpperCase());
}

console.log(includes(text, "do so written")); // true

// startsWith
if (text.toUpperCase().startsWith("Do".toUpperCase())) {
    console.log("text starts with 'Do'");
}

// endsWith
if(text.toUpperCase().endsWith("elderly.".toUpperCase())) {
    console.log("text ends with 'elderly.'");
}

// Getting a substring
let string = "lorem ipsum";

console.log(string.slice(0, 5));

console.log(string.slice(6, 12));


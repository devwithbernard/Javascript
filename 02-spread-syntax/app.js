// Rest parameters ...
// N.B: The rest parameters must be at the end

function sum(a, b) {
    return a + b;
}

console.log(`1 + 2 = ${sum(1, 2)}`);

console.log(sum(1,2, 3, 4, 5)); // 3 -> only the first two have been counted


function sumNumbers(...args) {
    return args.reduce((result, number) => result + number, 0);
}

console.log(sumNumbers(1,2,3,4, 5, 6)); // 21

// Get some parameters as variables
function showNames(firstName, lastName, ...names) {
    const fullName = `${firstName} ${lastName}`;
    return {
        fullName,
        otherNames: [...names]
    }
}

console.log(showNames('Julius', 'Cesar', 'Consul', 'Alex'));

// The "arguments" variable

function pow(x, n) {
    if(n === 1) return x;
    console.log(arguments, typeof arguments);
    return x * pow(x, n - 1);
}

pow(2,2);

// The spread syntax

let numbers = [1, -2, 3, -5];

console.log(Math.max(numbers)); // NaN

console.log(Math.max(...numbers)); // 3

console.log(Math.max(...numbers, 8, ...[4, -17, 18, 12])); // 18

// Copy an array/object

let numbersCopied = [...numbers];
let nc = numbersCopied;

console.log(numbers === numbersCopied); // false
console.log(numbersCopied === nc); // true

let person = {
    name: 'Jack',
    age : 30,
    toString() {
        return JSON.stringify(person);
    }
}

let copyPerson = {...person};

console.log(copyPerson);

console.log(copyPerson.toString())

copyPerson.name = "Jack Doe";

console.log('Person:', person);
console.log("copyPerson:", copyPerson);

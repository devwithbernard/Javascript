/*
 * Array methods in Javascript
 */

let colors = ["Red","Green", "Blue", "Orange"];

// Add, remove items of an array

// TODO: array.splice
const newColors = [...colors];

newColors.splice(0, 1); // delete first element
console.log(newColors);

newColors.splice(2,0, "Marron"); // add 'Marron' at the index 2
console.log(newColors);

// TODO: array.slice
const cloneColors = [...colors];

const slicedArray = cloneColors.slice(0, 2); // two first items
console.log(slicedArray);

const copyArray = cloneColors.slice(0); // copy an array
console.log(copyArray);

// TODO: array.concat
const letters = ["a", "b", "c"];
let alphabets = ["d", "e", "f"];

const concatLetters = letters.concat(alphabets);
console.log(concatLetters);

// remove an element at the specific index
/**
 * @typedef {id: number, name: string, stars: number} User
 * @type Array<User>
 */
const users = [{id: 1, name:"Jack", stars: 4, }, {id: 2, name:"Jane", stars: 5}, {id: 3, name:"Jean", stars: 6}];

let searchIndex = users.findIndex(user => user.name === "Jane");

const updatedUsers = users.slice(0, searchIndex).concat(users.slice(searchIndex + 1));
console.log(updatedUsers);


// TODO: Iterate : forEach

const newUsers = [...users];
const preferredUsers = [];

newUsers.forEach( (user) => {
    if(user.stars >= 5) {
        user.prefered = true;
        preferredUsers.push(user);
    }else{
        user.prefered = false;
        preferredUsers.push(user);
    }
});

console.log(preferredUsers);

// forEach and asynchronous tasks -> Don't use
const urls = [1,2,3].map( num => `https://jsonplaceholder.typicode.com/users/${num}`);

urls.forEach(async(url) => {
    const response = await fetch(url);
    const user = await response.json();
    console.log(user);
})

// If an asynchronous task failed, all will be failed

// TODO: Searching in array

const cars = ["Peugeot", "Citroen", "Opel", "Renault"];

// indexOf, lastIndexOf and includes
const numbers = [1,2,3,1];

console.log("Index of 2:" + numbers.indexOf(2));

console.log(numbers.indexOf(5)); // -1 -> value not found

console.log(numbers.lastIndexOf(1)); // 3

// check if item is in arr
if(numbers.includes(2)) {
    console.log("2 is in the ", numbers);
}

// TODO: find and findIndex/findLastIndex
/**
 * @type {Array<{id: number, name: string}>}
 */
const persons = [
    {id: 1, name:"John"},
    {id: 2, name:"Pete"},
    {id: 3, name:"Mary"},
    {id: 4, name:"John Doe"}
];

// Find "Mary"
const searchedPerson = persons.find((person) => person.name.toLowerCase() === "mary");
console.log("Searched person: ", searchedPerson);

// Find "John" and update the name property
const searchedIndex = persons.findIndex((person) => person.name.toLowerCase() === "john");

if (searchedIndex !== -1) {
   persons[searchedIndex].name = "John Doe";
}

console.log("Updated person: ",persons[searchedIndex]);

// Find last index of person who's name is 'John Doe'
const foundPerson = persons.findLastIndex((person) => person.name.toLowerCase() === "john doe");
console.log("Found Person Index:", foundPerson);

// TODO: filter
const copiedUsers = [...users];

const filteredUsers = copiedUsers.filter(({id, name, stars}) => id%2 === 0) ;
console.log(filteredUsers);

// TODO: Transform ab array

// map
const nums = [1, 2, 3, 4, 5];

const doubledNums = nums.map(num => num * 2);

console.log(doubledNums); // [2, 4, 6, 8, 10]

const lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log("Lengths: ", lengths); // [5, 7, 6]

/**
 *
 * @param {string} str
 * @return string
 */
function toCapitalize(str) {
    if(!str) return str;

    return str[0].toUpperCase() + str.toLowerCase().slice(1);
}

/**
 *
 * @param {string} str
 * @return string
 */
function capitalizeWord(str) {
    if(!str) return str;

    return str.trim().split(' ').map(toCapitalize).join(" ");
}

const names = ["John Doe", "Jonathan Antoine", "Luke Dance", "Joe Barns"];

const capitalizedNames = names.map(toCapitalize);

console.log("Capitalized names:", capitalizedNames);

const capitalizedWords = names.map(capitalizeWord);

console.log("Capitalized Words:", capitalizedWords);

// TODO: Sort(fn)
const months = ["March", "Jan", "Feb", "Dec"];

months.sort();

console.log(months);

const arr = [1, 2, 15];
arr.sort();

console.log(arr);

arr.sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
});

console.log(arr); // [1, 2, 15]

// TODO: Reverse and toReversed
arr.reverse();
console.log(arr);

const reversedArray = [1, 2, 15].toReversed();
    console.log(reversedArray); // [15, 2, 1]

//Reduce and ReduceRight
const accounts = [
    {
        id: 1,
        name: "Jack Ma",
        account: "$12,000,000.00"
    },
    {
        id: 2,
        name: "John Doe",
        account: "$7,500,000.00"
    },
    {
        id: 3,
        name: "Alexis Sanders",
        account: "$500,000.00"
    },
];

// Total account
function formatAccount(account) {
    if(!account) return account;

    return Number(account.slice(1).split(",").reduce((acc, cur) => acc + cur, ""));
}

const totalAccount = accounts.reduce((acc, cur) => acc + formatAccount(cur.account), 0);

const usDollar = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "USD"
});

console.log("Total balance: ", usDollar.format(totalAccount));



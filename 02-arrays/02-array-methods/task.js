
//Task 1: Filter range
/**
 * @param {Array<number>} arr
 * @param {number} a
 * @param {number} b
 * @return {Array<number>}
 */
function filterRange(arr, a, b) {
    if(!Array.isArray(arr) || a === undefined || b === undefined) return undefined;

    return arr.filter(num => {
        if (a <= num && num <= b) {
            return num;
        }
    });
}

// Test filterRange
const arr = [5, 3, 8, 1];

console.log(filterRange(arr, 1, 4));

// Task 2: Filter range "in place"
/**
 * @param {Array<number>} arr
 * @param {number} a
 * @param {number} b
 * @return {Array<number>}
 */
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if(a < item || item < b ) {
            arr.splice(i, 1);
        }
    }
}

// Test filterRangeInPlace
filterRangeInPlace(arr, 1, 4);
console.log(arr);

// Task 3: Sort in decreasing order
/**
 *
 * @param {Array<number>} arr
 * @return void
 */
function decreaseOrderSort(arr) {
    arr.sort((a, b) => b - a);
}

// Test decreaseOrderSort
let array = [5, 2, 1, -10, 8];

decreaseOrderSort(array);

console.log(array);

// Task 4: Copy and sort array
/**
 * @param {Array<string>} arr
 * @return string[]
 */
function copySorted(arr) {
    return arr.slice().sort();
}

// Test copySorted
let programmingLanguages = ["HTML", "JavaScript", "CSS"];

console.log(copySorted(programmingLanguages));

// Task 5: Map to names

let users = [{name: "John", age: 25}, {name: "Pete", age: 30}, {name: "Mary", age: 28}];
let names = users.map(user => user.name);

console.log(names);

// Task 6: Map to objects
const persons = [
    {name: "John", surname: "Smith", id: 1},
    {name: "Pete", surname: "Hunt", id: 2},
    {name: "Mary", surname: "Key", id: 3},
];

const usersMapped = persons.map(({name, surname, id}) =>
    ({fullName: name + " " + surname, id }));

console.log(usersMapped);

// Task 7: Sort users by age
const gamers = [
    {name: "John", age: 25},
    {name: "Pete", age: 30},
    {name: "Mary", age: 28}
];

/**
 *
 * @param {Array<{name: string, age: number}>} arr
 * @return void
 */
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

// Test sortByAge
sortByAge(gamers);

console.log(gamers);

// Task 8: Shuffle an array
let numbers = [1, 2, 3];

/**
 *
 * @param {Array<number>} arr
 // * @return void
 */
function shuffle(arr) {

    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

shuffle(numbers);

console.log(numbers);

// Task 9: Get average age
const copyGamers = [...gamers];

function getAverageAge(arr) {
    const ageSum = arr.reduce((sum, gamer) => sum + gamer?.age, 0);

    return Math.ceil(ageSum / arr.length);
}

// Test getAverageAge
console.log(getAverageAge(copyGamers));

// Task 10: Filter unique array members
/**
 *
 * @param {Array<string>} arr
 * @return {Array<string>}
 */
function unique(arr) {
   let uniqueArr = [];

   for (let str of arr) {
       if(!uniqueArr.includes(str)) {
           uniqueArr.push(str);
       }
   }

   return uniqueArr;
}

// Test unique function

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));

// Task 11: Create keyed object from array

function groupById(arr) {
    if(!arr) return arr;

    const users = {};

    arr.forEach(item => {
        users[item.id] = item;
    } )

    return users;
}

function bestGroupById(arr) {
    if(!arr) return arr;

    return arr.reduce((obj, item) => {
        obj[item?.id] = item;
        return obj;
    } , {})
}

// Test groupById function
let someUsers = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

const usersGroupedById = groupById(someUsers);
console.log("Users grouped by Id:", usersGroupedById);

console.log("Best users grouped by Id:", bestGroupById(someUsers));
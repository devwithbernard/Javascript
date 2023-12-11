// Task 1:  Filter unique array members
/**
 *
 * @param {Array<any>} arr
 * @return any[]
 */
function unique(arr) {
    if(!arr) return arr;

    return [...new Set(arr)];
}

// Test unique function
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));

// Task 2: Filter anagrams
function aClean(arr) {
    if(!arr) return arr;

    const map = new Map()

    for(let item of arr) {
        const sorted = item.toLowerCase().split("").sort().join('');
        map.set(sorted, item);
    }

    return Array.from(map.values());
}
// Test aClean function
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aClean(arr));

// Iterable keys
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more")

console.log(keys);

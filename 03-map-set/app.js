/*
* Data Structure: Map and Set
* */

// TODO: Map
/*
* Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
* */

const usersMap = new Map();

// Set a key, value
const users = [
    {id: 1, name: "Charles", age: 74},
    {id: 2, name: "John Doe", age: 17},
    {id: 3, name: "Mary Elene", age: 52},
];

users.forEach(user => usersMap.set(user.id, user));

console.log(usersMap);

// get a value from key
if(usersMap.has(1)) {
    let user = usersMap.get(1);
    console.log("Found user:", user);
}


// Size of usersMap
for (let i = 0; i <= usersMap.size; i++) {
    if(usersMap.has(i)) {
        console.log(usersMap.get(i));
    }
}

// Iteration over Map
for (let key of usersMap.keys()) {
    console.log(usersMap.get(key));
}

for (let value of usersMap.values())

for (let [index, value] of usersMap.entries()) {
    console.log(value);
    if (index === 0) break;
}

// TODO: Set

let set = new Set();

let john = {name: "John"};
let pete = {name: "Pete"};
let mary = {name: "Mary"};

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set);

// Iterate over Set
let fruitSet = new Set(["oranges", "apples", "bananas"]);

for( let fruit of fruitSet) {
    console.log("Fruit:", fruit);
}

for (let key of fruitSet.keys()) {
    console.log("Key:", key);
}
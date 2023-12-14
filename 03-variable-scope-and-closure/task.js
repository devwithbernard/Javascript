// Task 1: Sum with closures

function sum(a) {
    return function (b) {
        return a + b;
    }
}

console.log(sum(1)(2)); // 3


// Task 2: Filter through function
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return (x) => {
        if( a <= x && x <= b) return x;
    }
}

console.log(arr.filter(inBetween(3,6)));

function inArray(arr) {
    return (x) => {
        if(arr.includes(x)) return x;
    }
}

console.log(arr.filter(inArray([1, 2, 10])));

// Task 3: Sort by field
let users = [
    {name: "John", age: 20, surname: "Johnson"},
    {name: "Pete", age: 18, surname: "Peterson"},
    {name: "Ann", age: 19, surname: "Hathaway"}
];

function byField(field) {
    return (a, b) => {
        if(field in a && field in b) {
            return a[field] > b[field] ? 1 : -1;
        }else{
            return null;
        }
    }
}

users.sort(byField('name'));

console.log(users)
users.sort(byField('age'));
console.log(users)
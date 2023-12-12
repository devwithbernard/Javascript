// Task 1: Sum the properties
/**
 *
 * @param obj
 * @return number
 */
function sumSalaries(obj) {
    return Object.values(obj).reduce((sum, salary) => sum + salary, 0);
}

// Test sumSalaries
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries));

// Task 2: Count properties
/**
 *
 * @param obj
 * @return number
 */
function count(obj) {
    return Reflect.ownKeys(obj).length;
}

// Test : count function
let user = {
    name: "John",
    age: 30
};

console.log("Number of properties: " + count(user));
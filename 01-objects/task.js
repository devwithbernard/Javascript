// Task 1 : Hello, object
const user = {};

user.name = "John";

user.surname = "Smith";

user.name = "Pete";

delete user.name;

// Task 2: Check for emptiness

function isEmpty(obj) {
    for(let key in obj) {
        return false;
    }
    return true;
}

// test function
if(isEmpty({})) {
    console.log("Valid function");
}else{
    console.log("Function presents bugs");
}

// Task 3: Sum object properties
function sumSalaries(salaries) {
    if(isEmpty(salaries)){
        return 0;
    }

    let sum = 0;

    for(let salary in salaries) {
        sum += salaries[salary];
    }

    return sum;
}

// test sumSalaries function
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

console.log(`Total salaries: $${sumSalaries(salaries)}`)

// Task 4: multiply numeric property values by 2

function multiplyNumeric(obj) {
    if(obj === null || obj === undefined || isEmpty(obj)) {
        return obj;
    }

    for (let key in obj) {
       if(typeof obj[key] === "number") {
           obj[key] *= 2;
       }
    }

    return obj;
}

// Test multiplyNumeric Function
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyMenu = multiplyNumeric(menu);

console.log(multiplyMenu);
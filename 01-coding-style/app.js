// Coding style in javascript

/**
 *
 * @param {number} age
 * @returns boolean
 */
function canGoToParty(age) {
    return age >= 18;
}

const isAuthorized = canGoToParty(48);

if(isAuthorized) {
    console.log("You can go to the party");
}

// Nested Level

/**
 * numbers contain a list of number
 * @type {Array<number>}
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 *
 * @type {Array<number>}
 */
const evens = [];

// bad processing
for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
        if( i === 2 ){
            console.log(`${i} = 2`);
        }
        evens.push(i);
    }
}

// good processing
for (let i = 0; i < numbers.length; i++) {
    if (i === 2) {
        console.log(`${i} = 2`);
    }
    if (i % 2 === 0) evens.push(i);
}

// acceptable function
/**
 *
 * @param {number} x
 * @param {number} n
 */
function pow(x, n) {
    if ( n < 0) {
        alert(`${n} is negative number.`);
    }else{
        let result = 1;

        for (let i = 0; i < n; i++) {
            result *= x;
        }

        return result;
    }
}

// good version of pow(x, n)
/**
 *
 * @param {number} x
 * @param {number} n
 */
function bestPow(x, n) {
    if ( n < 0) {
        alert(`${n} is negative number`);
        return;
    }

    let result = 1;

    for (let i = 0; i < n; i++ ) {
        result *= x;
    }

    return result;
}

// Function placement
// code above function
let sum = sumNumbers(numbers);
console.log(sum);

/**
 *
 * @param {Array<number>} nums
 * @returns number
 */
function sumNumbers(nums){

    if ( nums.length === 0 ) {
        return 0;
    }

    return nums.reduce((sum, cur) => sum + cur, 0);
}

/*
* Coding style - Comments
* */

// Bad comments

/*
    This code check in the numbers list if a number is even
    If it is, add all even numbers to an array and return this array
 */
let isEven = (number) => {
    return number % 2 === 0;
}

const evenNumbers = (numbers) => {
    const evens = [];

    if (Array.isArray(numbers)) {
        for (let number of numbers ) {
            isEven(number) && evens.push(number);
        }

        return evens;
    }

    return null;
}


console.log(evenNumbers([0, 1, 2, 3, 4, 5, 6]));

// Bad function explanation

const showPrimes = (n) => {
    nextPrime:
    for (let i = 2; i < n; i++) {

        // check if i is a prime number
        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue nextPrime;
        }
        console.log(i);
    }
}

showPrimes(20);

// instead of write bad function with some comments, make the function more concise
const showPrimeNumbers = (n) =>{
    if(n < 2){
        return null;
    }

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;

        console.log(i);
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if ( n % i === 0) {
            return false;
        }
    }

    return true;
}

showPrimeNumbers( 30);
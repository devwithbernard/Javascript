// Recursion and stack


// Two ways of thinking

// TODO: Iterative way to implement pow function
/**
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = 3;
let n = 4;

console.log(`pow(${x},${n}) = ${pow(x, n)}`);

// TODO: Recursive way to implement the pow function

function recursivePow(y, m) {
    if(m === 1) {
        return x;
    } else{
      return y * recursivePow(y, m - 1);
    }
}

let y = 2;
let m = 3;

console.log(`pow(${y}, ${m}) = ${pow(y, m)}`);

// Recursive sum

function sum(n) {
    if(n === 1) {
        return n;
    }else{
        return n + sum(n-1);
    }
}

console.log("Sum: " + sum(5));

console.log(5 + 4 + 3 + 2 + 1);

// factorial

function factorial(n) {
    if(n === 1) {
        return n;
    }else{
        return n * factorial(n - 1);
    }
}

console.log(`Factorial(5): ${factorial(5)}`);

// Binome
function binome(n, k) {
    if( k === 0) {
        return 1;
    }else{
        return factorial(n) / (factorial(k) * factorial(n - k));
    }
}

console.log(`C(6, 4) = ${binome(6, 4)}`);

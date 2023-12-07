// Task 1: Array operations

const styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
console.log(styles);

styles[Math.floor((styles.length - 1)/2)] = "Classics";
console.log(styles);

styles.shift();

styles.unshift("Rap", "Reggae");

// Task 2: Sum input numbers
/**
 * @param {Array<number>} numbers
 * @returns number
 */
function sum(numbers) {
    if(numbers ===  null || numbers === undefined) {
        return 0;
    }


    if(Array.isArray(numbers)) {
        let sumOfNumbers = 0;

        for(let number of numbers) {
            sumOfNumbers += number;
        }

        return sumOfNumbers;
    }
}

// Test sum function
console.log(sum([120, 12, 30, 17])); // 179

// Task 3: A maximal subarray
/**
 * @param {Array<number>} arr
 * @returns number
 */
function getMaxSubSum(arr) {
    let maximumSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item;
        maximumSum = Math.max(partialSum, maximumSum);

        if(partialSum < 0) partialSum = 0;
    }

    return maximumSum;
}

// test getMaxSubSum function
const arr = [-1, 2, 3, -9];

console.log(getMaxSubSum(arr));
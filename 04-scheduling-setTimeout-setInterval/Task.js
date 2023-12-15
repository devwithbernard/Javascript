// Task 1: Output every second
/**
 * from < to
 * @param {number} from
 * @param {number} to
 */
const printNumbersWithSetInterval = (from, to) => {
    let counter = from;

    const timerId = setInterval(() => {
        if (counter === to) clearInterval(timerId);

        console.log(`Counter: ${counter}`);
        counter++;
    }, 1000);
}

// printNumbersWithSetInterval(1, 5);


const printNumbersWithSetTimeout = (from, to) => {
    let counter = from;

    function print() {
        console.log(`Counter: ${counter}`);

        if (counter === to) clearTimeout(timerId);

        counter++;
    }
    print();

    let timerId = setInterval(print, 1000);
}

printNumbersWithSetTimeout(1, 8);
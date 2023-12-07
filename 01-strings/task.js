// Task 1 : Uppercased first character
/**
 * The function that returns the string with the uppercased first character
 * @param {string} string
 * @returns string
 */
function ucFirst(string) {
    if (!string ) {
        return string;
    }

    return string[0].toUpperCase() + string.toLowerCase().slice(1);
}

// Test utcFirst function
const ucText = ucFirst("Hello");
console.log(ucText);

// Task 2 : Check Spam
/**
 * the function that return true if the string param contains 'viagra' or 'XXX', otherwise false
 * @param {string} string
 * @return boolean
 */
function checkSpam(string) {
    if (!string) {
        return false;
    }

    // let spamText = ["Viagra", "XXX"];
    //
    // for (let spText of spamText) {
    //     if(string.toUpperCase().includes(spText.toUpperCase())) {
    //         return true;
    //     }
    // }
    //
    // return false;

    return string.toUpperCase().includes("VIAGRA") || string.toUpperCase().includes("XXX");
}

// Test checkSpam
console.log(checkSpam("Buy viaGra now")); // true
console.log(checkSpam("free XXXXX")); // true
console.log(checkSpam("innocent rabbit")); // false

// Task 3: Truncate the text
/**
 * Truncate the text with the maximum length
 * @param {string} text
 * @param {number} maxLength
 * @return string
 */
function truncate(text, maxLength) {
    if (!text) {
        return text;
    }

    return text.length > maxLength ? text.slice(0, maxLength - 1) + "..." : text;
}

// test truncate function
console.log(truncate("Hi everyone!", 20));
console.log(truncate("What I'd like to tell on this topic is:", 20));

// Task 4: Extract the money
/**
 * @typedef {number | undefined } currency
 * @param {string} string
 * @return currency
 */
function extractCurrencyValue(string) {
    if(!string){
        return string;
    }

    return Number(string.slice(1));
}

console.log(extractCurrencyValue("$120.3"));
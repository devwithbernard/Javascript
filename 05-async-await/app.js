// Asynchronous functions : async
async function greet(message) {
    return 'Message: ' + message;
}

greet('Hello world')
    .then(console.log)

// Asynchronous functions: await

async function f() {
    let promise = new Promise(resolve => {
        setTimeout(() => resolve('Promise resolved!'), 3000)
    })
    console.log(await  promise)
    return await promise;
}

f()

// Error handling with Await
/**
 *
 * @param {string} url
 * @return Array<object>
 */
async function fetchJSON(url) {
    try {
        const response = await fetch(url);

        if(response.ok) {
            return await response.json()
        }
    } catch (e) {
        throw new Error('Server Error...')
    }
}

(async () => {
    const todos = await fetchJSON("https://jsonplaceholder.typicode.com/todos?_limit=5");
    console.log(todos)
})()
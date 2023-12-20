// Delay with a promise

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`runs after ${Math.floor(ms / 1000)} seconds`)
        } ,ms)
    })
}

delay(3000)
    .then((message) => console.log(message))
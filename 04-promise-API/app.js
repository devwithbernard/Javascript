// Promise API

// Promise.all
const promises = [1,2,3].map(
    item => fetch(`https://jsonplaceholder.typicode.com/users/${item}`).then(response => response.json())
); // iterable of promises

Promise
    .all(promises)
    .then(users => console.log('users', users));

// Another example of using Promise.all

Promise.all([
    new Promise((resolve) => {
        setTimeout(() => resolve(1), 2000)
    }),
    new Promise((resolve) => {
        setTimeout(() => resolve(2), 1000)
    }),
    new Promise((resolve) => {
        setTimeout(() => resolve(3), 1000)
    })
]).then(console.log);

// Another example of Promise.all


let names = ['iliakan', 'remy', 'jeresig'];

const requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
    .then(responses => {
        for (let response of responses) {
            console.log(`${response.url}: ${response.status}`)
        }

        return responses;
    })
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(users => {
        users.forEach(user => console.log(user))
    })

Promise.allSettled

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];

Promise
    .all(urls.map(url => fetch(url)))
    .then(responses => responses.map(resp => resp.json()))
    .then(users => console.log(users))
    .catch(error => console.log(error))

Promise
    .allSettled(urls.map(url => fetch(url)))
    .then(results => {
        const fulfilledResults = results.filter(result => result.status === 'fulfilled');
        return fulfilledResults.map(item => item.value);
    })
    .then(responses => {
        return Promise.all(responses.map(resp => resp.json()))
    })
    .then(users => {
       users.forEach(user => {
            document.querySelector('#users').innerHTML += `
            <li>${user.name}</li>
            `
       })
    })
    .catch(error => console.log(error))

/*if (!Promise.allSettled) {
    const rejectHandler = reason => ({status: 'rejected', reason});

    const resolveHandler = value => ({status: 'fulfilled', value});

    Promise.allSettled = function (promises) {
        const convertedPromises = promises.map(p => Promise.resolve(p).then(resolveHandler, rejectHandler));
        return Promise.all(convertedPromises);
    };
}*/ // Polyfill for Promise.allSettled

// Promise.any

let anyPromise = Promise.any([
    new Promise((reject) => setTimeout(() => {
        reject(new Error('whoops, Promise failed!'))
    }, 3000)),
    new Promise((resolve) => setTimeout(() => {
        resolve('First fulfilled promise')
    }, 2000)),
    new Promise((resolve) => setTimeout(() => {
        resolve('Second fulfilled promise')
    }, 1000)),
])

anyPromise.then(console.log);
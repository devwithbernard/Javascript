function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = function () {
        callback(script);
    }

    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (script) => {
    console.log(`The script ${script.src} has been loaded`);
})

// Callbacks
const getTodos = (url, onSucceed, onError) => {
    fetch(url)
        .then(data => {
            return data.json()
        })
        .then(user => onSucceed(user))
        .catch(error => onError(error))
}

getTodos('https://jsonplaceholder.typicode.com/users', (users) => {
    const container = document.querySelector('.container');

    if(users) {
        users.forEach(user => {
            container.innerHTML += `<li>${user?.name}</li>`
        })
    }
}, (error) => {
    const container = document.querySelector('.container');

    container.innerHTML += `
    <div id="error-message">
        <p>An error occurs</p>
        <p style="color: red">${error?.message}</p>
    </div> 
    `

    setTimeout(() => {
        document.querySelector('#error-message').remove()
    }, 5000);
});
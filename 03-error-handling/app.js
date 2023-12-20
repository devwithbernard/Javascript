// Error handling with Promises

document.querySelector('#get-avatar').onclick = function (e) {
    let id = Math.floor(Math.random() * 20) + 1

    document.querySelector('.avatar').innerHTML = ""

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then((user) => fetch(`https://api.github.com/users/${user.id}`))
        .then(response => response.json())
        .then(githubUser => new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = githubUser?.avatar_url;
            img.className = 'avatar-img'
            document.querySelector('.avatar').append(img)

            setTimeout(() => {
                img.remove();
                resolve(githubUser);
            }, 3000);
        }))
        .catch(error => console.log(error));
        // Place error handler catch at the end of then block
}
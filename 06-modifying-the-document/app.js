// Element creation : alert
function addAlert(text) {
    const alertContainer = document.createElement('div');

    alertContainer.setAttribute('alert', 'alert')

    alertContainer.className = 'alert alert-success';

    // alertContainer.innerHTML = `<strong>Hi there!</strong><p>You've read an important message.</p>`;
    alertContainer.innerHTML = `<strong>${text}</strong>`;

    // Inserting methods
    document.querySelector('#main').prepend(alertContainer);

}

const allTasks = document.querySelectorAll('[data-task]');

for (let i = 0; i < allTasks.length; i++) {
    const task = allTasks[i];

    task.addEventListener('click', async e => {
        addAlert(`Task ${task.dataset.task} has been delete`)
        task.remove();

        const alertContainers = document.querySelectorAll('[alert]');

        if (alertContainers.length > 0) {
            for (let i = 0; i < alertContainers.length; i++) {
                setTimeout(() => {
                    alertContainers[i].remove()
                }, 3000)
            }
        }
    })
}


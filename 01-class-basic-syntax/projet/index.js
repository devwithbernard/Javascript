class Todo{
    constructor(todo) {
        this.todo = todo;
    }

    template({userId, id, title, completed }) {
        const root = document.createElement('div');
        root.classList.add('todo');

        if (completed) {
            root.classList.add('completed');
        }

        const idContainer = document.createElement('p');
        idContainer.innerText = id;

        const titleContainer = document.createElement('p');
        titleContainer.innerText = title;

        root.append(idContainer, titleContainer);

        return root;
    }

    addToRoot(root) {
        root.append(this.template(this.todo));
    }
}

const getTodos = async (url) => {
    try{
        const response = await fetch(url);
        return await response.json();
    }catch (error) {
        console.log(error)
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const todos = await getTodos('https://jsonplaceholder.typicode.com/todos');

    if(todos) {
        for (let i = 0; i < todos.length; i++) {
            const todo = todos[i];
            const todoObj = new Todo(todo);
            todoObj.addToRoot(document.querySelector('#todo-list'));
        }
    }
})
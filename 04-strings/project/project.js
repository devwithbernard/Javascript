const todos = [];

// DOM elements
const input = $("#input");
const button = $("#submit");
const todoList = $("#todo-list");

// Entry point
document.addEventListener("DOMContentLoaded", todoController)

// todo controller
function todoController(){
    button.addEventListener('click', buttonController);
}

// addTodo
function addTodo(todos){
    todoList.innerHTML = "";
    if(todos.length > 0){
        todos.forEach(todo => {
            todoList.innerHTML += `<li>${todo}</li>`;
        })
    }
}
// buttonController
function buttonController(e){
    e.preventDefault();

    const textIsValid = validateInput(input.value);

    if(textIsValid){
        todos.push(input.value.trim());
        addTodo(todos);
    }else{
        alert("Input text is not valid.");
    }

    input.value = "";
}

// utilities
function validateInput(text){
    const regex = new RegExp(/^([a-zA-Z0-9]{5,})$/);
    return regex.test(text);
}
// select DOM
function $(element){
    return document.querySelector(element);
}
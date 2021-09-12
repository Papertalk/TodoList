
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click',addTodo);

function addTodo(event){

    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');

    const newtodo = document.createElement("li");
    newtodo.innerText=todoInput.value;
    newtodo.classList.add('todo-item');
    todoDiv.appendChild(newtodo);

    const completedbutton = document.createElement('button');
    completedbutton.innerHTML = '<i class="fa fa-check-square"></i>'
    completedbutton.classList.add("complete-btn");
    todoDiv.appendChild(completedbutton);

    const trashbutton = document.createElement('button');
    trashbutton.innerHTML = '<i class="fa fa-trash-o"></i>'
    trashbutton.classList.add("trash-btn");
    todoDiv.appendChild(trashbutton);

    todoList.appendChild(todoDiv);
}


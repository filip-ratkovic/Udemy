const formTodo = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

formTodo.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo()
})

const addTodo = (todo) => {
    let todoText = input.value;

    if(todo) {
        todoText = todo.text;
    }

    if(todoText) {
        const todoEL = document.createElement('li');
        if (todo && todo.completed) {
            todoEL.classList.add('completed')
        }

        todoEL.addEventListener('click', () => {
            todoEL.classList.toggle('completed')
        })

        todoEL.addEventListener( 'contextmenu', (e) => {
            e.preventDefault();
            todoEL.remove()
        })

        

        todoEL.innerText = todoText;
        todosUL.appendChild(todoEL);
        input.value='';
    }
}
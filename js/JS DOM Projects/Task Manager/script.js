// Get todos from localStorage or initialize empty array
let todos = JSON.parse(localStorage.getItem('todos') || '[]');
let currentfilter = 'all';

// Function to save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to render todos
function renderTodos() {
    const todoList = document.getElementById('task-list');
    todoList.innerHTML = '';
    const filteredTodos = todos.filter((todo) => {
        if (currentfilter === "completed") return todo.completed;
        if (currentfilter === "pending") return !todo.completed;
        return true;
    });
    filteredTodos.forEach((todo) => {
        const actualIndex = todos.indexOf(todo);
        const li = document.createElement('li');
        if (todo.completed) {
            li.classList.add("completed");
        }
        li.innerHTML = `
            <span class='task-text'>${todo.text}</span>
            <div class='task-actions'>
                <button data-index="${actualIndex}" class='action-btn complete-btn'>
                    <i class='fas ${todo.completed ? "fa-rotate-left" : "fa-check"}'></i>
                </button>
                <button data-index="${actualIndex}" class='action-btn delete-btn'>
                    <i class='fas fa-trash'></i>
                </button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

// Function to add new todo
function addTodos() {
    const input = document.getElementById('task-input');
    const text = input.value.trim();
    if (text) {
        todos.push({
            text: text,
            completed: false,
        });
    }
    input.value = "";
    saveTodos();
    renderTodos();
}

// Function to toggle todo completion
function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
}

// Function to delete todo
function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
}

// Add event listeners
document.getElementById('add-task-btn').addEventListener('click', addTodos);
document.getElementById('task-input').addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        addTodos();
    }
});

document.getElementById('task-list').addEventListener('click', function (e) {
    const target = e.target.closest('button');
    if (!target) return;
    const todoIndex = parseInt(target.dataset.index);
    if (target.classList.contains('complete-btn')) {
        toggleTodo(todoIndex);
    } else if (target.classList.contains('delete-btn')) {
        deleteTodo(todoIndex);
    }
});

// Add filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentfilter = this.getAttribute('data-filter');
        renderTodos();
    });
});

// Initial render
renderTodos();

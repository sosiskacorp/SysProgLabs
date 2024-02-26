let tasks = [];
let sortAscending = true;
let filterMode = 'all'; // Добавляем переменную для фильтрации

document.getElementById('addTaskButton').addEventListener('click', function() {
    var task = document.getElementById('taskInput').value.trim();
    if (task !== '') {
        tasks.push({
            text: task,
            completed: false,
            date: new Date(),
            editing: false
        });
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Сохраняем в localStorage
        updateTaskList();
        document.getElementById('taskInput').value = '';
    }
});

document.getElementById('clearAllButton').addEventListener('click', function() {
    tasks = [];
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Очищаем localStorage
    updateTaskList();
});

// Загрузка задач из localStorage при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    let savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        updateTaskList();
    }
});

function createTaskElement(task) {
    var li = document.createElement('li');
    li.classList.add('task-item');
    var date = task.date.toLocaleDateString('ru-RU');
    li.innerHTML = `<span class="task-date">${date}</span> <span class="task-text">${task.text}</span>`;
    li.addEventListener('click', function() {
        if (!task.editing) {
            task.completed = !task.completed;
            localStorage.setItem('tasks', JSON.stringify(tasks)); // Обновляем localStorage
            updateTaskList();
        }
    });
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Предотвращаем срабатывание события на li
        tasks = tasks.filter(t => t.text !== task.text);
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Обновляем localStorage
        updateTaskList();
    });
    li.appendChild(deleteButton);
    return li;
}

function updateTaskList() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    let filteredTasks = tasks.filter(task => {
        if (filterMode === 'all') return true;
        if (filterMode === 'completed') return task.completed;
        if (filterMode === 'active') return !task.completed;
    });
    filteredTasks.forEach(task => {
        var li = createTaskElement(task);
        if (task.completed) {
            li.classList.add('completed');
        }
        taskList.appendChild(li);
    });
    checkTaskList();
}

function checkTaskList() {
    var taskList = document.getElementById('taskList');
    var noTasksMessage = document.querySelector('.no-tasks-message');
    var completedTasks = tasks.filter(task => task.completed).length;
    var remainingTasks = tasks.length - completedTasks;
    
    if (taskList.children.length ===  0) {
        noTasksMessage.style.display = 'block';
    } else {
        noTasksMessage.style.display = 'none';
    }
    
    document.getElementById('completedTasksCount').textContent = completedTasks;
    document.getElementById('remainingTasksCount').textContent = remainingTasks;
}

// Функции для сортировки
function sortByDate() {
    sortAscending ? tasks.sort((a, b) => a.date - b.date) : tasks.sort((a, b) => b.date - a.date);
    sortAscending = !sortAscending;
    updateTaskList();
}

function sortByText() {
    sortAscending ? tasks.sort((a, b) => a.text.localeCompare(b.text)) : tasks.sort((a, b) => b.text.localeCompare(a.text));
    sortAscending = !sortAscending;
    updateTaskList();
}

// Функции для фильтрации
function setFilterMode(mode) {
    filterMode = mode;
    updateTaskList();
}

// Добавляем ссылки для фильтрации
document.getElementById('app').insertAdjacentHTML('beforeend', `
    <div class="filter-links">
        <a href="#" onclick="setFilterMode('all')">Все</a>
        <a href="#" onclick="setFilterMode('completed')">Сделанные</a>
        <a href="#" onclick="setFilterMode('active')">Не сделанные</a>
    </div>
`);

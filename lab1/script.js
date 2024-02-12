let tasks = [];
let sortAscending = true;

document.getElementById('addTaskButton').addEventListener('click', function() {
    var task = document.getElementById('taskInput').value;
    if (task.trim() !== '') {
        var li = createTaskElement(task);
        tasks.push({
            text: task,
            completed: false,
            date: new Date()
        });
        updateTaskList();
        document.getElementById('taskInput').value = '';
    }
});

document.getElementById('clearAllButton').addEventListener('click', function() {
    document.getElementById('taskList').innerHTML = '';
    tasks = [];
    updateTaskList();
});

function createTaskElement(taskText) {
    var li = document.createElement('li');
    var date = new Date().toLocaleDateString('ru-RU');
    li.innerHTML = `<span class="task-date">${date}</span> ${taskText}`;
    li.addEventListener('click', function() {
        tasks.forEach((task, index) => {
            if (task.text === taskText) {
                tasks[index].completed = !tasks[index].completed;
            }
        });
        updateTaskList();
    });
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function() {
        tasks = tasks.filter(task => task.text !== taskText);
        this.parentElement.remove();
        updateTaskList();
    });
    li.appendChild(deleteButton);
    return li;
}

function updateTaskList() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        var li = createTaskElement(task.text);
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
    
    if (taskList.children.length === 0) {
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

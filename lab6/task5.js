var _a;
var tasks = [];
var sortAscending = true;
var filterMode = 'all';
var addTaskButton = document.getElementById('addTaskButton');
var taskInput = document.getElementById('taskInput');
var clearAllButton = document.getElementById('clearAllButton');
addTaskButton.addEventListener('click', function () {
    var task = taskInput.value.trim();
    if (task !== '') {
        tasks.push({
            text: task,
            completed: false,
            date: new Date(),
            editing: false,
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        updateTaskList();
        taskInput.value = '';
    }
});
clearAllButton.addEventListener('click', function () {
    tasks = [];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateTaskList();
});
document.addEventListener('DOMContentLoaded', function () {
    var savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        updateTaskList();
    }
});
function createTaskElement(task) {
    var li = document.createElement('li');
    li.classList.add('task-item');
    var date = task.date.toLocaleDateString('ru-RU');
    li.innerHTML = "<span class=\"task-date\">".concat(date, "</span> <span class=\"task-text\">").concat(task.text, "</span>");
    li.addEventListener('click', function () {
        if (!task.editing) {
            task.completed = !task.completed;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            updateTaskList();
        }
    });
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function (e) {
        e.stopPropagation();
        tasks = tasks.filter(function (t) { return t.text !== task.text; });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        updateTaskList();
    });
    li.appendChild(deleteButton);
    return li;
}
function updateTaskList() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    var filteredTasks = tasks.filter(function (task) {
        if (filterMode === 'all')
            return true;
        if (filterMode === 'completed')
            return task.completed;
        if (filterMode === 'active')
            return !task.completed;
    });
    filteredTasks.forEach(function (task) {
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
    var completedTasks = tasks.filter(function (task) { return task.completed; }).length;
    var remainingTasks = tasks.length - completedTasks;
    if (taskList.children.length === 0) {
        noTasksMessage.style.display = 'block';
    }
    else {
        noTasksMessage.style.display = 'none';
    }
    var completedTasksCount = document.getElementById('completedTasksCount');
    var remainingTasksCount = document.getElementById('remainingTasksCount');
    completedTasksCount.textContent = completedTasks.toString();
    remainingTasksCount.textContent = remainingTasks.toString();
}
function sortByDate() {
    sortAscending
        ? tasks.sort(function (a, b) { return a.date.getTime() - b.date.getTime(); })
        : tasks.sort(function (a, b) { return b.date.getTime() - a.date.getTime(); });
    sortAscending = !sortAscending;
    updateTaskList();
}
function sortByText() {
    sortAscending
        ? tasks.sort(function (a, b) { return a.text.localeCompare(b.text); })
        : tasks.sort(function (a, b) { return b.text.localeCompare(a.text); });
    sortAscending = !sortAscending;
    updateTaskList();
}
function setFilterMode(mode) {
    filterMode = mode;
    updateTaskList();
}
var filterLinks = document.createElement('div');
filterLinks.classList.add('filter-links');
filterLinks.innerHTML = "\n    <a href=\"#\" onclick=\"setFilterMode('all')\">\u0412\u0441\u0435</a>\n    <a href=\"#\" onclick=\"setFilterMode('completed')\">\u0421\u0434\u0435\u043B\u0430\u043D\u043D\u044B\u0435</a>\n    <a href=\"#\" onclick=\"setFilterMode('active')\">\u041D\u0435 \u0441\u0434\u0435\u043B\u0430\u043D\u043D\u044B\u0435</a>\n  ";
(_a = document.getElementById('app')) === null || _a === void 0 ? void 0 : _a.appendChild(filterLinks);

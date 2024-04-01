interface Task {
    text: string;
    completed: boolean;
    date: Date;
    editing: boolean;
  }
  
  let tasks: Task[] = [];
  let sortAscending: boolean = true;
  let filterMode: 'all' | 'completed' | 'active' = 'all';
  
  const addTaskButton = document.getElementById('addTaskButton') as HTMLButtonElement;
  const taskInput = document.getElementById('taskInput') as HTMLInputElement;
  const clearAllButton = document.getElementById('clearAllButton') as HTMLButtonElement;
  
  addTaskButton.addEventListener('click', function () {
    const task = taskInput.value.trim();
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
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      tasks = JSON.parse(savedTasks);
      updateTaskList();
    }
  });
  
  function createTaskElement(task: Task): HTMLLIElement {
    const li = document.createElement('li');
    li.classList.add('task-item');
    const date = task.date.toLocaleDateString('ru-RU');
    li.innerHTML = `<span class="task-date">${date}</span> <span class="task-text">${task.text}</span>`;
    li.addEventListener('click', function () {
      if (!task.editing) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        updateTaskList();
      }
    });
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function (e) {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.text !== task.text);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      updateTaskList();
    });
    li.appendChild(deleteButton);
    return li;
  }
  
  function updateTaskList() {
    const taskList = document.getElementById('taskList') as HTMLUListElement;
    taskList.innerHTML = '';
    const filteredTasks = tasks.filter((task) => {
      if (filterMode === 'all') return true;
      if (filterMode === 'completed') return task.completed;
      if (filterMode === 'active') return !task.completed;
    });
    filteredTasks.forEach((task) => {
      const li = createTaskElement(task);
      if (task.completed) {
        li.classList.add('completed');
      }
      taskList.appendChild(li);
    });
    checkTaskList();
  }
  
  function checkTaskList() {
    const taskList = document.getElementById('taskList') as HTMLUListElement;
    const noTasksMessage = document.querySelector('.no-tasks-message') as HTMLDivElement;
    const completedTasks = tasks.filter((task) => task.completed).length;
    const remainingTasks = tasks.length - completedTasks;
  
    if (taskList.children.length === 0) {
      noTasksMessage.style.display = 'block';
    } else {
      noTasksMessage.style.display = 'none';
    }
  
    const completedTasksCount = document.getElementById('completedTasksCount') as HTMLSpanElement;
    const remainingTasksCount = document.getElementById('remainingTasksCount') as HTMLSpanElement;
    completedTasksCount.textContent = completedTasks.toString();
    remainingTasksCount.textContent = remainingTasks.toString();
  }
  
  function sortByDate() {
    sortAscending
      ? tasks.sort((a, b) => a.date.getTime() - b.date.getTime())
      : tasks.sort((a, b) => b.date.getTime() - a.date.getTime());
    sortAscending = !sortAscending;
    updateTaskList();
  }
  
  function sortByText() {
    sortAscending
      ? tasks.sort((a, b) => a.text.localeCompare(b.text))
      : tasks.sort((a, b) => b.text.localeCompare(a.text));
    sortAscending = !sortAscending;
    updateTaskList();
  }
  
  function setFilterMode(mode: 'all' | 'completed' | 'active') {
    filterMode = mode;
    updateTaskList();
  }
  
  const filterLinks = document.createElement('div');
  filterLinks.classList.add('filter-links');
  filterLinks.innerHTML = `
    <a href="#" onclick="setFilterMode('all')">Все</a>
    <a href="#" onclick="setFilterMode('completed')">Сделанные</a>
    <a href="#" onclick="setFilterMode('active')">Не сделанные</a>
  `;
  document.getElementById('app')?.appendChild(filterLinks);

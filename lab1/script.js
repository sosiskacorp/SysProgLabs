document.getElementById('addTaskButton').addEventListener('click', function() {
    var task = document.getElementById('taskInput').value;
    var li = document.createElement('li');
    li.textContent = task;
    li.addEventListener('click', function() {
        this.classList.toggle('completed');
    });
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function() {
        this.parentElement.remove();
    });
    li.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(li);
    document.getElementById('taskInput').value = '';
});

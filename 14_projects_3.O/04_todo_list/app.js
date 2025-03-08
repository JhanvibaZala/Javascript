const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    // creates a new list item
    if(taskInput.value === '') {
        alert('Please enter the task!');
        return;
    }

    // create a new list item
    const li = document.createElement('li');
    li.innerHTML = `${taskInput.value}
    <button onclick="deleteTask(this)">Delete</button>
    <button class="edit" onclick="editTask(this)">Edit</button>`;
    taskList.appendChild(li);

    // saves to local storage
    saveTasks();

    // clear input
    taskInput.value = '';
}

// delete task function
function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

// edit task function 
function editTask(button){
    const newTask = prompt('Edit your task : ',button.parentElement.firstChild.textContent.trim())
    if(newTask !== null) {
        button.parentElement.firstChild.textContent = newTask + ' ';
        saveTasks();
    }
}

// save task to local storage
function saveTasks() {
    localStorage.setItem('tasks',taskList.innerHTML)
}

// clears tasks from local storage 
function clearAllTasks() {
    taskList.innerHTML = '';
    saveTasks();
}

// loads task to local storage
function loadTasks() {
    taskList.innerHTML = localStorage.getItem('tasks') || '';
}

loadTasks();
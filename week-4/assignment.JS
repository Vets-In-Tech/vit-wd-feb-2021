// Create a "task" and append it to each list item
let taskInput = document.getElementById("new-task");
let addButton = document.getElementById("addButton");
let incompleteTasks = document.getElementById("incomplete-tasks");
let completedTasks = document.getElementById("completed-tasks");
let clearButton = document.getElementById("clear");
let createNewTask = function(taskName) {
    let listItem = document.createElement("li");
    let checkBox = document.createElement("input");
    let label = document.createElement("label");
    let editInput = document.createElement("input");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    checkBox.type = "checkBox";
    editInput.type = "text";
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    label.innerText = taskName;
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}
let addTask = function() {
    if (taskInput.value == "") {
        alert("Task added should not be empty!");
        return;
    }
    let listItem = createNewTask(taskInput.value);
    incompleteTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";
}

let editTask = function() {

    let listItem = this.parentNode;
    let editInput = listItem.querySelector("input[type=text]");
    let label = listItem.querySelector("label");
    let containsClass = listItem.classList.contains("editMode");
    if (containsClass) {
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }
    listItem.classList.toggle("editMode");
}
let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}
let taskCompleted = function() {
    let listItem = this.parentNode;
    completedTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

let taskIncomplete = function() {
    let listItem = this.parentNode;
    incompleteTasks.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}
addButton.addEventListener("click", addTask);
let bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    let checkBox = taskListItem.querySelector('input[type="checkbox"]');
    let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");
    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
    checkBox.onchange = checkBoxEventHandler;
}

let clear = function() {
    incompleteTasks.innerHTML = "";
    completedTasks.innerHTML = "";
}
clearButton.addEventListener('click', clear);
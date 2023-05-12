function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== '') {
        var taskItem = document.createElement("li");
        var taskText = document.createTextNode(taskInput.value);
        taskItem.appendChild(taskText);

        var completeButton = document.createElement("button");
        completeButton.innerHTML = "Complete";
        completeButton.onclick = function () {
            completeTask(taskItem);
        };
        taskItem.appendChild(completeButton);

        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function () {
            deleteTask(taskItem);
        };
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
    }

    taskInput.value = '';
}

function completeTask(taskItem) {
    var completedTaskList = document.getElementById("completedTaskList");
    taskItem.className = "completed";

    var completeButton = taskItem.getElementsByTagName("button")[0];
    completeButton.innerHTML = "Undo";
    completeButton.onclick = function () {
        undoTask(taskItem);
    };

    completedTaskList.appendChild(taskItem);
}

function deleteTask(taskItem) {
    taskItem.parentNode.removeChild(taskItem);
}

function undoTask(taskItem) {
    var taskList = document.getElementById("taskList");
    taskItem.className = "";

    var completeButton = taskItem.getElementsByTagName("button")[0];
    completeButton.innerHTML = "Complete";
    completeButton.onclick = function () {
        completeTask(taskItem);
    };

    taskList.appendChild(taskItem);
}


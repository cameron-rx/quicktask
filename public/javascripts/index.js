document.getElementById("createListButton").addEventListener("click", () => {
    document.getElementById("startDiv").setAttribute("hidden", "true");
    document.getElementById("createListDiv").removeAttribute("hidden");
});

document.getElementById("loadListButton").addEventListener("click", () => {
    document.getElementById("startDiv").setAttribute("hidden", "true");
    document.getElementById("loadListDiv").removeAttribute("hidden");
});

document.getElementById("addItemButton").addEventListener("click", addTask);

function addTask() {
    console.log("Add task");
    const task = document.getElementById("newItem").value;
    const newTask = document.createElement("div");

    console.log(task)

    const taskLabel = document.createElement('label');
    taskLabel.innerHTML = task

    const taskCheckbox = document.createElement('input');
    taskCheckbox.setAttribute("type", "checkbox");

    const taskRemoveButton = document.createElement('button');
    taskRemoveButton.innerHTML = "x";
    taskRemoveButton.addEventListener("click", () =>{
        removeTask(newTask)
    });

    newTask.appendChild(taskLabel);
    newTask.appendChild(taskCheckbox);
    newTask.appendChild(taskRemoveButton);

    document.getElementById("tasks").appendChild(newTask);

    document.getElementById("newItem").value = "";
}

function removeTask(parent) {
    parent.remove();
}

/*
TODO:
    - Function to add tasks to view
    - Function to remove tasks from view
    - Function to save tasks to database
*/
document.getElementById("createListButton").addEventListener("click", () => {
    document.getElementById("startDiv").setAttribute("hidden", "true");
    document.getElementById("createListDiv").removeAttribute("hidden");
});
document.getElementById("loadListButton").addEventListener("click", () => {
    document.getElementById("startDiv").setAttribute("hidden", "true");
    document.getElementById("loadListDiv").removeAttribute("hidden");
});
document.getElementById("startListButton").addEventListener("click", () => {
    document.getElementById("createListDiv").setAttribute("hidden", "true");
    document.getElementById("listViewDiv").removeAttribute("hidden");
    createList();
})
document.getElementById("addItemButton").addEventListener("click", addTask);
document.getElementById("saveList").addEventListener("click", updateList);


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


function createList() {
    console.log("Create")
    console.log(document.getElementById("listName").value)
    listname = document.getElementById("listName").value
    username = document.getElementById("username").value;
    document.getElementById("listNameHeader").innerHTML = listname;
    document.getElementById("usernameHeader").innerHTML = username; 
    // Retrieve username
    // Retrieve name of list
    fetch("http://localhost:3000/list", {
        method: "POST",
        body: JSON.stringify({
            user: username,
            name: listname,
            items: []
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json()).then(data => {
        console.log(data)
        document.getElementById("idHeader").innerHTML = "ID: " + data.id
    })
}

function updateList() {

}
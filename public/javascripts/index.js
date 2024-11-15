// TODO: Create toggle list function for all repeated code here
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
document.getElementById("saveListButton").addEventListener("click", updateList);


document.getElementById("deleteListButton").addEventListener("click", () => {
    const listID = document.getElementById("idHeader").innerHTML.slice(4);
    console.log(listID)
    const fetchURL = "http://localhost:3000/list/" + listID

    fetch(fetchURL, {method: 'DELETE'})

    document.getElementById("listViewDiv").setAttribute("hidden", "true");
    document.getElementById("startDiv").removeAttribute("hidden")
});

document.getElementById("findListButton").addEventListener("click", () => {
    const id = document.getElementById("listID").value;
    console.log(id)
    const fetchURL = "http://localhost:3000/list/" + id
    console.log(fetchURL)

    fetch(fetchURL).then(res => res.json()).then(data => {
        const list = data
        console.log(list)

        document.getElementById("listNameHeader").innerHTML = list.name;
        document.getElementById("usernameHeader").innerHTML = list.user
        document.getElementById("idHeader").innerHTML = "ID: " + list._id

        const items = list.items
        for (const item of items) {
            createTaskComponent(item)
        }
    }).catch(err => {
        console.log(err)
    })

    document.getElementById("loadListDiv").setAttribute("hidden", "true");
    document.getElementById("listViewDiv").removeAttribute("hidden");
})

function addTask() {
    console.log("Add task");
    const taskName = document.getElementById("newItem").value;

    const task = {
        name: taskName,
        status: false,
    }

    createTaskComponent(task)
    document.getElementById("newItem").value = "";
}


function createTaskComponent(item){
    const newTask = document.createElement("div");
    const taskLabel = document.createElement('label');
    taskLabel.innerHTML = item.name

    const taskCheckbox = document.createElement('input');
    taskCheckbox.setAttribute("type", "checkbox");

    if (item.status) {
        taskCheckbox.setAttribute("checked", "true");
    }

    const taskRemoveButton = document.createElement('button');
    taskRemoveButton.innerHTML = "x";
    taskRemoveButton.addEventListener("click", () =>{
        removeTask(newTask)
    });

    newTask.appendChild(taskLabel);
    newTask.appendChild(taskCheckbox);
    newTask.appendChild(taskRemoveButton);

    document.getElementById("tasks").appendChild(newTask);
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
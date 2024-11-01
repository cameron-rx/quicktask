document.getElementById("createListButton").addEventListener("click", () => {
    document.getElementById("startDiv").setAttribute("hidden", "true");
    document.getElementById("createListDiv").removeAttribute("hidden");
});

document.getElementById("loadListButton").addEventListener("click", () => {
    document.getElementById("startDiv").setAttribute("hidden", "true");
    document.getElementById("loadListDiv").removeAttribute("hidden");
});
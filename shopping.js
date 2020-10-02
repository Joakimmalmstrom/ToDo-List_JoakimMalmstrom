const addButton = document.getElementById("my-addButton");
const removeButton = document.getElementById("my-removeButton");
const list = document.getElementById("my-list");

addButton.addEventListener("click", function () {

    removeButton.classList.remove("d-none");

    const userInput = document.getElementById("my-input").value;

    let btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "list-group-item list-group-item-action");

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "mr-2 checkboxes");

    let text = document.createTextNode(userInput);
    btn.appendChild(check);
    btn.appendChild(text);
    list.appendChild(btn);
});

removeButton.addEventListener("click", function () {

    // Checks for all checked Checkboxes
    let check = document.querySelectorAll("[type=checkbox]");
    check.forEach(c => {

        // if it's checked - remove c's parent
        if (c.checked) {
            list.removeChild(c.parentNode);
        } 
    });

    // If there's no elements in the list - hide remove button
    if (list.childElementCount <= 1)
    {
        removeButton.classList.add("d-none");
    }
});

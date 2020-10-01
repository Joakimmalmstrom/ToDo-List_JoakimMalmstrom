const addButton = document.getElementById("my-addButton");
const removeButton = document.getElementById("my-removeButton");
const list = document.getElementById("my-list");
// document.querySelector("click")

console.log(addButton);
console.log(removeButton);
console.log(list);

addButton.addEventListener("click", function () {

    const userInput = document.getElementById("my-input").value;

    let btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "list-group-item list-group-item-action");

    let text = document.createTextNode(userInput);
    btn.appendChild(text);
    list.appendChild(btn);
});

removeButton.addEventListener("click", function () {

    selectBox.remove(selectBox.selectedIndex);
});


// BUTTON CLICK

// const button = document.getElementById("buttonID");

// button.addEventListener("click", function() {

//     const review = document.getElementById("review");

//     if (review.classList.contains("d-none"))
//     {
//         review.classList.remove("d-none");
//         button.textContent = "Close Review";
//     }
//     else
//     {
//         review.classList.add("d-none");
//         button.textContent = "Open Review";
//     }
// });
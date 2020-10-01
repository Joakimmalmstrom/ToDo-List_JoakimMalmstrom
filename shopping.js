const submitButton = document.getElementById("my-submit");
const removeButton = document.getElementById("my-remove");
const selectBox = document.getElementById("my-select");
const selected = document.getElementById("my-select").selectedIndex;

submitButton.addEventListener("click", function () {

    const userInput = document.getElementById("my-input").value;

    // Create option element
    let opt = document.createElement("option");
    opt.setAttribute("value", "product");
    // Create text node with the user input || Assign text to option element
    let input = document.createTextNode(userInput);
    opt.appendChild(input);
    // Add the option element to the select box
    selectBox.appendChild(opt);
});

removeButton.addEventListener("click", function () {

    selectBox.remove(selectBox.selectedIndex);
});

selectBox.addEventListener("click", function () {
    console.log("Clicked");

    // var options = selectBox.querySelectorAll("option");
    //     options.backgroundColor = "red";
    //     console.log("Selected Index: " + options.values);
    //     console.log("Options Length: " + options.length);
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
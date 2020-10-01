const submitButton = document.getElementById("my-submit");
const selectBox = document.getElementById("my-select");

submitButton.addEventListener("click", function() {

    const userInput = document.getElementById("product").value;

    // Create option element
    let opt = document.createElement("option");
    opt.setAttribute("value", "input-product");
    // Create text node with the user input || Assign text to option element
    let input = document.createTextNode(userInput);
    opt.appendChild(input);
    // Add the option element to the select box
    selectBox.appendChild(opt);
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
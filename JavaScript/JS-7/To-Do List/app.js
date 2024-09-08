let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete"
    delBtn.classList.add("delete");

    // Append the delete button to the newly created list item
    item.appendChild(delBtn)
    // Append the new list item (with delete button)to the ul element
    ul.appendChild(item)
    // Clear the input field after the item is added
    inp.value = "";
})

// for deleting the task
ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("remove");
    }
})
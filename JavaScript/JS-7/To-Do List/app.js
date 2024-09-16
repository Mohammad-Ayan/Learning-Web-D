// To Do List Using DOM
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;  

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete"
    delBtn.classList.add("delete");

    item.appendChild(delBtn) // Append the delete button to the newly created list item
     
    ul.appendChild(item) // Append the new list item (with delete button)to the ul element
    
    inp.value = "";  // Clear the input field after the item is added
})

//--- for deleting the task
ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {    // event.target : tell us which one triggered
        let listItem = event.target.parentElement;
        listItem.remove();      // this will delete the item
        console.log("remove");
    }
})
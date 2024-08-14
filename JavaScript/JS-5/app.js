//----------------Get Elemnt by Class Name-----------------

let smallImages = document.getElementsByClassName("oldimg");

for (let i = 0; i < smallImages.length; i++) {
    console.log(smallImages[i]);

}
//  --------------QUERY SELECTOR-----------

document.querySelector('p');  //Selects first p element
document.querySelector('#myId');  //Selects first element with id = myId
document.querySelector('myClass');  //Selects first element with class = myClass

document.querySelectorAll("p"); //Selects all p elements

// ------------style Attributes-----------

let links = document.querySelectorAll(".box ");


for (link of links) {
    links.style.color = "yellow"; // inline style
}

//OR

// for(let i=0; i<links.length; i++){
//     links[i].style.color = "yellow";
// }

// ------------Prac Ques------------

let para1 = document.createElement("p");
para1.innerText = "Hey I'm red para";
document.querySelector("body").append(para1);

para1.classList.add("red");


let h3 = document.createElement("h3");
h3.innerText = "Hey I'm blue h3";
document.querySelector("body").append(h3);

h3.classList.add("blue");

 
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "Hey I'm in a div";
para2.innerText = "MEE TOO!";

div.append(h1);
div.append(para2);
div.classList.add("box");

document.querySelector("body").append(div);

//-----------------------------Assignment Ques-----------------------

//Qs 1. Create a new input and button element on the page using JavaScript only.
// Set the text of button to "Click me

let inputElement = document.createElement("input");
// inputElement.type = "text";
let buttonElement = document.createElement("button");
buttonElement.innerText = "Click me";

document.querySelector("body").append(inputElement);
document.querySelector("body").append(buttonElement);


// Qs2. Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn'

let input = document.createElement("input");
input.type = "text";
input.placeholder = "username"

let button = document.createElement("button");
button.innerText = "Click me";
button.id = "btn";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

//OR
buttonElement.setAttribute("id", "btn");
inputElement.setAttribute("placeholder", "username (by Apna Collge)");

// Qs3. Access the btn using the querySelector and button id.
//  Change the button background color to blue and text color to white.


let btn = document.querySelector("#btn");
btn.classList.add("btnStyle")

// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. 
// Change its color to purple.

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>"

document.querySelector("body").append(h1);
    
// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
// where Delta is bold.

let p = createElement("p");
p.innerText = "Apna College <b>Delta</b> Practice"

document.querySelector("body").append(p);


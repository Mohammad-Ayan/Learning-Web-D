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
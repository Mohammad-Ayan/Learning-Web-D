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

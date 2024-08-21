//let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("You hover over the Button");
//     };
// }

// function sayHello() {
//     alert("Hello")
// }

// ---Event Listeners---

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayGreet);
//     btn.addEventListener("dblclick", function () {
//         console.log("You clicled twice");
//     });
// }

// function sayHello() {
//     alert("Hello")
// }

// function sayGreet() {
//     alert("Assalamualikum")
// }

// // ---Event Listeners for Elements---

// let p = document.querySelector("p");

// p.addEventListener("click", function () {
//     console.log("para was clicked");

// })

// let box = document.querySelector(".box");

// box.addEventListener("mouseenter", function () {
//     console.log("You hovered over it");

// })

// //---------- This in Event Listeners ---------

// let btn = document.querySelector("button");

// function changeColor() {
//      console.dir(this);
//     this.style.backgroundColor = "blue"
// }

// btn.addEventListener("click",changeColor);

// p.addEventListener("click",changeColor);

// box.addEventListener("click",changeColor);

// //-----to select all the buttons-----

// let btns = document.querySelectorAll("button");

// btns.forEach(function(btn) {
//     btn.addEventListener("click", function () {
//         console.dir(this);
//         this.style.backgroundColor = "red";
//     });
// });

//-------KeyBoard Events---------

let inp = document.querySelector("input");

// inp.addEventListener("keydown", function () {
//     console.log("Key was clicked");
// });

// inp.addEventListener("keyup", function () {
//     console.log("Key was released");
// });

inp.addEventListener("keydown", function (event) {
    console.log(event.key);
    console.log(event.code);

    console.log("Key was clicked");
});
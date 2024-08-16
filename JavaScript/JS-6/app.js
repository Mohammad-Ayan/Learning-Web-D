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

let btns = document.querySelectorAll("button");

for (btn of btns) {
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayGreet);
    btn.addEventListener("dblclick", function () {
        console.log("You clicled twice");
    });
}

function sayHello() {
    alert("Hello")
}

function sayGreet() {
    alert("Assalamualikum")
}
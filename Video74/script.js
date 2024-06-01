// --List_of_All_MouseEvents----->https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

let buttton = document.getElementById("btn")

buttton.addEventListener("mouseover", ()=>{
    document.querySelector(".box").innerHTML = 
    "<b>Yay you are also clicked!! Enjoy</b>"
})
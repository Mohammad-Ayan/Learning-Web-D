const hackingElements = document.querySelectorAll('.hacking');

function blinkText() {
  hackingElements.forEach(element => element.classList.toggle('blink'));
}

setInterval(blinkText, 500);
function printHello(event) {
    console.log("Hello!");
    console.log(event);
}
function printSalam() {
    console.log("Assalamualikum!");
}

export default function Button() {
    return (
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onMouseOver={printSalam}>this para is for the event demo</p>
        </div>)
}
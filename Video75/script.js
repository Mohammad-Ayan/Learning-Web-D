console.log("Harry is Hacker")
console.log("Brad is Hecker")

setTimeout(() => {
    console.log("I am SetTimeOut 1")
}, 0);
setTimeout(() => {
    console.log("I am SetTimeOut 2")
}, 0);

console.log("The End")
//---------------------------------Callback-----------------------------------

const callback = (arg) =>{
    console.log(arg)
}
const loadScript = (src, callback) => {
  let sc = document.createElement("script")
  sc.src = src;
  sc.onload = callback("Harry");
document.head.append(sc)
  }
  loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

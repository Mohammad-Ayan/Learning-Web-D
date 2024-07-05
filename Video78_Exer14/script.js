const addItem = async (item)=>{
  
}

const randomDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 6 * Math.random()
    setTimeout(() => {
      resolve()
    }, timeout * 2000);
  })
}

let text = ["Initializing Hacking",
  "Reading your Files",
  "Password files Detected",
  "Sending all passwords and Personal files to server",
  "Cleaning up"]

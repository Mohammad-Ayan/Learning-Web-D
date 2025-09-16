const mongoose = require('mongoose');
const Chat = require('./models/chats.js');

main().then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
    console.log("Connection Successful");
}

let chats = [
    { from: "Alice", to: "Bob", msg: "Hello Bob! This is Alice.", createdAt: new Date() },
    { from: "Bob", to: "Alice", msg: "Hi Alice! How are you?" },
    { from: "Alice", to: "Bob", msg: "I'm good, thanks! What about you?" },
    { from: "Bob", to: "Alice", msg: "Doing well! Just working on some projects." },
    { from: "Alice", to: "Bob", msg: "That's great to hear! Let's catch up later." },
];

Chat.insertMany(chats)
    .then((res) => { console.log("Chats Inserted:", res); })
    .catch((err) => { console.log(err); });

const e = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    const user1 = new User({
        username: "jane_doe",
        email: "jsne@gmail.com"
    });
    let post1 = new Post({
        content: "Hello World!",
        likes: 10,
    });
    post1.user = user1;
    let post2 = new Post({
        content: "My second post",
        likes: 15,
    });
    post2.user = user1;

    let resultUser = await user1.save();
    let resultPost = await post1.save();
    resultPost = await post2.save();
    console.log(resultUser);
    console.log(resultPost);
    
}

addData(); 
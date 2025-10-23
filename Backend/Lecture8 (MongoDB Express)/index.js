const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chats.js');
const methodOverride = require('method-override');
const ExpressError = require('./ExpressError.js');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

main().then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//Index Route
app.get("/chats", async (req, res) => {
    try {
        const chats = await Chat.find({});
        res.render("index.ejs", { chats });
    } catch (err) {
        next(err);
    }
});

// New Chat Route
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "Page Not Found");
    res.render("new.ejs");
});

// Create Chat Route
app.post("/chats", wrapAsync(async (req, res, next) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        createdAt: new Date(),
    });
    await newChat
        .save()
    res.redirect("/chats");
}));

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(err = next(err));
    };
}

// New - Show Route
app.get("/chats/:id", wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        return next(new ExpressError(404, "Chat Not Found"));
    }
    res.render("edit.ejs", { chat });
}));

// Edit Route
app.get("/chats/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
}));

//Update Route
app.put("/chats/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    console.log(newMsg);

    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { msg: newMsg },
        { runValidators: true, new: true }
    );

    console.log("Updated Chat:", updatedChat);
    res.redirect("/chats");
}));

//Delete Route
app.delete("/chats/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
}));

app.get("/", (req, res) => {
    res.send("Root, Hello World from Express");
});

// Handle Validation Error
const handleValidationError = (err) => {
    console.log("This is a Validation Error, please follow the rules.");
    console.dir(err.message);
    return err;
}

// Middleware to handle specific errors
app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === 'ValidationError') {
        err = handleValidationError(err);
    }
    next(err);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
});

app.listen(8080, () => {
    console.log("Server started at port 8080");
});
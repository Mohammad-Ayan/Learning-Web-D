const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Corrected static middleware
app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    { id: uuidv4(), username: 'Mohd Ayan', content: 'I love Coding!' },
    { id: uuidv4(), username: 'Nida Fatima', content: 'Hard work is important to achieve success' },
    { id: uuidv4(), username: 'Mohd Hussain', content: 'I got selected for my 1 Internship!' }
];

app.get('/posts', (req, res) => {
    res.render("index.ejs", { posts });
});

app.get('/posts/new', (req, res) => {
    res.render("new.ejs");
});

app.post('/posts', (req, res) => {
    const { username, content } = req.body;
    let id = uuidv4();
    const newPost = {
        id,
        username,
        content
    };
    posts.push(newPost);
    res.redirect('/posts');
});

app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find(p => id === p.id);
    console.log(`Post with id ${id} is being requested`);
    if (post) {
        res.render("show.ejs", { post });
    } else {
        res.status(404).send("Post not found");
    }
});

app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    console.log(`Update request for post with id ${id}`);
    let newContent = req.body.content;
    let post = posts.find(p => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect('/posts');
});  

app.get('/posts/:id/edit', (req, res) => {
    let { id } = req.params;
    console.log(`Edit request for post with id ${id}`);
    let post = posts.find(p => id === p.id);
    if (post) {
        res.render("edit.ejs", { post });
    } else {
        res.status(404).send("Post not found");
    }
});

app.delete('/posts/:id', (req, res) => {
    let { id } = req.params;
    console.log(`Delete request for post with id ${id}`);
    posts = posts.filter(p => p.id !== id);
    res.redirect('/posts');
}); 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
      
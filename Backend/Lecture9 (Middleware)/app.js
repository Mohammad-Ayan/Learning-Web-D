const express = require('express');
const app = express();

// app.use((req, res, next) => {
//     console.log('Middleware 1 executed');
//     // res.send('Response from Middleware 1');
//     next(); 
// });

// app.use((req, res, next) => {
//     console.log('Middleware 2 executed');
//     // res.send('Response from Middleware 2');
//     next();
// });

const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === 'giveaccess') {
        next();
    } else {
        res.send('ACCESS DENIED');
    }
};

app.get('/api', checkToken, (req, res) => {
    res.send('Data');
});

// Logger - morgan
app.use((req, res, next) => {
    req.time = Date.now();
    console.log(req.method, req.hostname, req.path, req.time, req.url);
    next();
});

app.use('/random', checkToken , (req, res, next) => {
    console.log('This is only for /random route');
});

app.use((req, res) => {
    res.send('Page not found 404');
});

app.get('/', (req, res) => {
    res.send('This is root');
    console.log('Response sent for root route');
});

app.get('/random', (req, res) => {
    res.send('This is random');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
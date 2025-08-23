const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const methodOverride = require('method-override');


app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'test_db',
//     password: 'test@1234',
// });

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

// Home Route
app.get('/', (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result[0]);
            res.send(result[0]);
        });

    } catch (err) {
        console.error(err);
        res.send("some error in db");
    }
})

//Show Route
app.get("/user", (req, res) => {
    res.send("success");
    let q = `SELECT * FROM USER`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });

    } catch (err) {
        console.error(err);
        res.send("some error in DB");
    }
});


// Edit Route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render(edit.ejs, { user });
        });

    } catch (err) {
        console.error(err);
    };
    console.console.log(id);
    res.render(edit.ejs);
});

// Update (DB) Route
app.patch("/user/:id", (req, res) => {

    let { id } = req.params;
    let { password: formPass, username: newUsername } = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;

    try {
        connection.query(q, [data], (err, result) => {
            if (err) throw err;
            let user = result[0];
            if(formPass != user.password){
                res.send("Password Incorrect");
            }else{
            let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`; 
            connection.query(updateQ, (err, result) => {
                if (err) throw err;
                res.redirect("/user");
            })
            }
           
        });
    } catch (err) {
        console.error(err);
    };

    connection.end();
});

// Create Route
app.post('/user', (req, res) => {
    let data = getRandomUser();
    let q = `INSERT INTO user (id, username, email, password) VALUES (?)`;

    try {
        connection.query(q, [data], (err, result) => {
            if (err) throw err;
            console.log(result);
            res.redirect('/user');
        });

    } catch (err) {
        console.error(err);
        res.send("some error in db");
    }
});

// Delete Route
app.delete('/user/:id', (req, res) => {
    let { id } = req.params;
    let q = `DELETE FROM user WHERE id = '${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.redirect('/user');
        });

    } catch (err) {
        console.error(err);
        res.send("some error in db");
    }
});


app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

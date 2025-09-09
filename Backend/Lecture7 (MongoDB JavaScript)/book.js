const mongoose = require('mongoose');


main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) =>
        console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test_db");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
    }, 
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
        default: 10,
    }
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Gone Girl",
    author: "Sara",
    price: "499",
});

book1
.save()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

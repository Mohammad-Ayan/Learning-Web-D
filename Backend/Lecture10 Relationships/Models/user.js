const mongoose = require("mongoose");
const { Schema } = mongoose;

main().then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new mongoose.Schema({
    username: String,
    addresses: [
        {
            location: String,
            city: String,
            country: String
        }
    ]
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
    const u1 = new User({
        username: "john_doe",
        addresses: [
            {
                location: "123 Main St",
                city: "New York",
                country: "USA"
            },
            {
                location: "456 Maple Ave",
                city: "Los Angeles",
                country: "USA"
            }
        ]
    });
    let result = await u1.save();
    console.log(result);
}
addUsers();

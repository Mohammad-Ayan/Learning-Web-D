const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("Connection Successful");
    return createUser();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.disconnect();
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test_db");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

async function createUser() {
  const user = new User({
    name: "Ayan",
    email: "ayan@example.com",
    age: 22
  });

  const savedUser = await user.save();
  console.log("User Saved:", savedUser);
}

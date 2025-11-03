const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
.then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}


const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
});

// Schema.pre("findOneAndDelete", async function(next) {
//     console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete", async function(customer) {
if (customer.orders.length) {
    let result = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(result);
}
});


const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
    const c1 = new Customer({
        name: "Alice",
    });

    let order1 = await Order.findOne({ item: "Laptop"});
    let order2 = await Order.findOne({ item: "Phone"});

    c1.orders.push(order1);
    c1.orders.push(order2);

    let result = await c1.save();
    console.log(result);
}; 

// addCustomer();

const deleteCustomer = async () => {
    let result = await Customer.findByIdAndDelete('6907a3338950481a1097a5cb');
    console.log(result);
};

deleteCustomer();
    

// const addOrders = async () => {
//     let res = await Order.insertMany([
//         { item: "Laptop", price: 1200 },
//         { item: "Phone", price: 800 },
//         { item: "Tablet", price: 600 }
//     ]);
//     console.log(res);
// };

// addOrders();
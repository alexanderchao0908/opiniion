const mongoose = require("mongoose");
const toObjectId = mongoose.Types.ObjectId;

const customer = new mongoose.Schema({
    customerId: {
        type: String
    },
    locationId: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    createdDate: {
        type: String
    }
});


const Customer = mongoose.model("Customer", customer);
module.exports = Customer;

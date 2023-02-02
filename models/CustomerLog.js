const mongoose = require("mongoose");
const toObjectId = mongoose.Types.ObjectId;

const customerLogsSchema = new mongoose.Schema({
    customerId: {
        type: String
    },
    type: {
        type: String
    },
    text: {
        type: String
    },
    date: {
        type: String
    }
});


const CustomerLog = mongoose.model("CustomerLog", customerLogsSchema);
module.exports = CustomerLog;

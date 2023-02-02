const mongoose = require("mongoose");
const toObjectId = mongoose.Types.ObjectId;

const locationSchema = new mongoose.Schema({
  location_id: {
    type: String,
  },
  name: {
    type: String,
  },
  createdDate: {
    type: String,
  },
});


const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
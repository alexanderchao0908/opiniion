const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const mongoUrl = "mongodb://localhost:27017/opinion";
const Location = require("./models/Location");
const Customer = require("./models/Customer");
const CustomerLog = require("./models/CustomerLog");



mongoose.connect(mongoUrl, err => {
  if (err) throw err;
  console.log("Mongodb connected...");
});


app.post("/oppinionTest", async (req, res) => {

  const {locationId, start_date, end_date} = req.query;  
  let temp = await Customer.aggregate([
    {
      $match: {
        locationId: locationId,
      },
    },    
    {
      $lookup:{
        from: 'locations',
        localField: 'locationId',
        foreignField: 'locationId', 
        as: 'locations',
      }
    },
    {
      $lookup:{
        from: 'customerlogs',
        localField: 'customerId',
        foreignField: 'customerId', 
        as: 'customerLogs',
      }
    },
    {
      $match: {
        "customerLogs.date": { "$gte": start_date, "$lte": end_date },
      },
    }
  ]);

  res.json({ temp })
});


const port =  5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
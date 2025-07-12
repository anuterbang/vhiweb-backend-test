const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
});

module.exports = mongoose.model("Vendor", vendorSchema);

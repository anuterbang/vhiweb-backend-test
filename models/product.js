// models/product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_id: {
        type: Number,
        unique: true
    },
    name: String,
    price: Number,
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor" },
});

module.exports = mongoose.model("product", productSchema);

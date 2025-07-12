const Product = require("../models/product");
const Counter = require("../models/counter");

// CREATE
exports.createProduct = async (req, res) => {
    try {
        const counter = await Counter.findOneAndUpdate(
            { name: "product" },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );

        const product = new Product({
            product_id: counter.seq,
            name: req.body.name,
            price: req.body.price,
            vendor: req.body.vendor,
        });

        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ message: "Gagal menambahkan produk", error: err.message });
    }
};

// READ by Vendor
exports.getProductsByVendor = async (req, res) => {
    try {
        const products = await Product.find({}, "-_id -__v").populate("vendor", "-_id -__v");
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE
exports.updateProduct = async (req, res) => {
    try {
        const updated = await Product.findOneAndUpdate(
            { product_id: req.params.product_id },
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE
exports.deleteProduct = async (req, res) => {
    try {
        await Product.findOneAndDelete({ product_id: req.params.product_id });
        res.json({ message: "Produk berhasil dihapus" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

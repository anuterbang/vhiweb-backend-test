const Vendor = require("../models/vendor");
const Counter = require("../models/counter");

exports.registerVendor = async (req, res) => {
    try {
        const counter = await Counter.findOneAndUpdate(
            { name: "vendor" },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );

        const vendor = new Vendor({
            vendorId: counter.seq,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        });

        await vendor.save();
        res.status(201).json(vendor);
    } catch (err) {
        res.status(500).json({ message: "Gagal mendaftarkan vendor", error: err.message });
    }
};

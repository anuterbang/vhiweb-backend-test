console.log("✅ vendorRoutes loaded");

const express = require("express");
const router = express.Router();
const { registerVendor } = require("../controllers/vendorController");

router.post("/register", registerVendor);

module.exports = router;

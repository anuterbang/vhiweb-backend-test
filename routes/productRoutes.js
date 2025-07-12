const express = require("express");
const router = express.Router();
const {
    createProduct,
    getProductsByVendor,
    updateProduct,
    deleteProduct
} = require("../controllers/productController");

router.post("/", createProduct);
router.get("/", getProductsByVendor);
router.put("/:product_id", updateProduct);
router.delete("/:product_id", deleteProduct);

module.exports = router;

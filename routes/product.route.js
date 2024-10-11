const express = require("express")
const router = express.Router();
const Product = require("../models/product.model.js")
const {getProducts,createProduct,deleteProduct,getProductbyId,updateProduct} = require("../controllers/product.controller.js")

// router.get("/", async (req, res) => {
//     try {
//       const product = await Product.find({});
//       res.status(200).json(product);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });
router.get("/", getProducts)
router.get("/:id",getProductbyId)
router.post("/:id", createProduct)
router.put("/:id",updateProduct)
router.put("/:id",deleteProduct)

  //Update Product
module.exports = router  
 
  
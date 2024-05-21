import express from "express";
import { ProductController } from "../controllers/productController"; // Correct import path

const router = express.Router();

router.post("/", ProductController.createProduct); //
router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProductById);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);
router.get("/products", ProductController.searchProducts);

export const ProductRouter = router;

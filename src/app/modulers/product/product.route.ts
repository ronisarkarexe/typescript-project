import express from "express";
import { createProduct, getAllProductData } from "./product.controller";
const router = express.Router();

router.get('/allProduct', getAllProductData)
router.post('/create', createProduct)

export default router;
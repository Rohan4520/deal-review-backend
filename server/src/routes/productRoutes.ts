import express from "express";
import { addProduct, getProducts } from "../controllers/productController";
import upload from "../middleware/upload";

const router = express.Router();

router.get("/", getProducts);
router.post("/", upload.array("images", 4), addProduct);

export default router;

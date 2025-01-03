import { Router } from "express";
import { ProductController } from "../controllers/ProductController.js";

const router = Router();
const productController = new ProductController();
router.get("/products", (req, res) => productController.index(req, res));
router.get("/products/new", (req, res) => res.render("products/new"));

router.post("/products", (req, res) => productController.create(req, res));

export default router;

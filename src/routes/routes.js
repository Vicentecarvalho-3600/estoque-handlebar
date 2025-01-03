import { Router } from "express";
import { ProductController } from "../controllers/ProductController.js";

const router = Router();
const productController = new ProductController();
router.get("/products", (req, res) => productController.index(req, res));
router.get("/products/new", (req, res) => res.render("products/new"));
router.get("/products/:id", (req, res) => productController.show(req, res));
router.get("/products/:id/edit", (req, res) =>
  productController.edit(req, res)
);

router.post("/products", (req, res) => productController.create(req, res));
router.post("/products/:id", (req, res) => productController.update(req, res));
router.post("/products/:id/del", (req, res) =>
  productController.delete(req, res)
);

export default router;

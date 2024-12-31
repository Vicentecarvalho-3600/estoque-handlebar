import { ProductModel } from "../models/ProductModel.js";

export class ProductController {
  constructor() {
    this.productModel = new ProductModel();
  }

  async index(req, res) {
    try {
      const products = await this.productModel.findAll();
      res.render("products/index", { products });
    } catch (error) {
      res.status(500).render("error", { message: "Erro ao lista produtos" });
    }
  }
}

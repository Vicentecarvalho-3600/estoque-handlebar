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

  async show(req, res) {
    try {
      const product = await this.productModel.findById(req.params.id);
      if (!product) {
        return res
          .status(404)
          .render("error", { message: "Produto não encontrado" });
      }
      res.render("products/show", { product });
    } catch (error) {
      res.status(500).render("error", { message: "Erro ao buscar produto" });
    }
  }
}

import { ProductModel } from "../models/ProductModel.js";
import { StockModel } from "../models/StockModel.js";

export class ProductController {
  constructor() {
    this.productModel = new ProductModel();
    this.stockModel = new StockModel();
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
      const product = this.productModel.findById(req.params.id);
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

  async create(req, res) {
    try {
      const productData = {
        nome: req.body.nome,
        preco: Number(req.body.preco),
        descricao: req.body.descricao,
        categoria: req.body.categoria,
      };
      const estoqueData = {
        quantidade: Number(req.body.quantidade),
        localizacao: req.body.localizacao,
      };
      console.log(productData);
      console.log(estoqueData);
      const productId = await this.productModel.create(productData);
      await this.stockModel.update(productId, estoqueData);
      return res.redirect("/products");
    } catch (error) {
      if (error.errors) {
        res.status(400).render("products/new", {
          errors: error.errors,
          data: req.body,
        });
      } else {
        res.status(500).render("error", { message: "Erro ao criar produto" });
      }
    }
  }
}

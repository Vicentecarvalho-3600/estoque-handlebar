import db from "../config/database.js";

export class ProductModel {
  async findAll() {
    try {
      const products = db("produtos")
        .select("products", "estoque.quantidade")
        .leftJoin("estoque", "produtos.id", "estoque.id_produto");
      return products;
    } catch (error) {
      console.error("Erro ao buscar produtos", error);
      throw error;
    }
  }
}

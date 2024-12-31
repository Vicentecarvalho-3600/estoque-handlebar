import db from "../config/database.js";

export class ProductModel {
  async findAll() {
    try {
      const products = await db("produtos")
        .select("produtos.*", "estoque.quantidade")
        .leftJoin("estoque", "produtos.id", "estoque.produto_id");
      return products;
    } catch (error) {
      console.error("Erro ao buscar produtos", error);
      throw error;
    }
  }

  async findById(id) {
    try {
      const product = await db("produtos")
        .select("produtos.*", "estoque.quantidade", "estoque.localizacao")
        .leftJoin("estoque", "produtos.id", "estoque.produto_id")
        .first();
      return product;
    } catch (error) {
      console.error("Erro ao buscar produto", error);
      throw error;
    }
  }
}

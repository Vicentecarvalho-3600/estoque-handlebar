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
        .where("produtos.id", id)
        .first();
      return product;
    } catch (error) {
      console.error("Erro ao buscar produto", error);
      throw error;
    }
  }

  async create(producData) {
    try {
      const [productId] = await db("produtos").insert(producData);
      return productId;
    } catch (error) {
      console.error("Erro ao Criar produto", error);
      throw error;
    }
  }

  async update(id, producData) {
    try {
      await db("produtos").where("id", id).update(producData);
      return true;
    } catch (error) {
      console.error("Erro ao atualizar produto", error);
      throw error;
    }
  }
}

import db from "../config/database";

export class StockModel {
  async update(productId, stockData) {
    try {
      const existingStock = await db("estoque")
        .where("produto_id", productId)
        .first();
      if (existingStock) {
        await db("estoque").where("product_id", productId).update(stockData);
      } else {
        await db("estoque").insert({
          product_id: productId,
          ...stockData,
        });
      }
      return true;
    } catch (error) {
      console.error("Erro ao atualizar estoque:", error);
      throw error;
    }
  }
}

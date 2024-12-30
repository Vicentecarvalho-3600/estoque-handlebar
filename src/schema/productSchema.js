import { z } from "zod";

export const productSchema = z.object({
  nome: z.string().min(3, "Nome deve ter no minimo 3 caracteres"),
  descricao: z.string().min(10, "Descricao deve ter no minimo 10 caracteres"),
  preco: z.number().positive("Preço deve ser positivo"),
  categoria: z.string().min(3, "Categoria deve ter no minimo 3 caracteres"),
});

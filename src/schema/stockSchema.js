import { z } from "zod";

export const stockSchema = z.object({
  produto_id: z.number().positive(),
  quantidade: z.number().positive(0, "Quantidade não de ser negativa"),
  localizacao: z.string().min(2, "Localização deve ser no minimo 2 caracteres"),
});

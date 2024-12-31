import express from "express";
import { engine } from "express-handlebars";
import path from "path";
import productRoutes from "./routes/routes.js";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use(express.static(path.join(process.cwd(), "./public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(productRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

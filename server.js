const PORT = 3000;
import app from "./src/app.js";

const rotas = {
  "/": "Curso de Express API",
  "/livros": "Entrei na rota livros",
  "/autores": "Entrei na rota autores"
};

app.listen(PORT, () => {
  console.log("servidor escutando!");
});

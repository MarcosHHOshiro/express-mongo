import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "O senhor dos aneis"
    },
    {
        id: 2,
        titulo: "O hobbit"
    }
];

function buscaLivro(id){
    return livros.findIndex(livro=>{
        return livro.id === Number(id);
    });
}

app.get("/", (req, res) =>{
    res.status(200).send("Curso de Node.js");
});

app.get("/livros", (req, res) =>{
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    res.status(201).json(livros[index]);
});

app.put("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(201).json(livros);
});

app.delete("/livros/:id", (req, res) =>{
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(204).send("livro removido com sucesso");
});

app.post("/livros", (req, res)=>{
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
});

export default app;
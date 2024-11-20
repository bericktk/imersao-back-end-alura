import express from 'express'

const app = express();
app.listen(3000, ()=>{
    console.log("Servidor online!!!");
});

app.get("/api", (req, res)=>{
    res.status(200).send("Rota conectada com sucesso!");
});

app.get("/livro", (req, res)=>{
    res.status(200).send("Rota conectada com sucesso!");
});
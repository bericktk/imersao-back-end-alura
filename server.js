import express from 'express'
import conectarAoBanco from './src/config/dbconfig.js';

const posts = [
    {
      id:1,
      descricao: "Uma foto de teste",
      img_url: "https://placecats.com/millie/300/150"
    },
    {
      id:2,
      descricao: "Gato brincando com um novelo de lã",
      img_url: "https://placecats.com/louie/300/200"
    },
    {
      id:3,
      descricao: "Paisagem com um gato",
      img_url: "https://placecats.com/marley/400/200"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, ()=>{
    console.log("Servidor online!!!");
});

app.get("/posts", (req, res)=>{
    res.status(200).json(posts);
});

function buscarPostPorID(id){
  return posts.findIndex((post)=> {
    return post.id === Number(id)
  })
}

app.get("/posts/:id", (req, res)=>{
  const index = buscarPostPorID(req.params.id)
  res.status(200).json(posts[index]);
});

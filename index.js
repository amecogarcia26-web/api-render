import express from "express"

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {res.json({mensaje: "Creando API"});});

app.get("/api", (req, res) => {res.json({nombre: "yomismo", email:"yomismo@gmail.com"});});

app.listen(PORT, () =>{ console.log(`Servidor iniciado en puerto ${PORT}`);});
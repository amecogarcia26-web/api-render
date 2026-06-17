import express from "express"

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {res.json({mensaje: "Creando API"});});

app.listen(PORT, () =>{ console.log(`Servidor iniciado en puerto ${PORT}`);});
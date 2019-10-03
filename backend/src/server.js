const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const routes = require("./routes");

const app = express();

//Principais métodos HTTP
//GET, POST, PUT, DELETE

//Uso de Parametros via req
//req.query => acessar query params (para filtros)
//req.params => acessar route params (para edição e delete)
//req.body => acessar o corpo da requisição (para criação e edição)

mongoose.connect(
  "mongodb+srv://william:semana@projects-p4icg.mongodb.net/aircnc?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(cors());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3333);

const categories = require("./src/routes/categories");
const products = require("./src/routes/products");

const express = require("express")
var cors = require('cors')
const app = express()
app.use(cors())

//middlewares
app.use(express.json())

app.use("/api", categories);
app.use("/api", products);

module.exports = app
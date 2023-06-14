require("dotenv").config();

const express = require("express");
const app = express();

const conn = require('./db/connect')
const poductsRouter = require('./routes/porducts')


const notFound = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middlewares
app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send(`<h1>Store Api</h1><a href="/api/v1/products">Products</a>`);
});

app.use('/api/v1/products', poductsRouter)


// products route
app.use(notFound);
app.use(errorMiddleware);

const port = process.env.PORT || 4000;
const start = async () => {
  try {
    await conn(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server running on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

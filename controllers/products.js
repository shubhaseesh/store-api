const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const queryParams = {};
  const { name, company, price, featured } = req.query;
  if (company === "ikea") {
    queryParams.company = company;
  }
  if (price === 29) {
    queryParams.price = price;
  }
  if (featured === true) {
    queryParams.featured = featured;
  }
  const products = await Product.find(queryParams);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = { getAllProducts };

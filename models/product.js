const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add some valid name."],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  featured: {
    type: Boolean,
    default: false,
    required: [true, 'Please enter true or false.']
  },
  price: {
    type: Number,
    required: [true, "Please add some valid number."],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is incorrect.",
    },
  },
});

module.exports = mongoose.model("Product", productSchema);

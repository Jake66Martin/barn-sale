const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  item: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true
  }
});

const Item = model("Item", itemSchema);

module.exports = Item;

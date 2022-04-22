const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodItemsSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: false },
    availableQuantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

// Export Module/Schema
module.exports = mongoose.model("FoodItems", FoodItemsSchema);

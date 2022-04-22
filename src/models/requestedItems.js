const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestedItemsSchema = new Schema(
  {
    foodItemId: { type: Schema.Types.ObjectId, ref: "FoodItems" },
    userId: { type: Schema.Types.ObjectId, ref: "Users" },
    requestedQuantity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

// Export Module/Schema
module.exports = mongoose.model("RequestedItems", RequestedItemsSchema);

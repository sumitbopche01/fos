const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CafeteriaSchema = new Schema(
  {
    name: { type: String, required: false },
    buildingName: { type: String, required: false },
    city: { type: String, required: false },
    floorNumber: { type: Number, required: false },
    tableCount: { type: Number, required: false },
    chairCount: { type: Number, required: false },
    totalCapacity: { type: Number, required: false },
    usedCapacity: { type: Number, required: false },
    coffeeMachineCount: { type: Number, required: false },
    bottleCount: { type: Number, required: false },
    tissuePackateCount: { type: Number, required: false },
    plateCount: { type: Number, required: false },
    bowlCount: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

// Export Module/Schema
module.exports = mongoose.model("Cafeteria", CafeteriaSchema);

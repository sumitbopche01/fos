const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TableTennisSchema = new Schema(
  {
    tableNumber: { type: Number, required: true },
    floorNumber: { type: Number, required: true },
    buildingName: { type: String, required: true },
    city: { type: String, required: true },
    totalCapacity: { type: Number, required: true, default: 4 },
  },
  {
    timestamps: true,
  }
);

// Export Module/Schema
module.exports = mongoose.model("TableTennis", TableTennisSchema);

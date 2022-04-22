const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TableTennisBookingSchema = new Schema(
  {
    tableTennisId: { type: Schema.Types.ObjectId, ref: "TableTennis" },
    userId: { type: Schema.Types.ObjectId, ref: "Users" },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    bookedCapacity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TableTennisBooking", TableTennisBookingSchema);

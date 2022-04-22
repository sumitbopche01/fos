const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CafeteriaBookingSchema = new Schema(
  {
    cafeteriaId: { type: Schema.Types.ObjectId, ref: "Cafeteria" },
    userId: { type: Schema.Types.ObjectId, ref: "Users" },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    bookedCapacity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CafeteriaBooking", CafeteriaBookingSchema);

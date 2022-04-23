const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConferenceRoomBookingSchema = new Schema(
  {
    conferenceRoomId: { type: Schema.Types.ObjectId, ref: "ConferenceRoom" },
    username: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    bookedCapacity: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "ConferenceRoomBooking",
  ConferenceRoomBookingSchema
);

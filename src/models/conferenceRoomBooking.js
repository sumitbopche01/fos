const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConferenceRoomBookingSchema = new Schema(
  {
    conferenceRoomId: { type: Schema.Types.ObjectId, ref: "ConferenceRoom" },
    userId: { type: Schema.Types.ObjectId, ref: "Users" },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    bookedCapacity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ConferenceRoomBooking", ConferenceRoomBookingSchema);

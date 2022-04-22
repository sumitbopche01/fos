const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConferenceRoomSchema = new Schema(
  {
    roomNumber: { type: Number, required: true },
    roomName: { type: String, required: false },
    floorNumber: { type: Number, required: true },
    buildingName: { type: String, required: true },
    city: { type: String, required: true },
    capacity: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

// Export Module/Schema
module.exports = mongoose.model("ConferenceRoom", ConferenceRoomSchema);

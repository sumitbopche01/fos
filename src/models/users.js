const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    team: { type: String, required: true },
    tableNumber: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Export Module/Schema
module.exports = mongoose.model("Users", UserSchema);

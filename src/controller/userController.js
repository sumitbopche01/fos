const User = require("../models/users");

exports.getAll = async (req, res) => {
  return res.send(await User.find());
};

exports.createUser = async (req, res) => {
  const dbRes = await User.create(req.body);
  return res.send(dbRes);
};

exports.update = async (req, res) => {
  if (!req.params.id) {
    return res.send({ message: "Id is required" }).status(422);
  }
  const userId = req.params.id;
  const userObject = await User.findByIdAndUpdate(userId, req.body);
  return res.send({ message: "Record Updated Successfully" });
};

exports.delete = async (req, res) => {
  if (!req.params.id) {
    return res.send({ message: "Id is required" }).status(422);
  }
  const userRes = await User.findByIdAndDelete(req.params.id);
  return res.send({ message: "Record Deleted Successfully" });
};

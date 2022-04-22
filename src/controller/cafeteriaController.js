const Cafeteria = require("../models/cafeteria");

exports.getAll = async (req, res) => {
  return res.send(await Cafeteria.find());
};

exports.create = async (req, res) => {
  const Cafe = await Cafeteria.create(req.body);
  return res.send(Cafe);
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const updatedCafeDoc = await Cafeteria.findByIdAndUpdate(id, req.body);

  return res.send({ message: "Record Updated Successfully" });
};

exports.delete = async (req, res) => {
  const cdres = await Cafeteria.findByIdAndDelete(req.params.id);
  return res.send({ message: "Record Deleted Successfully" });
};


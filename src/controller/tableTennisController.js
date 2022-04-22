const TableTennis = require("../models/tableTennis");

exports.getAll = async (req, res) => {
  return res.send(await TableTennis.find());
};

exports.create = async (req, res) => {
  const createTable = await TableTennis.create(req.body);
  return res.send(createTable);
};

exports.update = async (req, res) => {
  await TableTennis.findByIdAndUpdate(req.params.id, req.body);

  return res.send({ message: "Record Updated Successfully" });
};

exports.delete = async (req, res) => {
  await TableTennis.findByIdAndDelete(req.params.id);

  return res.send({ message: "Record Deleted Successfully" });
};

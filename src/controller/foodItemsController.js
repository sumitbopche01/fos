const FoodItems = require("../models/foodItems");

exports.getAll = async (req, res) => {
  return res.send(await FoodItems.find());
};

exports.create = async (req, res) => {
  const foodDoc = await FoodItems.create(req.body);
  return res.send(foodDoc);
};

exports.update = async (req, res) => {
  await FoodItems.findByIdAndUpdate(req.params.id, req.body);

  return res.send({ message: "Record Updated Successfully" });
};

exports.delete = async (req, res) => {
  await FoodItems.findByIdAndDelete(req.params.id);

  return res.send({ message: "Record Deleted Successfully" });
};

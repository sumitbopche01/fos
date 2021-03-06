const ConferenceRoom = require("../models/conferenceRoom");
const ConferenceRoomBooking = require("../models/conferenceRoomBooking");

exports.getAll = async (req, res) => {
  return res.send(await ConferenceRoom.find());
};

exports.create = async (req, res) => {
  const cr = await ConferenceRoom.create(req.body);
  return res.send(cr);
};

exports.update = async (req, res) => {
  const crUpdated = await ConferenceRoom.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  return res.send({ message: "Record Updated Succesfully" });
};

exports.delete = async (req, res) => {
  await ConferenceRoom.findByIdAndDelete(req.params.id);
  return res.send({ message: "Record Deleted Succesfully" });
};

exports.bookConferenceRoom = async (req, res) => {
  const { conferenceRoomId, username, startTime, endTime } = req.body;

  if (!conferenceRoomId || !username || !startTime || !endTime) {
    return res.send({ message: "Required fileds is/are missing" }).status(422);
  }
  //check if that particular slot for that conference room is already booked or not
  // const checkData = await ConferenceRoomBooking.find({
  //   conferenceRoomId: conferenceRoomId,
  //   startTime: { $lt: startTime },
  //   endTime: { $gt: startTime },
  // });
  // if available then book
  const createBooking = await ConferenceRoomBooking.create({
    conferenceRoomId,
    username,
    startTime,
    endTime,
  });

  return res.send({ message: "Booking Created Successfully" });
  //else send proper error message
};

exports.getBookedConferenceRoomsSlots = async (req, res) => {
  let result = [];
  if (req.query.username) {
    result = await ConferenceRoomBooking.find({
      username: req.query.username,
    });

  } else {
    result = await ConferenceRoomBooking.find();
  }

  return res.send(result);
};

exports.updateBookedConferenceRoomsSlots = async (req, res) => {
  const { conferenceRoomId, username, startTime, endTime } = req.body;

  if (!conferenceRoomId || !username || !startTime || !endTime) {
    return res.send({ message: "Required fields is/are missing" }).status(422);
  }
  //check if that particular slot for that conference room is already booked or not
  // const checkData = await ConferenceRoomBooking.find({
  //   conferenceRoomId: conferenceRoomId,
  //   startTime: { $lt: startTime },
  //   endTime: { $gt: startTime },
  // });
  // if available then book
  const createBooking = await ConferenceRoomBooking.findByIdAndUpdate(
    req.params.id,
    {
      conferenceRoomId,
      username,
      startTime,
      endTime,
    }
  );

  return res.send({ message: "Booking Updated Successfully" });
  //else send proper error message
};

exports.deleteBookedConferenceRoomsSlots = async (req, res) => {
  await ConferenceRoomBooking.findByIdAndDelete(req.params.id);

  return res.send({ message: "Booking Deleted Successfully" });
};

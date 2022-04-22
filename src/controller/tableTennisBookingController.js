const TableTennisBooking = require("../models/tableTennisBooking");

exports.bookTtTable = async (req, res) => {
    const { tableTennisId, userId, startTime, endTime, bookedCapacity } =
      req.body;
  
    if (
      !tableTennisId ||
      !userId ||
      !startTime ||
      !endTime ||
      !bookedCapacity
    ) {
      return res.send({ message: "Required fileds is/are missing" }).status(422);
    }
    //check if that particular slot for that conference room is already booked or not
    // const checkData = await ConferenceRoomBooking.find({
    //   conferenceRoomId: conferenceRoomId,
    //   startTime: { $lt: startTime },
    //   endTime: { $gt: startTime },
    // });
    // if available then book
    const createBooking = await TableTennisBooking.create({
      tableTennisId,
      userId,
      startTime,
      endTime,
      bookedCapacity,
    });
  
    return res.send({ message: "Booking Created Successfully" });
    //else send proper error message
  };
  
  exports.getBookedTtTableSlots = async (req, res) => {
    return res.send(await TableTennisBooking.find());
  };
  
  exports.updateBookedTtTableSlots = async (req, res) => {
    const { tableTennisId, userId, startTime, endTime, bookedCapacity } =
      req.body;
  
    if (
      !tableTennisId ||
      !userId ||
      !startTime ||
      !endTime ||
      !bookedCapacity
    ) {
      return res.send({ message: "Required fields is/are missing" }).status(422);
    }
    //check if that particular slot for that conference room is already booked or not
    // const checkData = await ConferenceRoomBooking.find({
    //   conferenceRoomId: conferenceRoomId,
    //   startTime: { $lt: startTime },
    //   endTime: { $gt: startTime },
    // });
    // if available then book
    const createBooking = await TableTennisBooking.findByIdAndUpdate(
      req.params.id,
      {
        tableTennisId,
        userId,
        startTime,
        endTime,
        bookedCapacity,
      }
    );
  
    return res.send({ message: "Booking Updated Successfully" });
    //else send proper error message
  };
  
  exports.deleteBookedTtTableSlots = async (req, res) => {
    await TableTennisBooking.findByIdAndDelete(req.params.id);
  
    return res.send({ message: "Booking Deleted Successfully" });
  };
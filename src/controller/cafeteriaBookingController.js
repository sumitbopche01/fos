const CafeteriaBooking = require("../models/cafeteriaBooking");

exports.bookCafeteria = async (req, res) => {
    const { cafeteriaId, userId, startTime, endTime, bookedCapacity } =
      req.body;
  
    if (
      !cafeteriaId ||
      !userId ||
      !startTime ||
      !endTime
      
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
    const createBooking = await CafeteriaBooking.create({
      cafeteriaId,
      userId,
      startTime,
      endTime
    });
  
    return res.send({ message: "Booking Created Successfully" });
    //else send proper error message
  };
  
  exports.getBookedCafeteriaSlots = async (req, res) => {
    return res.send(await CafeteriaBooking.find());
  };
  
  exports.updateCafeteriaSlots = async (req, res) => {
    const { cafeteriaId, userId, startTime, endTime } =
      req.body;
  
    if (
      !cafeteriaId ||
      !userId ||
      !startTime ||
      !endTime
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
    const createBooking = await CafeteriaBooking.findByIdAndUpdate(
      req.params.id,
      {
        cafeteriaId,
        userId,
        startTime,
        endTime
      }
    );
  
    return res.send({ message: "Booking Updated Successfully" });
    //else send proper error message
  };
  
  exports.deleteBookedCafeteriaSlots = async (req, res) => {
    await CafeteriaBooking.findByIdAndDelete(req.params.id);
  
    return res.send({ message: "Booking Deleted Successfully" });
  };
  
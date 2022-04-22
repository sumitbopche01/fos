const UserController = require("../controller/userController");
const CafeteriaController = require("../controller/cafeteriaController");
const TableTennisController = require("../controller/tableTennisController");
const ConferenceRoomController = require("../controller/conferenceRoomController");
const FoodItemsController = require("../controller/foodItemsController");
const TableTenningBookingController = require("../controller/tableTennisBookingController");

module.exports = (router) => {
  router.get("/", (req, res) => {
    return res.send("Hello, World");
  });

  //User APIs
  router.get("/users", UserController.getAll);
  router.post("/user", UserController.createUser);
  router.put("/user/:id", UserController.update);
  router.delete("/user/:id", UserController.delete);

  //Cafeteria APIs
  router.get("/cafeteria", CafeteriaController.getAll);
  router.post("/cafeteria", CafeteriaController.create);
  router.put("/cafeteria/:id", CafeteriaController.update);
  router.delete("/cafeteria/:id", CafeteriaController.delete);

  //Table Tennis APIs
  router.get("/table_tennis", TableTennisController.getAll);
  router.post("/table_tennis", TableTennisController.create);
  router.put("/table_tennis/:id", TableTennisController.update);
  router.delete("/table_tennis/:id", TableTennisController.delete);

  //Table Tennis Table booking
  router.get(
    "/table_tennis/booked/slots",
    TableTenningBookingController.getBookedTtTableSlots
  );
  router.post("/table_tennis/book", TableTenningBookingController.bookTtTable);
  router.put("/table_tennis/booked/:id", TableTenningBookingController.updateBookedTtTableSlots);
  router.delete(
    "/table_tennis/booked/:id",
    TableTenningBookingController.deleteBookedTtTableSlots
  );

  //Conference Room APIs
  router.get("/conference_room", ConferenceRoomController.getAll);
  router.post("/conference_room", ConferenceRoomController.create);
  router.put("/conference_room/:id", ConferenceRoomController.update);
  router.delete("/conference_room/:id", ConferenceRoomController.delete);

  // Conference Room Booking
  router.post(
    "/conference_room/book",
    ConferenceRoomController.bookConferenceRoom
  );
  router.get(
    "/conference_room/booked/slots",
    ConferenceRoomController.getBookedConferenceRoomsSlots
  );
  router.put(
    "/conference_room/booked/:id",
    ConferenceRoomController.updateBookedConferenceRoomsSlots
  );
  router.delete(
    "/conference_room/booked/:id",
    ConferenceRoomController.deleteBookedConferenceRoomsSlots
  );

  //Food Items APIs
  router.get("/food_items", FoodItemsController.getAll);
  router.post("/food_items", FoodItemsController.create);
  router.put("/food_items/:id", FoodItemsController.update);
  router.delete("/food_items/:id", FoodItemsController.delete);

  return router; // Return router object to main index.js
};

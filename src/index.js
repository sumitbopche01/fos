const express = require("express");
const dotenv = require("dotenv");
// require router to define routes
const router = express.Router();

// initialize configuration
dotenv.config();

const app = express();

// For parsing application/x-www-form-urlencoded
app.use(express.json())

const port = process.env.SERVER_PORT;

// including the routes file which includes all the routes
const routes = require('./routes/routes')(router);

// mongoose ORM to write mongo queries
const mongoose = require("mongoose");

// mongoose connection
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URL, (err) => {
  if (err) {
    // tslint:disable-next-line:no-console
    console.log(err);
    // tslint:disable-next-line:no-console
    console.error("Could not connect to Database", err);
  } else {
    // tslint:disable-next-line:no-console
    console.info("Connected to Database");
  }
});

app.use("/", routes);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Started listening at http://localhost:${port}`);
});

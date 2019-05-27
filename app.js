/* Sam Snyder
 * Express application
 * Description: Handles server requests from clients
 */

// import utilities
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

// Create the express app
const app = express();

// Log requests to the console.
app.use(logger("dev"));

// setup middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

// Setup the routes
require("./server/routes")(app);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "Home Page"
  })
);

module.exports = app;

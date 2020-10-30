const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// change this option on implementation to direct to the right address
var corsOptions = {
    origin: "http://localhost:8081"
}; 

app.use(cors(corsOptions));

// parses application/json requests
app.use(bodyParser.json());

// parses application/x-www-form-urlencoded requests
app.use(bodyParser.urlencoded({ extended: true}));

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
}); // Remove the whole force statement for deploying, but (?) keep sync() (?)

app.get("/db", (req, res) => {
    res.json({ message: "Welcome to the database side! This is not database data."});
});

// set port and listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
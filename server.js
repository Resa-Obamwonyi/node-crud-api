const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./connection");

//Import people route
const PeopleRoutes = require("./routes/people");

var app = express();
app.use(bodyParser.json())

// use people route
app.use("/people", PeopleRoutes);


app.listen(3000);

const express = require("express");
const connection = require("../connection");
const Router = express.Router();

// Read
Router.get("/", (req, res) => {
  connection.query("SELECT * FROM people", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

// Create
Router.post("/add", (req, res) => {
  connection.query(
    "INSERT INTO people VALUES (?, ?, ?, ?) ",
    [req.body.id, req.body.name, req.body.age, req.body.gender],
    (err, rows, fields) => {
      if (!err) {
        res.json({
          success: "Person added successfully.",
        });
      } else {
        console.log(err);
      }
    }
  );
});

// Delete
Router.post("/delete/:id", (req, res) => {
  connection.query(
    "DELETE FROM people WHERE id = ? ",
    [req.params.id],
    (err, result) => {
      if (!err) {
        res.json({
          success: "Person deleted successfully.",
        });
      } else {
        console.log(err);
      }
    }
  );
});

// Update
Router.post("/update/:id", (req, res) => {
  connection.query(
    "UPDATE people SET name = ?, age = ?, gender = ? WHERE id = ? ",
    [req.body.name, req.body.age, req.body.gender, req.params.id],
    (err, result) => {
      if (!err) {
        res.json({
          success: "Person data updated successfully.",
        });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = Router;

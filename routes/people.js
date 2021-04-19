const express = require("express");
const connection = require("../connection");
const Router = express.Router();

Router.get("/", (req, res) => {
    connection.query("SELECT * FROM people", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err)
        }
    })
})


Router.post("/", (req, res) => {
    connection.query("INSERT INTO people VALUES (?, ?, ?, ?) ",
        [req.body.id, req.body.name, req.body.age, req.body.gender], (err, rows, fields) => {
            if (!err) {
                res.json({
                    success: "Person added successfully."
                })
            } else {
                console.log(err)
            }
        })
})


module.exports = Router;

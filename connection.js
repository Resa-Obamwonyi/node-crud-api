const mysql = require("mysql");

// Define Database Configuration
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Euphoria",
  database: "ResaNode",
  multipleStatements: true,
});

// If have connection Error, Run this in the Schema query in mysql workbench
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Euphoria';
// then click on the thunderbolt icon, first one
// then run FLUSH PRIVILEGES;

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected!");
  } else {
    console.log("Connection Failed!");
  }
});


module.exports = mysqlConnection;



const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "12345678",
  database: "RealEstate",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Server!");
});
module.exports = connection;

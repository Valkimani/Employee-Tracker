var mysql = require("mysql");
const inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Val2121!",
  database: "name_of_company_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected");
  pullSearch();
});
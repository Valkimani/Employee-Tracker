var mysql = require("mysql");
const inquirer = require("inquirer");
const { exit } = require("process");
const { S_IFMT } = require("constants");
const { inherits } = require("util");
const { before } = require("lodash");
const { table } = require("console");
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
  runSearch();
});

function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "test",
          "View all employees",
          "View all Departments",
          "View all roles",
          "Add a new employee",
          "Update employee role",
          "Update employee manager",
          "exit"
        ]
      })
      .then((search)=>{
        switch (search.action) {
        case "test":
          test();
          break;
  
        case "View all employees":
          allEmployees();
          break;
  
        case "View all Departments":
          allDepartment();
          break;
  
        case "View all roles":
          roles();
          break;
  
        case "exit":
          exit();
          break;
          default:
            console.log("Command not valid, please update and try again");
        }
      });
  }

  //Functions//

  function test() {
    connection.query("SELECT * from department;", function (err, data){
      if (err) throw err;
      console.table(data);
      init();
    });
  }

//view all employees//
function allEmployees() {
  // Added Aliases in the select query//
      let query = " SELECT e.id, e.first_name, e.last_name, r.title, r.salary,d.department_name as department, concat(manager.first_name,' ', manager.last_name)as manager FROM employee e"
      query += " LEFT JOIN roles r ON e.title_id = r.id "
      query += " LEFT JOIN department d ON r.department_id = d.id ";
      // Added an Alias to the empolyee query//
      query += " LEFT JOIN employee manager ON e.manager_id = manager.id; ";
      //console.log(query);
      connection.query(query, function(err, res) {
          console.table(res);
        runSearch();
        if(err)
        console.log("Throw error", err)
      });
}

function allDepartment() {
  connection.query("SELECT * from department;", function (err, results){
    if (err) throw err;
    console.table(results)
    runSearch();

  });
}
// Added a roles function
    function roles() {
      connection.query("SELECT * from roles;", function (err, results){
        if (err) throw err;
        console.table(results)
        runSearch();
      });
    }
//    

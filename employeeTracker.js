var mysql = require("mysql");
const inquirer = require("inquirer");
const { exit } = require("process");
const { S_IFMT } = require("constants");
const { inherits } = require("util");
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
          "View all employees Department",
          "View all employees Manager",
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
  
        case "View all employees Department":
          allDepartment();
          break;
  
        case "View all employees Manager":
          allManager();
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
      let query = "SELECT * FROM employee "
      query += "JOIN roles ON employee.title_id = roles.Id "
      query += "JOIN department ON roles.department_id = department.Id; ";
      //console.log(query);
      connection.query(query, function(err, res) {
          console.table(res);
        runSearch();
      });
}

function allDepartment() {
  connection.query("SELECT * from department;", function (err, results){
    if (err) throw err;
    inquirer
    .prompt([
      {
        type: "list",
        name: "department",
        choices: function (){
          let choicesArray=[];
          for (var i=0; i<results.length; i++){
            choicesArray.push(results[i].name);
          }
          return choiceArray;
        },
          message:"what department would you like to search?",
        },
    ])
.then(({ allDepartment})=>{ 
  connection.query(
    "SELECT e.id, e.first_name, e.last_name, r.title, r.salary,d.name department, CONCATENATE(mgr.first_name,' ', mgr.last_name) manager FROM employee e",
[allDepartment],
(err, data) => {
  if (err) throw err;
  console.table (data)
  init();
}
  );
 }); 
  });
}
// function byManager(){
// }
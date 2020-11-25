--Designing the database schema--

DROP DATABASE IF EXISTS name_of_company_db;
CREATE DATABASE name_of_company_db;
USE name_of_company_db;
CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  title_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);
CREATE TABLE roles(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, title_id, manager_id)
VALUES ("James", "Smith", 4, Null), ("Tom", "Lee", 3), ("Sarah", "Thompson", 6, NULL), ("Matt", "Jones", 9 NULL), ("Mary", "Jane", 14, NULL), ("Lilly", "Cruz", 4, 2), ("Kyle", "Gates", 6, 9);
INSERT INTO roles (title, salary, department_id)

VALUES ("Engineering Director", 120098, 9), ("Junior engineer", 100567, 6), ("Senior Engineer", 110678, 3), ("Talent Manager", 101001, 4), ("Marketing representative", 900679, 7), ("Account Manager", 147000, 5);
INSERT INTO department (department_name)

VALUES ("Engineering Director"), ("Human Resources"), ("Marketing"), ("Client Services");

SELECT * FROM employee;

SELECT * FROM roles;

SELECT * FROM department;

SELECT first_name last_name FROM employee

JOIN roles ON employee.title_id = roles.Id

JOIN department ON roles.department_id = department.Id;
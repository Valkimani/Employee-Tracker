--Designing the database schema--

DROP DATABASE IF EXISTS comany_name_db;
CREATE DATABASE company_name_db;
USE company_name_db;

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
VALUES ("John", "Doe", 1, Null), ("Jared", "Chan", 2, 1), ("Ashley", "Rodriquez", 3, NULL), ("Kenny", "Dojaquez", 6, NULL), ("Malia", "Brown", 5, NULL), ("Kevin", "Tupik", 4, 3), ("Gary", "Forest", 7, 4);
INSERT INTO roles (title, salary, department_id)

VALUES ("Sales Executive", 100000, 1), ("Sales Representative", 75000, 1), ("Lead Engineer", 135000, 2), ("Software Engineer", 125000, 2), ("Accountant", 105000, 3), ("Client services", 000, 4), ("Account representative", 1550000, 4);
INSERT INTO department (department_name)

VALUES ("Sales"), ("Engineering"), ("Accounting"), ("Legal");

SELECT e.id, e.first_name, e.last_name, r.title, r.salary,d.name department, CONCATENATE(mgr.first_name,' ', mgr.last_name) manager FROM employee e
LEFT OUTER JOIN role r ON r.id = e.role_id
LEFT OUTER JOIN department d ON d.id = r.department_id
LEFT OUTER JOIN employee manager ON manager.id = e.manager_id;

SELECT * FROM employee;
SELECT * FROM roles;
SELECT * FROM department;
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

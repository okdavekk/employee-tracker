/* department_db */
DROP DATABASE if EXISTS department_db;
CREATE DATABASE department_db;
Use department_db;

CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30)
);

/* role_db */
DROP DATABASE if EXISTS role_db;
CREATE DATABASE role_db;
Use role_db;

CREATE TABLE role (
  id INT PRIMARY KEY,
  name VARCHAR(30),
  salary DECIMAL(6,0),
  department_id INT
); 

/* employee_db */
DROP DATABASE if EXISTS employee_db;
CREATE DATABASE employee_db;
Use employee_db; 

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  /* Employees role */
  role_id INT, 
  /* null if no manager but how?*/
  manager_id INT
); 
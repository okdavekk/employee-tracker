DROP DATABASE if EXISTS aggregate_db;

CREATE DATABASE aggregate_db;

USE aggregate_db; 

CREATE TABLE department (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(30)
);

CREATE TABLE role (
  role_id INT PRIMARY KEY,
  role_name VARCHAR(30),
  salary DECIMAL(6,0),
  dept_id INT
); 

CREATE TABLE employee (
  /* AUTO_INCEMENT ? */
  empl_id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT, 
  manager_id INT
); 
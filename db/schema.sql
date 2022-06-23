/* removes database if there*/
DROP DATABASE IF EXISTS aggregateData_db;
/* creates database */
CREATE DATABASE aggregateData_db;

USE aggregateData_db;

/* creates table */
CREATE TABLE data (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);
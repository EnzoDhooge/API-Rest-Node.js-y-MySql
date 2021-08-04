CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE employees (
	id INT(11) NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL
);

DESCRIBE employees;

INSERT INTO employees VALUES 
	(1, 'Ryan Ray', 20000),
    (2, 'Joe McMilan', 40000),
    (3, 'Jhon Carter', 50000);

SELECT * FROM employees;
DROP DATABASE IF EXISTS users_db;
CREATE DATABASE users_db;

/*
USE users_db;
CREATE TABLE IF NOT EXISTS accounts
(
	uuid CHAR(36) BINARY, 
	email varchar(100) NOT NULL,
	account_key varchar(255) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
	PRIMARY KEY (uuid)
);

CREATE TABLE IF NOT EXISTS tasks 
(
	id int NOT NULL AUTO_INCREMENT,
	task_name VARCHAR(255) NOT NULL,
    completed BOOLEAN default false, 
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
	owner_id CHAR(36) BINARY,
	PRIMARY KEY(id),
	FOREIGN KEY(owner_id) REFERENCES accounts(uuid)
);
*/

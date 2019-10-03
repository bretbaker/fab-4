CREATE DATABASE sportsbetting;

USE sportsbetting;

-- Create the table sports.

CREATE TABLE users(
 id INT(11) AUTO_INCREMENT,
 firstname varchar(30) NOT NULL,
 lastname  varchar(30) NOT NULL,
 username  varchar(30) NOT NULL,
 email      varchar(40) NOT NULL,
 dob        DATE NOT NULL,
 password   varchar(20) NOT NULL,
 totalmoney DECIMAL(9,2),
 PRIMARY KEY(id)
);

-- CREATE TABLE bets(
--     id int AUTO_INCREMENT,
-- FOREIGN KEY (id) REFERENCES users(id),
-- deposit int (50) NOT NULL,
--  withdrawal INT(50) NOT NULL,
--  winnings int NOT NULL,
--  PRIMARY KEY(id)
-- ); 

INSERT INTO users(firstname, lastname, username, email,dob, password, totalmoney) values('first', 'last', 'uname', 'test@test.com','1992-11-18', 'password',1000);


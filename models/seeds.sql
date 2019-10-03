DROP TABLE IF EXISTS users;
CREATE TABLE users (
    `id` INT AUTO_INCREMENT NOT NULL,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL, 
    `acct_value` DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS wagers;
CREATE TABLE wagers (
    `id` INT AUTO_INCREMENT NOT NULL,
    `username` VARCHAR(50) NOT NULL, 
    `acct_value_start` DECIMAL(10, 2) NOT NULL,
    `wager_value` DECIMAL(10, 2) NOT NULL,
    `wager_result` VARCHAR(4),
    `wager_result_value` DECIMAL(10, 2) NOT NULL, 
    `acct_value_end` DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO users (`username`, `password`, `acct_value`)
VALUES ("tomjones123", "strongPassword", 1000.00);

INSERT INTO users (`username`, `password`, `acct_value`)
VALUES ("jessica57", "weakPassword", 1000.00);

INSERT INTO users (`username`, `password`, `acct_value`)
VALUES ("scaryMary1000", "securePassword", 1000.00);

INSERT INTO wagers (`username`, `acct_value_start`, `wager_value`, `wager_result`, `wager_result_value`, `acct_value_end`)
VALUES ("tomjones123", 1000.00, 100.00, "win", 213.86, 1213.86);

INSERT INTO wagers (`username`, `acct_value_start`, `wager_value`, `wager_result`, `wager_result_value`, `acct_value_end`)
VALUES ("tomjones123", 1213.86, 200.00, "loss", 342.52, 871.34);

INSERT INTO wagers (`username`, `acct_value_start`, `wager_value`, `wager_result`, `wager_result_value`, `acct_value_end`)
VALUES ("jessica57", 1000.00, 100.00, "loss", 87.23, 912.77);

INSERT INTO wagers (`username`, `acct_value_start`, `wager_value`, `wager_result`, `wager_result_value`, `acct_value_end`)
VALUES ("jessica57", 912.77, 100.00, "win", 242.11, 1154.88);

INSERT INTO wagers (`username`, `acct_value_start`, `wager_value`, `wager_result`, `wager_result_value`, `acct_value_end`)
VALUES ("scaryMary1000", 1000.00, 300.00, "win", 633.42, 1633.42);

INSERT INTO wagers (`username`, `acct_value_start`, `wager_value`, `wager_result`, `wager_result_value`, `acct_value_end`)
VALUES ("scaryMary1000", 1633.42, 500.00, "win", 841.97, 2475.39);

SELECT * FROM users;
SELECT * FROM wagers;
CREATE DATABASE 18MD;

CREATE TABLE
    user (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        choice VARCHAR(25) NOT NULL,
        time VARCHAR(150) NOT NULL,
        PRIMARY KEY(id)
    );

CREATE TABLE
    computer (
        id INT NOT NULL AUTO_INCREMENT,
        choice VARCHAR(25) NOT NULL,
        time VARCHAR(150) NOT NULL,
        PRIMARY KEY(id)
    );

CREATE TABLE
    win (
        id INT NOT NULL AUTO_INCREMENT,
        winStatus VARCHAR(25) NOT NULL,
        game_id INT NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY (game_id) REFERENCES user(id) ON DELETE CASCADE
    );

DROP Table computer;
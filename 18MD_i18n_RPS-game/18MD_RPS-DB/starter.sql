-- execute 1
CREATE DATABASE 18MD;

-- execute 2
CREATE TABLE
    user (
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(50) NOT NULL,
        choice VARCHAR(25) NOT NULL,
        time VARCHAR(150) NOT NULL,
        game_id INT NOT NULL,
        PRIMARY KEY(id)
    );

-- execute 3
CREATE TABLE
    computer (
        id INT NOT NULL AUTO_INCREMENT,
        choice VARCHAR(25) NOT NULL,
        time VARCHAR(150) NOT NULL,
        game_id INT NOT NULL,
        PRIMARY KEY(id)
    );

-- execute 4
CREATE TABLE
    win (
        id INT NOT NULL AUTO_INCREMENT,
        winStatus VARCHAR(25) NOT NULL,
        PRIMARY KEY(id)
    );

-- execute 5
ALTER TABLE `user`
ADD
    CONSTRAINT fk_user_win FOREIGN KEY (game_id) REFERENCES win (id);

-- execute 6
ALTER TABLE `computer`
ADD
    CONSTRAINT fk_computer_win FOREIGN KEY (game_id) REFERENCES win (id);

drop schema Campus;
CREATE SCHEMA `Campus` DEFAULT CHARACTER SET utf8 COLLATE utf8_swedish_ci;
USE Campus;

-- drop table Users;
-- drop table Room;

CREATE TABLE Users (
	UserID 			INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Username 		VARCHAR(65) NOT NULL,
	Password 		VARCHAR(32) NOT NULL,
	Email 			VARCHAR(255) NOT NULL,
	Timeedit 		VARCHAR(255) NOT NULL
);

CREATE TABLE Room (
	Room_ID 		INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	RoomName 		VARCHAR(255) NOT NULL,
	Campus 			VARCHAR(255) NOT NULL,
    CampusShort		VARCHAR(10) NOT NULL,
	Building 		INT(11) NOT NULL,
    Floor 			INT(11) NOT NULL,
    RoomNumber 		INT(11) NOT NULL
);



INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('1', 'P1111', 'Pollacks', 'P', '1', '1', '11');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('2', 'P1112', 'Pollacks', 'P', '1', '1', '12');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('3', 'P1113', 'Pollacks', 'P', '1', '1', '13');

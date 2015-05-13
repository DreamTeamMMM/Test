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

CREATE TABLE RoomTime (
	Room_ID			INT(11),
    Datum			DATE,
    StartTime		time,
    EndTime			time,
    PRIMARY KEY (Room_ID, Datum, StartTime)
);

-- lägg till rum
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('1', 'P1', 'Pollacks', 'P', '1', '1', '11');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('2', 'P2', 'Pollacks', 'P', '1', '1', '12');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('3', 'P3', 'Pollacks', 'P', '1', '1', '13');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('4', 'P4', 'Pollacks', 'P', '1', '1', '14');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('5', 'P5', 'Pollacks', 'P', '1', '1', '15');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('6', 'P6', 'Pollacks', 'P', '1', '1', '16');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('7', 'P7', 'Pollacks', 'P', '1', '1', '17');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('8', 'P8', 'Pollacks', 'P', '1', '1', '18');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('9', 'P9', 'Pollacks', 'P', '1', '1', '19');


-- lägg till tider
INSERT INTO `Campus`.`RoomTime` (`Room_ID`, `Datum`, `StartTime`, `EndTime`) VALUES ('1', '2015-05-13', '15:15:00', '17:00:00');
INSERT INTO `Campus`.`RoomTime` (`Room_ID`, `Datum`, `StartTime`, `EndTime`) VALUES ('2', '2015-05-13', '15:15:00', '17:00:00');
INSERT INTO `Campus`.`RoomTime` (`Room_ID`, `Datum`, `StartTime`, `EndTime`) VALUES ('3', '2015-05-13', '15:15:00', '17:00:00');
INSERT INTO `Campus`.`RoomTime` (`Room_ID`, `Datum`, `StartTime`, `EndTime`) VALUES ('4', '2015-05-13', '15:15:00', '17:00:00');
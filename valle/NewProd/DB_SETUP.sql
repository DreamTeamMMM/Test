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
-- for loop lägg till rum

USE `Campus`;
DROP procedure IF EXISTS `dowhaile`;

DELIMITER $$
USE `Campus`$$
CREATE PROCEDURE dowhile()
BEGIN
  DECLARE i INT DEFAULT 1;

  WHILE i < 31 DO
    INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) 
	VALUES (i, CONCAT('P',i), 'Pollacks', 'P', '1', '1', i);
    SET i = i + 1;
  END WHILE;
END;$$

DELIMITER ;


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
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('10', 'P10', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('11', 'P11', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('12', 'P12', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('13', 'P13', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('14', 'P14', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('15', 'P15', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('16', 'P16', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('17', 'P17', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('18', 'P18', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('19', 'P19', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('20', 'P20', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('21', 'P21', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('22', 'P22', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('23', 'P23', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('24', 'P24', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('25', 'P25', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('26', 'P26', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('27', 'P27', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('28', 'P28', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('29', 'P29', 'Pollacks', 'P', '1', '1', '19');
INSERT INTO `Campus`.`Room` (`Room_ID`, `RoomName`, `Campus`, `CampusShort`, `Building`, `Floor`, `RoomNumber`) VALUES ('30', 'P30', 'Pollacks', 'P', '1', '1', '19');


-- lägg till tider
INSERT INTO `Campus`.`RoomTime` (`Room_ID`, `Datum`, `StartTime`, `EndTime`) VALUES ('1', '2015-05-13', '15:15:00', '17:00:00');
INSERT INTO `Campus`.`RoomTime` (`Room_ID`, `Datum`, `StartTime`, `EndTime`) VALUES ('2', '2015-05-13', '15:15:00', '17:00:00');
INSERT INTO `Campus`.`RoomTime` (`Room_ID`, `Datum`, `StartTime`, `EndTime`) VALUES ('3', '2015-05-13', '15:15:00', '17:00:00');
INSERT INTO `Campus`.`RoomTime` (`Room_ID`, `Datum`, `StartTime`, `EndTime`) VALUES ('4', '2015-05-13', '15:15:00', '17:00:00');
CREATE TABLE Users (
	UserID 			INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	Username 		VARCHAR(65) NOT NULL,
	Password 		VARCHAR(32) NOT NULL,
	Email 			VARCHAR(255) NOT NULL,
	TimeEditLink 	varchar(255) NOT NULL
);
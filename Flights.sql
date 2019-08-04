IF OBJECT_ID('Users') IS NOT NULL
	DROP TABLE Users
CREATE TABLE Users
(
   id   INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
   fullName VARCHAR (100)     NOT NULL,
   gender VARCHAR (10)   NOT NULL,
   contactPreference VARCHAR (20)   NOT NULL,
   email VARCHAR (100)   NOT NULL,
   phoneNumber VARCHAR (100)   NOT NULL,
   dateOfBirth DATETIME NOT NULL,
   isActive  BIT NOT NULL,
   department VARCHAR (2)  NOT NULL,
   photoPath VARCHAR (100),
)

SET IDENTITY_INSERT Users ON

INSERT INTO Users(id,fullName,gender,contactPreference,email,phoneNumber,dateOfBirth, department,isActive,photoPath) 
VALUES(1,'SREENU', 'male', 'email', 'sreenu@gmail.com', '+61468822339',GETDATE(),'1',1,'assets/images/SreenuPic.png')

INSERT INTO Users(id,fullName,gender,contactPreference,email,phoneNumber,dateOfBirth, department,isActive,photoPath) 
VALUES(2,'JESSICA', 'female', 'phone', 'jessica@gmail.com', '+61468822339',GETDATE(),'2',0,'assets/images/SreenuPic.png')

INSERT INTO Users(id,fullName,gender,contactPreference,email,phoneNumber,dateOfBirth, department,isActive,photoPath) 
VALUES(3,'AARUSH', 'male', 'email', 'aarush@gmail.com', '+61468822339',GETDATE(),'3',1,'assets/images/SreenuPic.png')

INSERT INTO Users(id,fullName,gender,contactPreference,email,phoneNumber,dateOfBirth, department,isActive,photoPath) 
VALUES(4,'TEJO', 'female', 'phone', 'tejo@gmail.com', '+61468822339',GETDATE(),'4',0,'assets/images/SreenuPic.png')

INSERT INTO Users(id,fullName,gender,contactPreference,email,phoneNumber,dateOfBirth, department,isActive,photoPath) 
VALUES(5,'KUSHAL', 'male', 'email', 'kushal@gmail.com', '+61468822339',GETDATE(),'1',1,'assets/images/SreenuPic.png')

INSERT INTO Users(id,fullName,gender,contactPreference,email,phoneNumber,dateOfBirth, department,isActive,photoPath) 
VALUES(6,'MADHURI', 'female', 'phone', 'madhuri@gmail.com', '+61468822339',GETDATE(),'2',0,'assets/images/SreenuPic.png')

SELECT * FROM Users

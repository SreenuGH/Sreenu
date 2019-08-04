
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
   photoPath VARCHAR (100),
   userName VARCHAR (15)     NOT NULL,
   passowrd VARCHAR (15)     NOT NULL,
   userRoleType VARCHAR (15)     NOT NULL,
)
SET IDENTITY_INSERT Users ON

INSERT INTO Users(id,fullName,gender,contactPreference,email,phoneNumber,dateOfBirth,isActive,photoPath,userName,passowrd,userRoleType) 
VALUES(1,'SREENU', 'male', 'email', 'sreenu@gmail.com', '+61468822339',GETDATE(),'1',1,'assets/images/SreenuPic.png','sreenu','sreenu','admin')

INSERT INTO Users(id,fullName,gender,contactPreference,email,phoneNumber,dateOfBirth,isActive,photoPath,userName,passowrd,userRoleType) 
VALUES(2,'JESSICA', 'female', 'phone', 'jessica@gmail.com', '+61468822339',GETDATE(),'2',0,'assets/images/SreenuPic.png','jessica','jessica','admin')

INSERT INTO Users(id,fullName,gender,contactPreference,email,phoneNumber,dateOfBirth,isActive,photoPath,userName,passowrd,userRoleType) 
VALUES(3,'AARUSH', 'male', 'email', 'aarush@gmail.com', '+61468822339',GETDATE(),'3',1,'assets/images/SreenuPic.png','aarush','aarush','agent')

INSERT INTO Users(id,fullName,gender,contactPreference,email,phoneNumber,dateOfBirth,isActive,photoPath,userName,passowrd,userRoleType) 
VALUES(4,'TEJO', 'female', 'phone', 'tejo@gmail.com', '+61468822339',GETDATE(),'4',0,'assets/images/SreenuPic.png','tejo','tejo','agent')

INSERT INTO Users(id,fullName,gender,contactPreference,email,phoneNumber,dateOfBirth,isActive,photoPath,userName,passowrd,userRoleType) 
VALUES(5,'KUSHAL', 'male', 'email', 'kushal@gmail.com', '+61468822339',GETDATE(),'1',1,'assets/images/SreenuPic.png','kushal','kushal','user')

INSERT INTO Users(id,fullName,gender,contactPreference,email,phoneNumber,dateOfBirth,isActive,photoPath,userName,passowrd,userRoleType) 
VALUES(6,'MADHURI', 'female', 'phone', 'madhuri@gmail.com', '+61468822339',GETDATE(),'2',0,'assets/images/SreenuPic.png','madhuri','madhuri','user')

SET IDENTITY_INSERT Users OFF
SELECT * FROM USERS


----INSERT INTO Users(id,fullName,gender,contactPreference,email,phoneNumber,dateOfBirth,department,isActive,photoPath) 
----VALUES(1,'SREENU', 'male', 'email', 'sreenu@gmail.com', '+61468822339',GETDATE(),'1',1,'assets/images/SreenuPic.png')

--INSERT INTO Users VALUES(2, 'jesssica', 'female','jesssica', 'phone', 'jesssica@gmail.com','+919100197329')
--INSERT INTO Users VALUES(3, 'Aarush', 'S','male', 'email', 'Aarush@gmail.com', '+61468822339')
--INSERT INTO Users VALUES(4, 'TEjo', 'S','female', 'phone', 'TEjo@gmail.com','+919100197329')
--INSERT INTO Users VALUES(5, 'KushalAnand', 'S','male', 'email', 'KushalAnand@gmail.com', '+61468822339')
--INSERT INTO Users VALUES(6, 'Madhuri', 'S','female', 'phone', 'Madhuri@gmail.com', '+919100197329')

   --drop table Users




    --id: number;
    --fullName: string;
    --gender: string;
    --contactPreference: string;
    --email?: string;
    --phoneNumber?: number;
    --dateOfBirth?: Date;
    --department: string;
    --isActive: boolean;
    --photoPath: string;


-- CREATE TABLE Users(
--   UserID   INT              NOT NULL,
--   UserName VARCHAR (20)     NOT NULL,
--   Password VARCHAR (20)     NOT NULL,
--   FirstName VARCHAR (20)    NOT NULL,
--   MiddleName VARCHAR (20)	,
--   LastName VARCHAR (20)    NOT NULL,
--   DateOfBirth DATETIME NOT NULL,
--   Gender VARCHAR (10)   NOT NULL,
--   EmailID VARCHAR (50)    NOT NULL,
--   PRIMARY KEY (UserID)
--);

--SELECT * FROM Users

--INSERT INTO Users VALUES(1, 'SREENU', 'S','SREENU', NULL, 'KANTAMREDDI', GETDATE(),'male','sreenu@gmail.com')
--INSERT INTO Users VALUES(2, 'jesssica', 'S','jesssica', NULL, 'adavatravu', GETDATE(),'female','jesssica@gmail.com')
--INSERT INTO Users VALUES(3, 'Aarush', 'S','Aarush', NULL, 'KANTAMREDDI', GETDATE(),'male','Aarush@gmail.com')
--INSERT INTO Users VALUES(4, 'TEjo', 'S','TEjo', NULL, 'adavatravu', GETDATE(),'female','TEjo@gmail.com')
--INSERT INTO Users VALUES(5, 'KushalAnand', 'S','SREENU', NULL, 'KANTAMREDDI', GETDATE(),'male','KushalAnand@gmail.com')
--INSERT INTO Users VALUES(6, 'Madhuri', 'S','SREENU', NULL, 'KANTAMREDDI', GETDATE(),'female','Madhuri@gmail.com')


--CREATE TABLE Users(
--   id   INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
--   fullName VARCHAR (100)     NOT NULL,
--   gender VARCHAR (10)   NOT NULL,
--   contactPreference VARCHAR (20)   NOT NULL,
--   email VARCHAR (100)   NOT NULL,
--   phoneNumber VARCHAR (100)   NOT NULL,
--   dateOfBirth DATETIME NOT NULL,
--   department VARCHAR (2)   NOT NULL,
--   isActive  BIT NOT NULL,
--   photoPath VARCHAR (100),
--   )
--   select * from users
---COLUMNS(fullName,gender,contactPreference,email,phoneNumber,dateOfBirth,department,isActive,photoPath) 
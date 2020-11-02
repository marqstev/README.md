CREATE TABLE Certifications(
certificationId INT PRIMARY KEY,
title VARCHAR(50),
experationDate date,
certifyingAgency char(25)
);

CREATE TABLE People(
    memberId INT PRIMARY KEY,
    firstName CHAR(25),
    lastName CHAR(25),
    address VARCHAR(30),
    city CHAR(25),
    state CHAR(25),
    zipCode INT,
    email VARCHAR(50),
    primaryPhoneNumber VARCHAR(12),
    dob DATE,
    startDate DATE,
    gender CHAR(6),
    officialPosition CHAR(15),
    radioNumber VARCHAR(10),
    stationNumber INT,
    isActive CHAR (3)
);

CREATE TABLE UserLogin(
	loginEmail varchar(50),
    loginPassword varchar(50)
);

CREATE TABLE PeopleCertifications(
    certification INT,
    certifiedMember INT,

    FOREIGN KEY (certification)
        REFERENCES Certifications (certificationId),
    FOREIGN KEY (certifiedMember)
        REFERENCES People (memberId)
);

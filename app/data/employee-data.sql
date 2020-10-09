USE team22database;

CREATE TABLE Certifications(
certificationId INT PRIMARY KEY,
title VARCHAR(50),
experationDate date,
certifyingAgency char(25)
);

INSERT INTO Certifications
VALUES (1, 'CPR for Healthcare Providers', '2022-08-09', 'AHA');
INSERT INTO Certifications
VALUES (2, 'CPR for the Professional Rescuer', '2022-03-10', 'ARC');
INSERT INTO Certifications
VALUES (3, 'Firefighter 1', '2023-03-12', 'ATC');
INSERT INTO Certifications
VALUES (4, 'Firefighter 1', '2023-05-09', 'ITC');
INSERT INTO Certifications
VALUES (5, 'POST', '2025-06-09', 'GPA');

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

INSERT INTO People
VALUES (1, 'Dael', 'Gerhardt', '321 Thierer Park', 'Bishop', 'GA', 30677, 'dgerhardt0@surveymonkey.com', '555-774-6528', '1994-12-10', '2012-01-11', 'M', 'Captain', 'A-2', 4, 'T');
INSERT INTO People
VALUES(2, 'Eliza', 'Schreurs', '40284 Highland Drive', 'Ashland', 'GA', 30677, 'eschreurs1@netlog.com', '555-645-4402', '2001-03-08', '2019-03-06', 'F', 'Crew Member', 'A-3', 8, 'T');
INSERT INTO People
VALUES(3, 'Roberta', 'Staner', '82 Express Terrace', 'Watkinsville', 'GA', 30677, 'rstaner2@loc.gov', '555-805-6554', '1961-09-10', '1974-03-11', 'F', 'Chief', 'A-1', 1, 'T');

CREATE TABLE UserLogin(
loginEmail varchar(50),
loginPassword varchar(50)
);

INSERT INTO UserLogin
VALUES ('dgerhardt0@surveymonkey.com', 'qvTWne');
INSERT INTO UserLogin
VALUES ('eschreurs1@netlog.com', '2SpgwV');
INSERT INTO UserLogin
VALUES ('rstaner2@loc.gov', 'eCXLlbDJWrS');

CREATE TABLE PeopleCertifications(
certification INT,
certifiedMember INT,
FOREIGN KEY (certification)
REFERENCES Certifications (certificationId),
FOREIGN KEY (certifiedMember)
REFERENCES People (memberId)
);

INSERT INTO PeopleCertifications
VALUES (1, 1);
INSERT INTO PeopleCertifications
VALUES (1, 5);
INSERT INTO PeopleCertifications
VALUES (2, 2);
INSERT INTO PeopleCertifications
VALUES (2, 3);
INSERT INTO PeopleCertifications
VALUES (3, 2);
INSERT INTO PeopleCertifications
VALUES (3, 4);
INSERT INTO PeopleCertifications
VALUES (3, 5);

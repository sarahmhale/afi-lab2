DROP TABLE IF EXISTS person,town;

CREATE TABLE IF NOT EXISTS town(
  townID INT NOT NULL AUTO_INCREMENT,
  name varchar(64) DEFAULT NULL,
  PRIMARY KEY (townID)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS person (
  personID INT NOT NULL AUTO_INCREMENT,
  name varchar(64) DEFAULT NULL,
  townID INT,
  PRIMARY KEY (personID),
  FOREIGN KEY (townID) REFERENCES town(townID)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

INSERT INTO town(name) VALUES
('UMEÅ'),
('FALUN'),
('MORA'),
('STOCKHOLM');

INSERT INTO person(name,townID) VALUES
('Mås Hallgren',4),
('Sarah Fail',2),
('Sofie Oveberg',1),
('Arnold Fisbel',3),
('Linold Dalträd',4),
('Jeppe klasson',2),
('Jojjo Mos',1),
('Is Kat',3);

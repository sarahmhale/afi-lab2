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
('Måns Hallgren',4),
('Sarah Dale',2),
('Sofie Toveberg',1),
('Arnold Fisbel',3);
